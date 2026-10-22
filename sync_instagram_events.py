#!/usr/bin/env python3
"""
Sincronizador Automático de Eventos de Instagram -> Web Enjoy & Learn
Revisa las cuentas oficiales de Instagram:
- @yomiuri_ruiz
- @ludivine.gomez

Detecta publicaciones recientes sobre talleres, masterclasses y eventos,
actualiza 'events.json', regenera la sección 'Eventos Próximos' en HTML
y publica los cambios en GitHub.
"""

import os
import sys
import json
import re
import datetime
import subprocess

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
EVENTS_FILE = os.path.join(BASE_DIR, "events.json")
INDEX_FILE = os.path.join(BASE_DIR, "index.html")
ENJOY_FILE = os.path.join(BASE_DIR, "enjoy-and-learn.html")

INSTAGRAM_HANDLES = ["yomiuri_ruiz", "ludivine.gomez"]

EVENT_KEYWORDS = [
    "evento", "masterclass", "taller", "bailoterapia", "social", "intensivo",
    "clase magistral", "workshop", "fechas", "horario", "reserva", "plazas"
]

def load_current_events():
    if os.path.exists(EVENTS_FILE):
        try:
            with open(EVENTS_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"[!] Error leyendo {EVENTS_FILE}: {e}")
    return []

def save_events(events):
    with open(EVENTS_FILE, "w", encoding="utf-8") as f:
        json.dump(events, f, indent=2, ensure_ascii=False)
    print(f"[✓] {len(events)} eventos guardados en {EVENTS_FILE}")

def fetch_instagram_posts(handle):
    """
    Intenta consultar las publicaciones recientes públicas del perfil con Instaloader sin bloquearse.
    Si Instagram impone login o rate-limit (HTTP 429), captura el error de inmediato y continúa con los eventos cacheados.
    """
    posts_data = []
    try:
        import instaloader
        L = instaloader.Instaloader(
            download_pictures=False,
            download_videos=False,
            download_video_thumbnails=False,
            download_geotags=False,
            download_comments=False,
            save_metadata=False,
            compress_json=False,
            max_connection_attempts=1
        )
        print(f"[*] Consultando perfil de Instagram @{handle}...")
        profile = instaloader.Profile.from_username(L.context, handle)
        
        count = 0
        for post in profile.get_posts():
            if count >= 6:  # Últimas 6 publicaciones
                break
            caption = post.caption or ""
            is_event = any(kw in caption.lower() for kw in EVENT_KEYWORDS)
            
            if is_event:
                posts_data.append({
                    "id": f"ig_{post.shortcode}",
                    "handle": handle,
                    "shortcode": post.shortcode,
                    "caption": caption,
                    "date": post.date_utc.strftime("%Y-%m-%d"),
                    "date_display": post.date_utc.strftime("%d %b %Y"),
                    "url": f"https://www.instagram.com/p/{post.shortcode}/",
                    "image_url": post.url
                })
            count += 1
            
    except Exception as e:
        print(f"[!] Aviso: No se pudieron obtener posts en vivo de @{handle} ({e}).")
        print("    -> Se utilizarán los eventos vigentes de events.json como respaldo seguro.")
    
    return posts_data

def generate_events_html(events):
    """
    Genera el bloque HTML interactivo de Eventos Próximos para index.html
    """
    cards_html = []
    for ev in events:
        badge = ev.get("badge", "EVENTO").upper()
        title = ev.get("title", "Taller de Baile")
        date_display = ev.get("date_display", "")
        instructor = ev.get("instructor", "")
        desc = ev.get("description", ev.get("caption", "")[:180] + "...")
        img = ev.get("image", "assets/event-salsa-cubana.jpg")
        ig_url = ev.get("instagram_url", f"https://www.instagram.com/{ev.get('handle', '')}/")
        service = ev.get("booking_service", "salsa-yomiuri")
        instructor_key = "she" if "ludivine" in ev.get("handle", "").lower() else "he"

        card = f"""
        <!-- EVENTO: {title} -->
        <article class="upcoming-event-card" data-category="{ev.get('category', 'all')}">
          <div class="event-card-media">
            <span class="event-card-badge">{badge}</span>
            <img src="{img}" alt="{title}" loading="lazy">
          </div>
          <div class="event-card-body">
            <div class="event-card-meta">
              <span class="event-date">📅 {date_display}</span>
              <span class="event-instructor">👤 {instructor}</span>
            </div>
            <h3 class="event-title">{title}</h3>
            <p class="event-desc">{desc}</p>
            <div class="event-card-footer">
              <button class="btn-primary" data-open-modal="booking" data-preselect-instructor="{instructor_key}" data-preselect-service="{service}">
                Reservar Plaza
              </button>
              <a href="{ig_url}" target="_blank" rel="noopener noreferrer" class="btn-outline" title="Ver en Instagram">
                Ver en Instagram ↗
              </a>
            </div>
          </div>
        </article>"""
        cards_html.append(card)

    return "\n".join(cards_html)

def update_html_files(events_html):
    """
    Actualiza la sección de eventos en index.html y enjoy-and-learn.html
    """
    marker_start = "<!-- BEGIN_UPCOMING_EVENTS -->"
    marker_end = "<!-- END_UPCOMING_EVENTS -->"

    for file_path in [INDEX_FILE, ENJOY_FILE]:
        if not os.path.exists(file_path):
            continue

        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        if marker_start in content and marker_end in content:
            new_section = f"{marker_start}\n{events_html}\n        {marker_end}"
            updated = re.sub(
                f"{re.escape(marker_start)}.*?{re.escape(marker_end)}",
                new_section,
                content,
                flags=re.DOTALL
            )
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(updated)
            print(f"[✓] Sección de eventos actualizada en {os.path.basename(file_path)}")
        else:
            print(f"[-] Marcadores de eventos no encontrados en {os.path.basename(file_path)}")

def git_commit_and_push():
    """
    Si hay cambios detectados, crea un commit y hace push a GitHub.
    """
    try:
        status = subprocess.check_output(["git", "status", "--porcelain"], cwd=BASE_DIR).decode("utf-8")
        if not status.strip():
            print("[*] No hay cambios nuevos en los eventos. El repositorio está al día.")
            return

        print("[*] Cambios detectados en eventos. Haciendo commit y push a GitHub...")
        subprocess.check_call(["git", "add", "events.json", "index.html", "enjoy-and-learn.html"], cwd=BASE_DIR)
        subprocess.check_call(
            ["git", "commit", "-m", f"chore(auto): sincronizar eventos de Instagram [{datetime.date.today()}]"],
            cwd=BASE_DIR
        )
        subprocess.check_call(["git", "push", "origin", "main"], cwd=BASE_DIR)
        print("[✓] ¡Despliegue a GitHub completado con éxito!")
    except Exception as e:
        print(f"[!] Error durante git push: {e}")

def main():
    print("=" * 60)
    print("🚀 Iniciando Sincronizador de Eventos de Instagram...")
    print(f"⏰ Fecha/Hora: {datetime.datetime.now()}")
    print("=" * 60)

    current_events = load_current_events()
    existing_ids = {e["id"] for e in current_events if "id" in e}

    new_events_found = 0
    for handle in INSTAGRAM_HANDLES:
        posts = fetch_instagram_posts(handle)
        for p in posts:
            if p["id"] not in existing_ids:
                print(f"[+] ¡Nuevo evento detectado en @{handle}: {p['shortcode']}!")
                current_events.insert(0, {
                    "id": p["id"],
                    "handle": handle,
                    "instructor": "Ludivine Gomez" if "ludivine" in handle.lower() else "Yomiuri Ruiz",
                    "title": f"Taller / Evento con @{handle}",
                    "date": p["date"],
                    "date_display": p["date_display"],
                    "category": "bienestar" if "ludivine" in handle.lower() else "salsa",
                    "badge": "NUEVO EVENTO",
                    "location": "Luxemburgo",
                    "description": p["caption"][:200] + ("..." if len(p["caption"]) > 200 else ""),
                    "image": "assets/event-salsa-cubana.jpg",
                    "instagram_url": p["url"],
                    "booking_service": "bailoterapia-ludivine" if "ludivine" in handle.lower() else "salsa-yomiuri"
                })
                existing_ids.add(p["id"])
                new_events_found += 1

    save_events(current_events)
    events_html = generate_events_html(current_events)
    update_html_files(events_html)

    if "--push" in sys.argv or new_events_found > 0:
        git_commit_and_push()

    print("=" * 60)
    print(f"✅ Sincronización completada. Nuevos eventos: {new_events_found}.")
    print("=" * 60)

if __name__ == "__main__":
    main()
