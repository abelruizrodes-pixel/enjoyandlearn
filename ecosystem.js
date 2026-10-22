/**
 * ECOSISTEMA WEB DUAL & ACADEMIA: "Enjoy and Learn" & "Tienda Oficial"
 * Controladores de interactividad, multilingüe, carrito de compra,
 * filtros de instructores/catálogo y transiciones suaves.
 */

// ==========================================================================
// 1. DICCIONARIO MULTILINGÜE (ES / EN / FR)
// ==========================================================================
const TRANSLATIONS = {
  es: {
    nav_instructors: "Instructores",
    nav_classes: "Clases & Estilos",
    nav_events: "Eventos",
    nav_booking: "Reserva tu Clase",
    nav_shop: "Tienda Oficial 🛍️",
    bridge_to_dance: "Clases de Baile 💃",
    hero_kicker_dance: "Salsa Cubana · Bachata · Rumba · Bailoterapia",
    hero_title_dance: "Dos instructores individuales, <span class='accent'>dos metodologías únicas</span> para tu aprendizaje.",
    hero_lead_dance: "Clases 100% individuales en Luxemburgo con metodologías especializadas e independientes: aprende técnica cubana, ritmo y conducción con <strong>Yomiuri Ruiz</strong> (Salsa Cubana tradicional, Bachata y Rumba afrocubana) o bien estilo femenino, fluidez corporal y <strong>Bailoterapia enfocada a Salud y Bienestar</strong> con <strong>Ludivine Gomez</strong>. Cada instructor imparte sus propias clases.",
    hero_cta_instructors: "Conoce a los Instructores",
    instructors_kicker: "Equipo Pedagógico",
    instructors_title: "Elige tu instructor ideal",
    filter_all: "Todos",
    filter_classes: "Clases",
    filter_events: "Eventos",
    filter_workshops: "Talleres",
    modal_title: "Agenda tu Clase o Experiencia",
    modal_subtitle: "Selecciona tu instructor, modalidad y fecha. Te responderemos en menos de 24h.",
    modal_submit: "Confirmar Solicitud de Reserva",
    modal_success: "¡Gracias! Tu solicitud ha sido registrada. Te contactaremos muy pronto para confirmar.",
    receipt_status: "Acuse de Recibo",
    receipt_banner_title: "Estoy revisando la agenda en este momento...",
    receipt_banner_text: "Estoy comprobando los horarios disponibles para darte el mejor hueco. En breve te confirmo tu reserva por correo o WhatsApp para que podamos bailar pronto juntos.",
    receipt_ref_label: "Referencia",
    receipt_name_label: "Titular",
    receipt_email_label: "Email",
    receipt_instructor_label: "Instructor",
    receipt_service_label: "Modalidad",
    receipt_date_label: "Fecha solicitada",
    receipt_copy_notice: "📧 Te he enviado una copia de este acuse a tu correo. Revisa también tu carpeta de spam.",
    receipt_whatsapp_btn: "Escríbeme por WhatsApp",
    receipt_close_btn: "Cerrar y Volver a la Web",
    footer_rights: "Todos los derechos reservados.",
    footer_privacy: "Política de Privacidad",
    footer_legal: "Aviso Legal"
  },
  en: {
    nav_instructors: "Instructors",
    nav_classes: "Classes & Styles",
    nav_events: "Events",
    nav_booking: "Book a Class",
    nav_shop: "Official Store 🛍️",
    bridge_to_dance: "Dance Classes 💃",
    hero_kicker_dance: "Cuban Salsa · Bachata · Rumba · Dance Therapy",
    hero_title_dance: "Two individual instructors, <span class='accent'>two unique methodologies</span> for your learning.",
    hero_lead_dance: "100% individual classes in Luxembourg with specialized, independent methodologies: learn Cuban technique, rhythm, and lead with <strong>Yomiuri Ruiz</strong> (traditional Cuban Salsa, Bachata & Afro-Cuban Rumba) or feminine styling, bodily flow, and <strong>Dance Therapy focused on Health & Wellness</strong> with <strong>Ludivine Gomez</strong>. Each instructor leads their own classes.",
    hero_cta_instructors: "Meet the Instructors",
    instructors_kicker: "Teaching Team",
    instructors_title: "Choose your ideal instructor",
    filter_all: "All",
    filter_classes: "Classes",
    filter_events: "Events",
    filter_workshops: "Workshops",
    modal_title: "Book Your Class or Session",
    modal_subtitle: "Select your preferred instructor, style and date. We will reply within 24 hours.",
    modal_submit: "Confirm Booking Request",
    modal_success: "Thank you! Your request has been recorded. We will contact you shortly to confirm.",
    receipt_status: "Booking Receipt",
    receipt_banner_title: "I'm checking the schedule right now...",
    receipt_banner_text: "I'm currently checking available time slots to find the best match for you. I'll confirm your booking shortly via email or WhatsApp so we can dance together soon.",
    receipt_ref_label: "Reference",
    receipt_name_label: "Name",
    receipt_email_label: "Email",
    receipt_instructor_label: "Instructor",
    receipt_service_label: "Class / Style",
    receipt_date_label: "Requested Date",
    receipt_copy_notice: "📧 I've sent a copy of this receipt to your email. Please check your spam folder too.",
    receipt_whatsapp_btn: "Message me on WhatsApp",
    receipt_close_btn: "Close & Return to Site",
    footer_rights: "All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_legal: "Legal Notice"
  },
  fr: {
    nav_instructors: "Professeurs",
    nav_classes: "Cours & Styles",
    nav_events: "Événements",
    nav_booking: "Réserver un Cours",
    nav_shop: "Boutique Officielle 🛍️",
    bridge_to_dance: "Cours de Danse 💃",
    hero_kicker_dance: "Salsa Cubaine · Bachata · Rumba · Danse-Thérapie",
    hero_title_dance: "Deux professeurs individuels, <span class='accent'>deux méthodes uniques</span> pour votre progression.",
    hero_lead_dance: "Des cours 100% individuels au Luxembourg avec des méthodologies spécialisées et indépendantes : apprenez la technique cubaine, le rythme et le guidage avec <strong>Yomiuri Ruiz</strong> (Salsa Cubaine traditionnelle, Bachata et Rumba afro-cubaine) ou le style féminin, la fluidité corporelle et la <strong>Danse-thérapie axée sur la Santé et le Bien-être</strong> avec <strong>Ludivine Gomez</strong>. Chaque professeur dispense ses propres cours.",
    hero_cta_instructors: "Découvrir les Professeurs",
    instructors_kicker: "Équipe Pédagogique",
    instructors_title: "Choisissez votre professeur idéal",
    filter_all: "Tous",
    filter_classes: "Cours",
    filter_events: "Événements",
    filter_workshops: "Ateliers",
    modal_title: "Réservez votre Cours ou Atelier",
    modal_subtitle: "Sélectionnez votre professeur, discipline et date. Réponse sous 24h.",
    modal_submit: "Confirmer la Réservation",
    modal_success: "Merci ! Votre demande a été enregistrée. Nous vous contacterons très vite pour confirmer.",
    receipt_status: "Accusé de Réception",
    receipt_banner_title: "Je consulte actuellement mon planning...",
    receipt_banner_text: "Je vérifie les créneaux disponibles pour vous réserver le meilleur horaire. Je vous confirme très vite votre réservation par e-mail ou WhatsApp pour qu'on se retrouve bientôt sur la piste.",
    receipt_ref_label: "Référence",
    receipt_name_label: "Nom",
    receipt_email_label: "E-mail",
    receipt_instructor_label: "Professeur",
    receipt_service_label: "Discipline",
    receipt_date_label: "Date souhaitée",
    receipt_copy_notice: "📧 Une copie de cet accusé vous a été envoyée par e-mail. Vérifiez aussi vos spams.",
    receipt_whatsapp_btn: "M'écrire sur WhatsApp",
    receipt_close_btn: "Fermer et Retourner au Site",
    footer_rights: "Tous droits réservés.",
    footer_privacy: "Politique de Confidentialité",
    footer_legal: "Mentions Légales"
  }
};

let currentLang = localStorage.getItem("ecosystem_lang") || "es";

function applyLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem("ecosystem_lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[lang][key]) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });

  const langLabel = document.getElementById("currentLangLabel");
  if (langLabel) langLabel.textContent = lang.toUpperCase();

  document.querySelectorAll(".lang-opt").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  document.querySelectorAll(".receipt-lang-pill").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-receipt-lang") === lang);
  });
}

// ==========================================================================
// 2. INICIALIZACIÓN GLOBAL
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Idioma
  applyLanguage(currentLang);

  // Dropdown selector de idioma
  initLanguageDropdown();

  // Header sticky scroll effect
  initHeaderScroll();

  // Menú hamburguesa móvil
  initMobileDrawer();

  // Modal de reserva con preselección de instructor y estilo
  initBookingModal();

  // Galería de eventos (filtros + parallax suave)
  initEventsGallery();

  // Filtro de instructores (Él / Ella / Ambos)
  initInstructorFilter();

  // Tienda Online: Carrito & Filtros de Catálogo
  initShop();

  // Transiciones fluidas entre páginas
  initBridgeTransitions();

  // Comparador interactivo de paletas (Urbano, Caribe, Asfalto)
  initPaletteSwitcher();
});

// ==========================================================================
// 3. SELECTOR DE IDIOMA
// ==========================================================================
function initLanguageDropdown() {
  const langBtn = document.getElementById("langToggleBtn");
  const langDropdown = document.getElementById("langDropdown");

  if (langBtn && langDropdown) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle("open");
    });

    document.querySelectorAll(".lang-opt").forEach(btn => {
      btn.addEventListener("click", () => {
        applyLanguage(btn.getAttribute("data-lang"));
        langDropdown.classList.remove("open");
      });
    });

    document.addEventListener("click", () => {
      langDropdown.classList.remove("open");
    });
  }
}

// ==========================================================================
// 4. HEADER Y MENÚ MÓVIL
// ==========================================================================
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 30);
    }
  }, { passive: true });
}

function initMobileDrawer() {
  const mobileToggle = document.getElementById("mobileToggleBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.toggle("open");
      mobileToggle.innerHTML = isOpen ? "✕" : "☰";
      mobileToggle.setAttribute("aria-expanded", isOpen);
      // Bloquear scroll de fondo en móviles (iOS y Android)
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mobileDrawer.querySelectorAll("a, button").forEach(elem => {
      elem.addEventListener("click", () => {
        if (elem.id !== "mobileOpenCartBtn") {
          mobileDrawer.classList.remove("open");
          mobileToggle.innerHTML = "☰";
          mobileToggle.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        }
      });
    });

    // Cerrar automáticamente si la pantalla rota o supera 900px
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900 && mobileDrawer.classList.contains("open")) {
        mobileDrawer.classList.remove("open");
        mobileToggle.innerHTML = "☰";
        mobileToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });

    // Cerrar con Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileDrawer.classList.contains("open")) {
        mobileDrawer.classList.remove("open");
        mobileToggle.innerHTML = "☰";
        mobileToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
  }
}

// ==========================================================================
// 5. FILTROS DE INSTRUCTORES (ÉL / ELLA / AMBOS)
// ==========================================================================
function initInstructorFilter() {
  const filterTabs = document.querySelectorAll("[data-instructor-filter]");
  const instructorCards = document.querySelectorAll(".instructor-card");

  if (!filterTabs.length || !instructorCards.length) return;

  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.getAttribute("data-instructor-filter");
      instructorCards.forEach(card => {
        const role = card.getAttribute("data-instructor");
        if (filter === "all" || role === filter) {
          card.style.display = "";
          card.style.opacity = "1";
        } else {
          card.style.display = "none";
          card.style.opacity = "0";
        }
      });
    });
  });
}

// ==========================================================================
// 6. MODAL DE RESERVA (CON PRESELECCIÓN DINÁMICA)
// ==========================================================================
function initBookingModal() {
  const backdrop = document.getElementById("bookingModalBackdrop");
  const closeBtn = document.getElementById("modalCloseBtn");
  const openButtons = document.querySelectorAll("[data-open-modal='booking']");
  const form = document.getElementById("bookingForm");
  const modalHeader = document.getElementById("bookingModalHeader");
  const receiptView = document.getElementById("bookingReceipt");
  const successMsg = document.getElementById("formSuccessMsg");
  const instructorSelect = document.getElementById("bookInstructor");
  const serviceSelect = document.getElementById("bookService");

  function openModal(preselectInstructor, preselectService) {
    if (backdrop) {
      if (preselectInstructor && instructorSelect) {
        instructorSelect.value = preselectInstructor;
      }
      if (preselectService && serviceSelect) {
        serviceSelect.value = preselectService;
      }

      // Asegurar estado inicial limpio
      if (modalHeader) modalHeader.style.display = "block";
      if (form) form.style.display = "block";
      if (receiptView) receiptView.style.display = "none";
      if (successMsg) successMsg.style.display = "none";

      backdrop.classList.add("active");
      document.body.style.overflow = "hidden";
      const firstInput = backdrop.querySelector("input, select");
      if (firstInput) setTimeout(() => firstInput.focus(), 100);
    }
  }

  function closeModal() {
    if (backdrop) {
      backdrop.classList.remove("active");
      document.body.style.overflow = "";
      setTimeout(() => {
        if (form) {
          form.reset();
          form.style.display = "block";
        }
        if (modalHeader) modalHeader.style.display = "block";
        if (receiptView) receiptView.style.display = "none";
        if (successMsg) successMsg.style.display = "none";
      }, 300);
    }
  }

  openButtons.forEach(btn => btn.addEventListener("click", (e) => {
    e.preventDefault();
    const preInstructor = btn.getAttribute("data-preselect-instructor");
    const preService = btn.getAttribute("data-preselect-service");
    openModal(preInstructor, preService);
  }));

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop && backdrop.classList.contains("active")) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("bookName");
      const emailInput = document.getElementById("bookEmail");
      const dateInput = document.getElementById("bookDate");

      const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "Estimado/a alumno/a";
      const email = emailInput && emailInput.value.trim() ? emailInput.value.trim() : "No especificado";
      const rawDate = dateInput ? dateInput.value : "";

      let formattedDate = rawDate;
      if (rawDate) {
        try {
          const d = new Date(rawDate + "T00:00:00");
          formattedDate = d.toLocaleDateString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          });
          formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
        } catch (err) {
          formattedDate = rawDate;
        }
      }

      let instructorName = "";
      if (instructorSelect && instructorSelect.selectedIndex >= 0) {
        const fullOption = instructorSelect.options[instructorSelect.selectedIndex].text;
        instructorName = fullOption.split("·")[0].trim();
      }

      let serviceName = "Sesión / Clase Individual";
      if (serviceSelect && serviceSelect.selectedIndex >= 0) {
        serviceName = serviceSelect.options[serviceSelect.selectedIndex].text;
      }

      const randomRef = "ENJ-" + Math.floor(1000 + Math.random() * 9000);

      if (receiptView) {
        const refEl = document.getElementById("receiptRef");
        const nameEl = document.getElementById("receiptName");
        const emailEl = document.getElementById("receiptEmail");
        const instructorEl = document.getElementById("receiptInstructor");
        const instructorRow = document.getElementById("receiptInstructorRow");
        const serviceEl = document.getElementById("receiptService");
        const dateEl = document.getElementById("receiptDate");
        const headingEl = document.getElementById("receiptHeading");
        const waLink = document.getElementById("receiptWhatsAppLink");
        const receiptCloseBtn = document.getElementById("receiptCloseBtn");

        if (refEl) refEl.textContent = "#" + randomRef;
        if (nameEl) nameEl.textContent = name;
        if (emailEl) emailEl.textContent = email;
        if (serviceEl) serviceEl.textContent = serviceName;
        if (dateEl) dateEl.textContent = formattedDate || "Por convenir";
        
        const firstName = name.split(" ")[0];
        
        function updateReceiptHeader() {
          if (!headingEl) return;
          if (currentLang === 'fr') {
            headingEl.textContent = `Bonjour ${firstName} ! J'ai bien reçu votre demande`;
          } else if (currentLang === 'en') {
            headingEl.textContent = `Hi ${firstName}! I've received your request`;
          } else {
            headingEl.textContent = `¡Hola ${firstName}! He recibido tu solicitud`;
          }
        }

        function updateWhatsAppLink() {
          if (!waLink) return;
          let waMessage = "";
          if (currentLang === 'fr') {
            waMessage = `Bonjour Enjoy & Learn ! 👋 Je viens d'envoyer ma demande de réservation sur le site :\n\n` +
              `📋 *Référence :* #${randomRef}\n` +
              `👤 *Nom :* ${name}\n` +
              (instructorName ? `🕺 *Professeur :* ${instructorName}\n` : "") +
              `🎯 *Discipline :* ${serviceName}\n` +
              `📅 *Date souhaitée :* ${rawDate || formattedDate}\n` +
              `📧 *E-mail :* ${email}\n\n` +
              `Je reste à l'écoute pendant que vous vérifiez le planning pour me confirmer ma place. Merci beaucoup !`;
          } else if (currentLang === 'en') {
            waMessage = `Hi Enjoy & Learn! 👋 I just submitted my booking request on the website:\n\n` +
              `📋 *Reference:* #${randomRef}\n` +
              `👤 *Name:* ${name}\n` +
              (instructorName ? `🕺 *Instructor:* ${instructorName}\n` : "") +
              `🎯 *Class / Style:* ${serviceName}\n` +
              `📅 *Requested Date:* ${rawDate || formattedDate}\n` +
              `📧 *Email:* ${email}\n\n` +
              `I'll stay tuned while you check the schedule to confirm my spot. Thank you so much!`;
          } else {
            waMessage = `¡Hola Enjoy & Learn! 👋 Acabo de enviar mi solicitud de reserva en la web:\n\n` +
              `📋 *Referencia:* #${randomRef}\n` +
              `👤 *Nombre:* ${name}\n` +
              (instructorName ? `🕺 *Instructor:* ${instructorName}\n` : "") +
              `🎯 *Modalidad:* ${serviceName}\n` +
              `📅 *Fecha solicitada:* ${rawDate || formattedDate}\n` +
              `📧 *Email:* ${email}\n\n` +
              `Estoy atento/a a cuando revises la agenda para confirmar mi plaza. ¡Muchas gracias!`;
          }
          waLink.href = `https://wa.me/33749088022?text=${encodeURIComponent(waMessage)}`;
        }

        updateReceiptHeader();
        updateWhatsAppLink();

        // Conectar botones de cambio de idioma dentro del acuse de recibo
        const receiptPills = document.querySelectorAll(".receipt-lang-pill");
        receiptPills.forEach(pill => {
          pill.onclick = (e) => {
            e.preventDefault();
            const targetLang = pill.getAttribute("data-receipt-lang");
            applyLanguage(targetLang);
            updateReceiptHeader();
            updateWhatsAppLink();
          };
        });

        if (instructorRow && instructorEl) {
          if (instructorName) {
            instructorEl.textContent = instructorName;
            instructorRow.style.display = "flex";
          } else {
            instructorRow.style.display = "none";
          }
        }

        if (receiptCloseBtn) {
          receiptCloseBtn.onclick = closeModal;
        }

        // Transición visual elegante: Ocultar form, mostrar acuse de recibo
        if (modalHeader) modalHeader.style.display = "none";
        form.style.display = "none";
        receiptView.style.display = "flex";

        // Enviar notificación por correo a enjoyandlearn20@gmail.com con acuse automático al cliente
        const notesInput = document.getElementById("bookNotes");
        const notes = notesInput ? notesInput.value.trim() : "";

        // Mensaje cálido, cercano y trilingüe para la respuesta automática por email
        const autoresponseTrilingual = 
`¡Hola ${firstName}! 💃 / Hi ${firstName}! / Bonjour ${firstName} !

✨ [ESPAÑOL]
¡Muchas gracias por escribirme! Ya tengo en mis manos tu solicitud de reserva (#${randomRef}).
Estoy revisando la agenda en este momento para darte el mejor hueco y muy pronto te confirmaré tu reserva por aquí o por WhatsApp para que podamos bailar pronto juntos.

✨ [ENGLISH]
Thank you so much for reaching out! I've received your booking request (#${randomRef}).
I'm checking the schedule right now to find the best time slot for you, and I'll confirm your reservation very shortly via email or WhatsApp so we can start dancing together soon!

✨ [FRANÇAIS]
Merci beaucoup pour votre message ! J'ai bien reçu votre demande de réservation (#${randomRef}).
Je consulte actuellement mon planning afin de vous réserver le créneau idéal, et je vous confirme très vite votre réservation par e-mail ou WhatsApp pour qu'on se retrouve bientôt sur la piste !

────────────────────────────────────────────
📋 DATOS REGISTRADOS / SUMMARY / DÉTAILS:
• Referencia / Reference / Référence: #${randomRef}
• Titular / Name / Nom: ${name}
• Email: ${email}
• Instructor / Professeur: ${instructorName || 'A coordinar / TBD'}
• Modalidad / Style / Discipline: ${serviceName}
• Fecha / Date: ${formattedDate || rawDate || 'Flexible / A convenir'}
• Notas / Notes: ${notes || 'Sin notas adicionales'}
────────────────────────────────────────────

Nos vemos muy pronto bailando / See you on the dance floor soon / À très vite sur la piste ! 🎶

Enjoy & Learn · Luxembourg 🇱🇺
WhatsApp directo: +33 7 49 08 80 22
Web: https://abelruizrodes-pixel.github.io/enjoyandlearn/`;

        const emailPayload = {
          _subject: `Nueva Reserva [${randomRef}] - ${name} (${serviceName})`,
          _template: "table",
          _autoresponse: autoresponseTrilingual,
          "Código de Referencia": `#${randomRef}`,
          "Nombre Completo": name,
          "Correo Electrónico": email,
          "Instructor": instructorName || "Por asignar",
          "Modalidad / Clase": serviceName,
          "Fecha Solicitada": rawDate || formattedDate,
          "Comentarios / Notas": notes || "Sin comentarios adicionales"
        };

        fetch("https://formsubmit.co/ajax/enjoyandlearn20@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(emailPayload)
        }).catch(err => {
          console.warn("Envío de reserva a enjoyandlearn20@gmail.com:", err);
        });
      } else if (successMsg) {
        successMsg.innerHTML = `<strong>¡Acuse de Recibo (#${randomRef})!</strong> Hemos recibido tu solicitud correctamente. Pronto te confirmaremos tu reserva.`;
        successMsg.style.display = "block";
        setTimeout(() => closeModal(), 4000);
      }
    });
  }
}

// ==========================================================================
// 7. GALERÍA FLOTANTE (EVENTOS)
// ==========================================================================
function initEventsGallery() {
  const filterButtons = document.querySelectorAll(".filter-btn[data-filter]");
  const masonryItems = document.querySelectorAll(".masonry-item");

  if (!filterButtons.length || !masonryItems.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      masonryItems.forEach(item => {
        const category = item.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          item.style.display = "";
          item.style.opacity = "1";
        } else {
          item.style.display = "none";
          item.style.opacity = "0";
        }
      });
    });
  });

  if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          masonryItems.forEach((item, index) => {
            const speed = (index % 3 + 1) * 0.04;
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              const offset = (window.innerHeight - rect.top) * speed;
              const img = item.querySelector(".masonry-media");
              if (img) {
                img.style.transform = `translateY(${offset * 0.3}px) scale(1.04)`;
              }
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
}

// ==========================================================================
// 8. TIENDA ONLINE: CARRITO SLIDE-OVER & FILTROS DE CATÁLOGO
// ==========================================================================
function initShop() {
  // --- A. Filtros de catálogo en tienda.html ---
  const shopFilters = document.querySelectorAll("[data-shop-filter]");
  const productCards = document.querySelectorAll(".category-card[data-shop-category], .product-card[data-shop-category]");

  shopFilters.forEach(btn => {
    btn.addEventListener("click", () => {
      shopFilters.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-shop-filter");
      productCards.forEach(card => {
        const category = card.getAttribute("data-shop-category");
        if (filter === "all" || category === filter) {
          card.style.display = "";
          card.style.opacity = "1";
        } else {
          card.style.display = "none";
          card.style.opacity = "0";
        }
      });
    });
  });

  // Enlaces de navegación rápida de categorías
  document.querySelectorAll("[data-filter-link]").forEach(link => {
    link.addEventListener("click", (e) => {
      const targetCategory = link.getAttribute("data-filter-link");
      const matchingFilterBtn = document.querySelector(`[data-shop-filter="${targetCategory}"]`);
      if (matchingFilterBtn) {
        matchingFilterBtn.click();
      }
    });
  });

  // --- B. Gestión del Carrito (State en LocalStorage) ---
  const CART_KEY = "enjoy_shop_cart";
  let cart = [];
  try {
    const saved = localStorage.getItem(CART_KEY);
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }

  const drawerBackdrop = document.getElementById("cartDrawerBackdrop");
  const openCartBtn = document.getElementById("openCartBtn");
  const mobileOpenCartBtn = document.getElementById("mobileOpenCartBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartItemsList = document.getElementById("cartItemsList");
  const cartTotalPrice = document.getElementById("cartTotalPrice");
  const cartCountBadges = document.querySelectorAll("#cartCount, #mobileOpenCartBtn");
  const checkoutBtn = document.getElementById("checkoutBtn");

  function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    renderCart();
  }

  function openCartDrawer() {
    if (drawerBackdrop) {
      drawerBackdrop.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function closeCartDrawer() {
    if (drawerBackdrop) {
      drawerBackdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  function renderCart() {
    // Calcular cantidad total de artículos y subtotal
    const totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);

    // Actualizar badges
    const badge = document.getElementById("cartCount");
    if (badge) badge.textContent = totalItems;

    if (mobileOpenCartBtn) {
      mobileOpenCartBtn.textContent = `Ver mi Carrito (${totalItems})`;
    }

    if (cartTotalPrice) {
      cartTotalPrice.textContent = `${totalPrice.toFixed(2)} €`;
    }

    if (!cartItemsList) return;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); margin: 3rem auto;">
          <p style="font-size: 2.5rem; margin-bottom: 0.5rem;">🛍️</p>
          <p style="font-size: 1.05rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">Tu carrito está vacío</p>
          <p style="font-size: 0.85rem;">Explora nuestra ropa de baile, accesorios de bailoterapia o bonos de clases.</p>
        </div>
      `;
      return;
    }

    cartItemsList.innerHTML = cart.map((item, idx) => `
      <div class="cart-item">
        <img src="${item.img || 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=150&q=80'}" alt="${item.name}">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span>${item.price.toFixed(2)} € × ${item.qty || 1} = ${(item.price * (item.qty || 1)).toFixed(2)} €</span>
        </div>
        <button class="cart-item-remove" data-remove-index="${idx}" aria-label="Eliminar producto">✕</button>
      </div>
    `).join("");

    // Asignar eventos de eliminación
    cartItemsList.querySelectorAll("[data-remove-index]").forEach(btn => {
      btn.addEventListener("click", () => {
        const index = parseInt(btn.getAttribute("data-remove-index"), 10);
        if (!isNaN(index) && index >= 0 && index < cart.length) {
          cart.splice(index, 1);
          saveCart();
        }
      });
    });
  }

  // Event Listeners de apertura/cierre de carrito
  if (openCartBtn) openCartBtn.addEventListener("click", openCartDrawer);
  if (mobileOpenCartBtn) {
    mobileOpenCartBtn.addEventListener("click", () => {
      const mobileDrawer = document.getElementById("mobileDrawer");
      if (mobileDrawer) mobileDrawer.classList.remove("open");
      openCartDrawer();
    });
  }
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCartDrawer);

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener("click", (e) => {
      if (e.target === drawerBackdrop) closeCartDrawer();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawerBackdrop && drawerBackdrop.classList.contains("active")) {
      closeCartDrawer();
    }
  });

  // Botones "+ Añadir" en catálogo
  document.querySelectorAll("[data-add-to-cart]").forEach(btn => {
    btn.addEventListener("click", () => {
      try {
        const productData = JSON.parse(btn.getAttribute("data-add-to-cart"));
        const existingItem = cart.find(item => item.id === productData.id);
        if (existingItem) {
          existingItem.qty = (existingItem.qty || 1) + 1;
        } else {
          cart.push({ ...productData, qty: 1 });
        }
        saveCart();
        openCartDrawer();
      } catch (err) {
        console.error("Error al añadir producto al carrito:", err);
      }
    });
  });

  // Botón Checkout vía WhatsApp / Stripe
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Tu carrito está vacío. Añade algún producto antes de finalizar el pedido.");
        return;
      }

      const totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
      const totalPrice = cart.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);

      const itemsText = cart
        .map(i => `• ${i.name} (x${i.qty || 1}) - ${(i.price * (i.qty || 1)).toFixed(2)}€`)
        .join("\n");

      const message = `¡Hola Enjoy & Learn! 👋 Quisiera realizar el siguiente pedido desde la web:\n\n${itemsText}\n\n*Total a pagar: ${totalPrice.toFixed(2)} € (TVA incl.)*\n\n¿Cómo podemos coordinar el pago y la entrega/activación?`;

      const whatsappUrl = `https://wa.me/33749088022?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    });
  }

  // Render inicial del carrito
  renderCart();
}

// ==========================================================================
// 9. CROSS-LINK "EL PUENTE" CON VIEW TRANSITIONS
// ==========================================================================
function initBridgeTransitions() {
  const bridgeBtns = document.querySelectorAll(".bridge-button");
  bridgeBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const targetUrl = btn.getAttribute("href");
      if (!targetUrl || targetUrl.startsWith("#")) return;

      if (document.startViewTransition) {
        e.preventDefault();
        document.startViewTransition(async () => {
          window.location.href = targetUrl;
        });
      }
    });
  });
}

// ==========================================================================
// 10. COMPARADOR DE PALETAS DE COLOR (Urbano, Caribe, Asfalto)
// ==========================================================================
function initPaletteSwitcher() {
  const urlParams = new URLSearchParams(window.location.search);
  const paramPalette = urlParams.get("palette");
  const storedPalette = localStorage.getItem("enjoy_palette");
  
  // Prioridad: 1. Parámetro URL (?palette=...), 2. Atributo en HTML, 3. LocalStorage, 4. 'urbano'
  const htmlPalette = document.documentElement.getAttribute("data-palette");
  const initialPalette = paramPalette || htmlPalette || storedPalette || "urbano";

  applyPalette(initialPalette);

  const comparatorWidget = document.getElementById("paletteComparator");
  const comparatorToggle = document.getElementById("comparatorToggleBtn");
  if (comparatorWidget && comparatorToggle) {
    comparatorToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      comparatorWidget.classList.toggle("expanded");
    });

    document.addEventListener("click", (e) => {
      if (!comparatorWidget.contains(e.target)) {
        comparatorWidget.classList.remove("expanded");
      }
    });
  }

  const paletteBtns = document.querySelectorAll("[data-palette-target]");
  paletteBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-palette-target");
      applyPalette(target);
      localStorage.setItem("enjoy_palette", target);
      if (window.innerWidth <= 768 && comparatorWidget) {
        comparatorWidget.classList.remove("expanded");
      }
    });
  });
}

function applyPalette(paletteName) {
  if (!paletteName) return;
  document.documentElement.setAttribute("data-palette", paletteName);
  document.body.className = document.body.className.replace(/palette-\w+/g, "").trim() + ` palette-${paletteName}`;

  // Actualizar botones activos
  const paletteBtns = document.querySelectorAll("[data-palette-target]");
  paletteBtns.forEach(btn => {
    if (btn.getAttribute("data-palette-target") === paletteName) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

