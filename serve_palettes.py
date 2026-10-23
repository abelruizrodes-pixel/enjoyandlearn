#!/usr/bin/env python3
"""
Servidor Multi-Puerto de Comparación de Paletas - Enjoy & Learn
- Puerto 8081: Paleta 1 - "Urbano" (Azul Medianoche #0B132B)
- Puerto 8082: Paleta 2 - "Caribe" (Blanco Arena #F4F1EA)
- Puerto 8083: Paleta 3 - "Asfalto & Pasión" (Negro Asfalto #121212)
- Puerto 8084: Paleta 4 - "Etalonaje Cinematográfico" (Pizarra Abisal #1A1C23)
- Puerto 8085: Paleta 5 - "Vanguardia & Microcemento" (Gris Lienzo #E4E3E0)
- Puerto 8086: Paleta 6 - "Sprezzatura" (Lino Crudo #F9F6F0)
"""

import http.server
import socketserver
import threading
import os
import re

WEB_DIR = os.path.dirname(os.path.abspath(__file__))

class PaletteHTTPHandler(http.server.SimpleHTTPRequestHandler):
    palette_name = "urbano"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=WEB_DIR, **kwargs)

    def do_GET(self):
        # Si pide la raíz o un archivo HTML, inyectamos la paleta correspondiente al puerto
        clean_path = self.path.split("?")[0]
        if clean_path in ["", "/", "/index.html", "/enjoy-and-learn.html", "/tienda.html"]:
            file_to_serve = "index.html" if clean_path in ["", "/"] else clean_path.lstrip("/")
            full_path = os.path.join(WEB_DIR, file_to_serve)
            
            if os.path.exists(full_path):
                try:
                    with open(full_path, "r", encoding="utf-8") as f:
                        content = f.read()

                    # Inyectar el atributo data-palette y clase del body correspondiente al puerto
                    content = re.sub(r'<html([^>]*)data-palette="[^"]*"', f'<html\\1data-palette="{self.palette_name}"', content)
                    content = re.sub(r'<body([^>]*)class="palette-[^"]*"', f'<body\\1class="palette-{self.palette_name}"', content)

                    encoded = content.encode("utf-8")
                    self.send_response(200)
                    self.send_header("Content-Type", "text/html; charset=utf-8")
                    self.send_header("Content-Length", str(len(encoded)))
                    self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
                    self.end_headers()
                    self.wfile.write(encoded)
                    return
                except Exception as e:
                    pass
        
        # Para archivos estáticos (CSS, JS, imágenes), comportamiento normal
        super().do_GET()

def make_handler(palette):
    class CustomHandler(PaletteHTTPHandler):
        palette_name = palette
    return CustomHandler

def run_server(port, palette):
    handler = make_handler(palette)
    # Allow port reuse
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"[*] Puerto {port}: Paleta '{palette}' activa.")
        httpd.serve_forever()

if __name__ == "__main__":
    servers = [
        (8081, "urbano"),
        (8082, "caribe"),
        (8083, "asfalto"),
        (8084, "cinematografico"),
        (8085, "vanguardia"),
        (8086, "sprezzatura")
    ]
    
    threads = []
    for port, pal in servers:
        t = threading.Thread(target=run_server, args=(port, pal), daemon=False)
        t.start()
        threads.append(t)
        
    print("[*] Todos los servidores multi-paleta iniciados correctamente.")
    for t in threads:
        t.join()
