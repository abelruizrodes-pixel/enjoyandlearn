/**
 * ECOSISTEMA WEB DUAL & ACADEMIA: "Enjoy and Learn" & "Tienda Oficial"
 * Controladores de interactividad, multilingüe, carrito de compra,
 * filtros de instructores/catálogo y transiciones suaves.
 */

// ==========================================================================
// 1. DICCIONARIO MULTILINGÜE (ES / EN / FR)
// ==========================================================================
const TRANSLATIONS = {
  "es": {
    "nav_instructors": "Instructores",
    "nav_classes": "Clases & Estilos",
    "nav_events": "Eventos",
    "nav_booking": "Reserva tu Clase",
    "nav_shop": "Tienda Oficial 🛍️",
    "nav_salud": "🌿 Salud & Bienestar (Ludivine)",
    "bridge_to_dance": "Clases de Baile 💃",
    "mobile_instructors": "🕺 Instructores (Él & Ella)",
    "mobile_classes": "💃 Clases & Estilos",
    "mobile_events": "🎉 Próximos Eventos & Galería",
    "mobile_shop": "🛍️ Tienda Oficial de Baile",
    "mobile_wellness": "🌿 Salud & Bienestar (Ludivine)",
    "mobile_whatsapp": "💬 WhatsApp (+33 7 49 08 80 22)",
    "hero_kicker_dance": "Salsa Cubana · Bachata · Rumba · Bailoterapia",
    "hero_title_dance": "Dos instructores individuales, <span class=\"accent\">dos metodologías únicas</span> para tu aprendizaje.",
    "hero_lead_dance": "Clases 100% individuales en Luxemburgo con metodologías especializadas e independientes: aprende técnica cubana, ritmo y conducción con <strong>Yomiuri Ruiz</strong> (Salsa Cubana tradicional, Bachata y Rumba afrocubana) o bien estilo femenino, fluidez corporal y <strong>Bailoterapia enfocada a Salud y Bienestar</strong> con <strong>Ludivine Gomez</strong>. Cada instructor imparte sus propias clases.",
    "hero_cta_instructors": "Conoce a los Instructores",
    "hero_cta_trial": "Reservar Clase de Prueba",
    "hero_badge_title": "Clases 100% Individuales",
    "hero_badge_desc": "Cada instructor imparte sus clases por separado con su propio método y enfoque pedagógico.",
    "instructors_kicker": "Equipo Pedagógico",
    "instructors_title": "Elige tu instructor ideal",
    "instructors_subtitle": "Instructores independientes con programas y metodologías propias. Cada uno imparte sus clases por separado según tu objetivo de baile o bienestar.",
    "tab_both": "👥 Ver Ambos Instructores",
    "tab_he": "🕺 Yomiuri Ruiz (Salsa Cubana, Bachata & Rumba)",
    "tab_she": "💃 Ludivine Gomez (Salsa Cubana, Lady Style & Bailoterapia)",
    "he_role": "Instructor Individual & Fundador",
    "he_subtitle": "Metodología Cubana · Clases Individuales de Salsa Cubana, Bachata & Rumba",
    "he_bio": "Coach deportivo certificado y profesor de bailes latinos con amplia trayectoria en Cuba, Francia y Luxemburgo. Su metodología integra la raíz afrocubana, la conducción clara en pareja y el acondicionamiento físico funcional, logrando que cada alumno baile con seguridad, fluidez y auténtico sabor cubano.",
    "specialties_title": "Especialidades clave:",
    "he_spec_1": "Salsa Cubana (Casino)",
    "he_spec_2": "Bachata Sensual & Dominicana",
    "he_spec_3": "★ Rumba Cubana (Guaguancó)",
    "he_spec_4": "Musicalidad & Conducción",
    "he_spec_5": "Personal Training & Fit",
    "btn_book_he": "Reservar con Yomiuri",
    "btn_view_classes": "Ver Clases",
    "she_role": "Instructora Individual & Bienestar",
    "she_subtitle": "Metodología de Estilo & Salud · Clases Individuales de Salsa Cubana, Lady Style & Bailoterapia",
    "she_bio": "Bailarina e instructora de Salsa y Bachata que une la sensualidad y estética del movimiento con la salud integral. Su programa estrella de <strong>Bailoterapia</strong> utiliza el baile como medicina preventiva: cardio latino sin impacto lesivo, corrección postural, liberación de estrés y tonificación consciente.",
    "she_spec_1": "Salsa Cubana (Estilo Femenino)",
    "she_spec_2": "Bachata Sensual & Fluidez",
    "she_spec_3": "★ Bailoterapia Salud & Bienestar",
    "she_spec_4": "Liberación de Estrés & Cardio",
    "she_spec_5": "Alineación Postural",
    "btn_book_she": "Reservar con Ludivine",
    "styles_kicker": "Programas Formativos",
    "styles_title": "Clases y metodologías por instructor",
    "styles_subtitle": "Cada instructor imparte sus propias sesiones de forma individualizada con su propio método y enfoque pedagógico.",
    "style_tag_he": "Clase Individual · Yomiuri Ruiz",
    "style_salsa_title": "Salsa Cubana (Casino)",
    "style_salsa_desc": "Aprende desde los fundamentos rítmicos del son y el casino hasta figuras circulares, nudos de brazos y conducción cubana con la metodología de Yomiuri.",
    "style_salsa_f1": "Niveles: Iniciación, Intermedio y Avanzado",
    "style_salsa_f2": "Guapea, Dile que no, Enchufla y conducción cubana",
    "style_salsa_f3": "Rueda de Casino tradicional y musicalidad",
    "btn_enroll_he": "Apuntarme con Yomiuri",
    "style_rumba_title": "Rumba Tradicional & Raíz",
    "style_rumba_desc": "La cuna del ritmo: Guaguancó, Yambú y Columbia. Trabajo profundo de disociación de torso, hombros, caderas y agilidad.",
    "style_rumba_f1": "El juego del \"Vacunao\" y seducción folclórica",
    "style_rumba_f2": "Coordinación motriz y fuerza rítmica",
    "style_rumba_f3": "Aplicación directa para lucirse en la Salsa",
    "style_tag_she": "Clase Individual · Ludivine Gomez",
    "style_ladystyle_title": "Salsa Cubana & Lady Style",
    "style_ladystyle_desc": "Elegancia en el baile social, disociación corporal fluida, técnica de brazos, giros limpios y confianza femenina con la metodología de Ludivine.",
    "style_ladystyle_f1": "Styling femenino aplicado al baile social",
    "style_ladystyle_f2": "Fluidez, coordinación y expresión corporal",
    "style_ladystyle_f3": "Pasos libres (shines) y colocación postural",
    "btn_enroll_she": "Apuntarme con Ludivine",
    "style_bailoterapia_title": "Bailoterapia · Salud & Bienestar",
    "style_bailoterapia_desc": "Danza terapéutica basada en ritmos latinos combinada con mindfulness y respiración. Quema calorías, alivia el estrés y revitaliza tu energía con el método de Ludivine.",
    "style_bailoterapia_f1": "Cardio latino suave sin impacto articular",
    "style_bailoterapia_f2": "Liberación de endorfinas y reducción de cortisol",
    "style_bailoterapia_f3": "Alineación postural y bienestar emocional",
    "events_kicker": "Agenda en Vivo",
    "events_title": "Próximos Eventos y Talleres",
    "events_subtitle": "Sincronizado automáticamente con las publicaciones de Instagram de nuestros instructores <a href=\"https://www.instagram.com/yomiuri_ruiz/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"instructor-design-name\" title=\"Instagram de Yomiuri\">Yomiuri</a> &amp; <a href=\"https://www.instagram.com/ludivine.gomez/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"instructor-design-name\" title=\"Instagram de Ludivine\">Ludivine</a>.",
    "btn_reserve_spot": "Reservar Plaza",
    "link_view_instagram": "Ver en Instagram ↗",
    "event_1_badge": "GRAN FESTIVAL",
    "event_1_title": "Luxembourg Latin Dance Festival (Edición Oficial)",
    "event_1_desc": "El festival latino de referencia en Luxemburgo: talleres intensivos de Salsa Cubana y Bachata, shows de baile con artistas internacionales y veladas sociales inolvidables.",
    "event_2_badge": "FIESTA CUBANA & TALLER",
    "event_2_title": "Fiesta Cubana & Taller de Casino con Yomiuri Ruiz",
    "event_2_desc": "Taller previo de Salsa Cubana & Rueda de Casino con Yomiuri Ruiz seguido de noche social 100% Timba, Son y Salsa con DJ Ladysalsa.",
    "event_3_badge": "LADY STYLE",
    "event_3_title": "Workshop Intensivo de Salsa Fusion & Lady Styling",
    "event_3_desc": "Técnica de brazos, giros limpios, fluidez en la disociación corporal y confianza estética aplicada al baile social con el método de Ludivine.",
    "event_4_badge": "BAILOTERAPIA",
    "event_4_title": "Jornada 'Danse Vibes': Bailoterapia & Salud Corporal",
    "event_4_desc": "Cardio latino sin impacto lesivo para quemar calorías, aliviar tensiones musculares y liberar endorfinas a través de ritmos caribeños.",
    "event_5_badge": "BACHATA & SOCIAL",
    "event_5_title": "Taller Intensivo de Bachata Sensual & Noche Social",
    "event_5_desc": "Conducción en pareja, fluidez rítmica, aislamiento de torso y conexión musical en pista social con la comunidad de Enjoy & Learn.",
    "gallery_kicker": "Galería Visual",
    "gallery_title": "Momentos en la pista y en la sala",
    "gallery_subtitle": "Descubre imágenes de nuestras clases grupales, talleres de bailoterapia y veladas de baile.",
    "gallery_filter_all": "Todos",
    "gallery_filter_salsa": "Salsa Cubana & Rumba",
    "gallery_filter_bienestar": "Bailoterapia",
    "gallery_filter_bachata": "Bachata Social",
    "gallery_item_1_badge": "CLASE MAGISTRAL",
    "gallery_item_1_title": "Masterclass de Salsa Cubana & Rumba",
    "gallery_item_1_desc": "Rueda de Casino, percusión afrocubana y musicalidad con Yomiuri Ruiz.",
    "gallery_item_2_badge": "BAILOTERAPIA",
    "gallery_item_2_title": "Jornada de Bailoterapia & Cardio Latino",
    "gallery_item_2_desc": "Movimiento rítmico, alegría y salud cardiovascular con Ludivine Gomez.",
    "gallery_item_3_badge": "BACHATA & SOCIAL DANCE",
    "gallery_item_3_title": "Noche Social & Taller Intensivo de Bachata Sensual",
    "gallery_item_3_desc": "Conexión en pareja, musicalidad y pista social con la comunidad de Enjoy & Learn.",
    "modal_booking_title": "Reserva tu Clase Individual",
    "modal_booking_desc": "Selecciona tu instructor según su estilo y metodología. Cada clase se imparte de forma 100% individual y personalizada.",
    "label_instructor": "Instructor preferido",
    "opt_instructor_he": "Yomiuri Ruiz · Metodología Cubana (Salsa Cubana, Bachata & Rumba)",
    "opt_instructor_she": "Ludivine Gomez · Metodología Estilo & Salud (Lady Style & Bailoterapia)",
    "label_service": "Estilo, clase o evento especial",
    "optgroup_he": "Metodología Yomiuri Ruiz (Clases Individuales)",
    "optgroup_she": "Metodología Ludivine Gomez (Clases Individuales)",
    "optgroup_events": "🎉 Próximos Eventos & Talleres Especiales (Fechas Específicas)",
    "label_date": "Fecha de la clase / evento",
    "label_date_free": "Fecha preferida (elige cualquier fecha)",
    "label_date_locked": "Fecha del evento (confirmada)",
    "date_help_confirmed": "🔒 Fecha oficial y específica confirmada para este evento.",
    "label_name": "Nombre completo",
    "placeholder_name": "Tu nombre y apellidos",
    "label_email": "Correo electrónico",
    "placeholder_email": "tu-correo@ejemplo.com",
    "label_notes": "Comentarios (nivel actual, objetivos, etc.)",
    "placeholder_notes": "¿Tienes experiencia previa? ¿Vienes en pareja o individual?",
    "btn_confirm_booking": "Confirmar Solicitud de Reserva",
    "receipt_status": "Acuse de Recibo",
    "receipt_heading": "¡Hola! He recibido tu solicitud",
    "receipt_banner_title": "Estoy revisando la agenda en este momento...",
    "receipt_banner_text": "Estoy comprobando los horarios disponibles para darte el mejor hueco. En breve te confirmo tu reserva por correo o WhatsApp para que podamos bailar pronto juntos.",
    "receipt_ref_label": "Referencia",
    "receipt_name_label": "Titular",
    "receipt_email_label": "Email",
    "receipt_instructor_label": "Instructor",
    "receipt_service_label": "Modalidad",
    "receipt_date_label": "Fecha solicitada",
    "receipt_copy_notice": "📧 Te he enviado una copia de este acuse a tu correo. Revisa también tu carpeta de spam.",
    "receipt_whatsapp_btn": "Escríbeme por WhatsApp",
    "receipt_close_btn": "Cerrar y Volver a la Web",
    "form_success_alert": "¡Solicitud enviada! Pronto te confirmaremos tu reserva. 💃",
    "footer_copyright": "© 2026 Enjoy and Learn · Clases de Salsa Cubana, Bachata, Rumba y Bailoterapia en Luxemburgo.",
    "footer_official_shop": "Tienda Oficial",
    "footer_privacy": "Política de Privacidad",
    "footer_legal": "Aviso Legal",
    "footer_rights": "Todos los derechos reservados.",
    "shop_nav_all": "Todas",
    "shop_nav_clothes": "Ropa de Baile",
    "shop_nav_shoes": "Calzado",
    "shop_nav_wellness": "Bienestar",
    "shop_nav_passes": "Bonos",
    "shop_hero_kicker": "Tienda Oficial · Enjoy and Learn",
    "shop_hero_title": "Categorías de <span class=\"accent\">Moda, Calzado & Experiencias</span>",
    "shop_hero_lead": "Conoce nuestras líneas oficiales de equipamiento y aprendizaje: ropa técnica para la pista, calzado profesional de baile, accesorios somáticos de bailoterapia y bonos de clases en Luxemburgo.",
    "shop_filter_all": "Todas las Categorías",
    "shop_filter_clothes": "Ropa de Baile",
    "shop_filter_shoes": "Calzado & Accesorios",
    "shop_filter_wellness": "Bailoterapia & Salud",
    "shop_filter_passes": "Bonos de Clases",
    "shop_cat1_badge": "COLECCIÓN TEXTIL",
    "shop_cat1_title": "Ropa de Baile & Ensayo",
    "shop_cat1_desc": "Prendas técnicas y ropa de autor diseñadas especialmente para bailarines de salsa, bachata, rumba y bailoterapia. Tejidos elásticos, ultratranspirables y ligeros que garantizan libertad absoluta de movimiento y giros en la pista.",
    "shop_cat2_badge": "CALZADO PROFESIONAL",
    "shop_cat2_title": "Calzado de Baile & Suelas Técnicas",
    "shop_cat2_desc": "Zapatos de salsa y bachata para mujer y hombre. Suelas de serraje cromado y amortiguación metatarsal para proteger las articulaciones y lograr giros limpios y seguros.",
    "shop_cat3_badge": "SALUD & BIENESTAR",
    "shop_cat3_title": "Kits Somáticos de Bailoterapia",
    "shop_cat3_desc": "Accesorios ergonómicos seleccionados por Ludivine Gomez para complementar tus sesiones de bailoterapia, estiramiento somático y corrección postural en casa o en el estudio.",
    "shop_cat4_badge": "FORMACIÓN & EXPERIENCIAS",
    "shop_cat4_title": "Bonos de Clases & Tarjetas Regalo",
    "shop_cat4_desc": "Packs de 5 y 10 sesiones individuales con Yomiuri Ruiz o Ludivine Gomez con tarifa preferente, máxima flexibilidad de agenda y tarjeta regalo personalizada para sorprender.",
    "shop_btn_consult": "Consultar Disponibilidad por WhatsApp",
    "nav_history": "Historia",
    "bridge_to_enjoy": "Enjoy and Learn",
    "hero_kicker_bienestar": "Mindfulness · Yoga · Nutrición Holística",
    "hero_title_bienestar": "Reconecta con tu equilibrio natural a través del movimiento consciente.",
    "hero_lead_bienestar": "Espacio de bienestar integral en Luxemburgo: programas personalizados de yoga, meditación guiada y nutrición consciente impartidos por especialistas certificados.",
    "hero_cta_booking": "Reservar Sesión",
    "hero_cta_events": "Ver Retiros & Talleres",
    "about_kicker": "Quiénes Somos",
    "about_title_bienestar": "Un refugio de calma y salud en el corazón de Luxemburgo",
    "filter_all": "Todos",
    "filter_classes": "Yoga",
    "filter_events": "Retiros",
    "filter_workshops": "Nutrición",
    "modal_title": "Agenda tu Sesión",
    "modal_subtitle": "Selecciona el servicio y fecha deseada. Responderemos en menos de 24 horas.",
    "modal_service_label": "Servicio de interés",
    "modal_date_label": "Fecha preferida",
    "modal_name_label": "Nombre completo",
    "modal_email_label": "Correo electrónico",
    "modal_notes_label": "Mensaje o necesidades especiales",
    "modal_submit": "Confirmar Reserva",
    "modal_success": "¡Gracias! Tu solicitud ha sido registrada.",
    "footer_cookies": "Cookies"
  },
  "en": {
    "nav_instructors": "Instructors",
    "nav_classes": "Classes & Styles",
    "nav_events": "Events",
    "nav_booking": "Book a Class",
    "nav_shop": "Official Store 🛍️",
    "nav_salud": "🌿 Health & Wellness (Ludivine)",
    "bridge_to_dance": "Dance Classes 💃",
    "mobile_instructors": "🕺 Instructors (He & She)",
    "mobile_classes": "💃 Classes & Styles",
    "mobile_events": "🎉 Upcoming Events & Gallery",
    "mobile_shop": "🛍️ Official Dance Store",
    "mobile_wellness": "🌿 Health & Wellness (Ludivine)",
    "mobile_whatsapp": "💬 WhatsApp (+33 7 49 08 80 22)",
    "hero_kicker_dance": "Cuban Salsa · Bachata · Rumba · Dance Therapy",
    "hero_title_dance": "Two individual instructors, <span class=\"accent\">two unique methodologies</span> for your learning.",
    "hero_lead_dance": "100% individual classes in Luxembourg with specialized, independent methodologies: learn Cuban technique, rhythm, and lead with <strong>Yomiuri Ruiz</strong> (traditional Cuban Salsa, Bachata & Afro-Cuban Rumba) or feminine styling, bodily flow, and <strong>Dance Therapy focused on Health & Wellness</strong> with <strong>Ludivine Gomez</strong>. Each instructor leads their own classes.",
    "hero_cta_instructors": "Meet the Instructors",
    "hero_cta_trial": "Book a Trial Class",
    "hero_badge_title": "100% Individual Classes",
    "hero_badge_desc": "Each instructor teaches their classes separately with their own method and pedagogical approach.",
    "instructors_kicker": "Teaching Team",
    "instructors_title": "Choose your ideal instructor",
    "instructors_subtitle": "Independent instructors with their own programs and methodologies. Each teaches their classes separately according to your dance or wellness goals.",
    "tab_both": "👥 View Both Instructors",
    "tab_he": "🕺 Yomiuri Ruiz (Cuban Salsa, Bachata & Rumba)",
    "tab_she": "💃 Ludivine Gomez (Cuban Salsa, Lady Style & Dance Therapy)",
    "he_role": "Individual Instructor & Founder",
    "he_subtitle": "Cuban Methodology · Individual Cuban Salsa, Bachata & Rumba Classes",
    "he_bio": "Certified sports coach and Latin dance teacher with an extensive career in Cuba, France, and Luxembourg. His methodology integrates Afro-Cuban roots, clear partner lead, and functional physical conditioning, helping every student dance with confidence, flow, and authentic Cuban flavour.",
    "specialties_title": "Key specialties:",
    "he_spec_1": "Cuban Salsa (Casino)",
    "he_spec_2": "Sensual & Dominican Bachata",
    "he_spec_3": "★ Cuban Rumba (Guaguancó)",
    "he_spec_4": "Musicality & Lead",
    "he_spec_5": "Personal Training & Fit",
    "btn_book_he": "Book with Yomiuri",
    "btn_view_classes": "View Classes",
    "she_role": "Individual & Wellness Instructor",
    "she_subtitle": "Style & Health Methodology · Individual Classes of Cuban Salsa, Lady Style & Dance Therapy",
    "she_bio": "Dancer and Salsa & Bachata instructor blending the sensuality and aesthetics of movement with holistic health. Her flagship <strong>Dance Therapy</strong> program uses dance as preventive wellness: low-impact Latin cardio, postural correction, stress release, and mindful toning.",
    "she_spec_1": "Cuban Salsa (Lady Style)",
    "she_spec_2": "Sensual Bachata & Flow",
    "she_spec_3": "★ Dance Therapy Health & Wellness",
    "she_spec_4": "Stress Relief & Cardio",
    "she_spec_5": "Postural Alignment",
    "btn_book_she": "Book with Ludivine",
    "styles_kicker": "Training Programs",
    "styles_title": "Classes & methodologies by instructor",
    "styles_subtitle": "Each instructor teaches their own sessions individually with their own method and pedagogical approach.",
    "style_tag_he": "Individual Class · Yomiuri Ruiz",
    "style_salsa_title": "Cuban Salsa (Casino)",
    "style_salsa_desc": "Learn from the rhythmic foundations of Son and Casino to circular figures, arm knots, and Cuban leading with Yomiuri's methodology.",
    "style_salsa_f1": "Levels: Beginner, Intermediate & Advanced",
    "style_salsa_f2": "Guapea, Dile que no, Enchufla and Cuban lead",
    "style_salsa_f3": "Traditional Rueda de Casino & musicality",
    "btn_enroll_he": "Sign up with Yomiuri",
    "style_rumba_title": "Traditional Rumba & Roots",
    "style_rumba_desc": "The cradle of rhythm: Guaguancó, Yambú, and Columbia. Deep work on torso, shoulder, and hip dissociation and agility.",
    "style_rumba_f1": "The \"Vacunao\" play & folkloric seduction",
    "style_rumba_f2": "Motor coordination & rhythmic power",
    "style_rumba_f3": "Direct application to excel in Salsa",
    "style_tag_she": "Individual Class · Ludivine Gomez",
    "style_ladystyle_title": "Cuban Salsa & Lady Style",
    "style_ladystyle_desc": "Elegance in social dancing, fluid body dissociation, arm technique, clean spins, and feminine confidence with Ludivine's methodology.",
    "style_ladystyle_f1": "Feminine styling applied to social dancing",
    "style_ladystyle_f2": "Fluidity, coordination & body expression",
    "style_ladystyle_f3": "Solo footwork (shines) & postural placement",
    "btn_enroll_she": "Sign up with Ludivine",
    "style_bailoterapia_title": "Dance Therapy · Health & Wellness",
    "style_bailoterapia_desc": "Therapeutic dance based on Latin rhythms combined with mindfulness and breathing. Burn calories, relieve stress, and revitalize your energy with Ludivine's method.",
    "style_bailoterapia_f1": "Gentle Latin cardio with low joint impact",
    "style_bailoterapia_f2": "Endorphin release & cortisol reduction",
    "style_bailoterapia_f3": "Postural alignment & emotional well-being",
    "events_kicker": "Live Schedule",
    "events_title": "Upcoming Events & Workshops",
    "events_subtitle": "Automatically synchronized with Instagram posts from our instructors <a href=\"https://www.instagram.com/yomiuri_ruiz/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"instructor-design-name\" title=\"Instagram of Yomiuri\">Yomiuri</a> &amp; <a href=\"https://www.instagram.com/ludivine.gomez/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"instructor-design-name\" title=\"Instagram of Ludivine\">Ludivine</a>.",
    "btn_reserve_spot": "Reserve a Spot",
    "link_view_instagram": "View on Instagram ↗",
    "event_1_badge": "GRAND FESTIVAL",
    "event_1_title": "Luxembourg Latin Dance Festival (Official Edition)",
    "event_1_desc": "The benchmark Latin festival in Luxembourg: intensive Cuban Salsa and Bachata workshops, international dance shows, and unforgettable social parties.",
    "event_2_badge": "CUBAN PARTY & WORKSHOP",
    "event_2_title": "Cuban Party & Casino Workshop with Yomiuri Ruiz",
    "event_2_desc": "Pre-party Cuban Salsa & Rueda de Casino workshop with Yomiuri Ruiz followed by 100% Timba, Son, and Salsa social night with DJ Ladysalsa.",
    "event_3_badge": "LADY STYLE",
    "event_3_title": "Intensive Workshop: Salsa Fusion & Lady Styling",
    "event_3_desc": "Arm technique, clean spins, fluid body dissociation, and aesthetic confidence applied to social dancing with Ludivine's method.",
    "event_4_badge": "DANCE THERAPY",
    "event_4_title": "'Danse Vibes' Session: Dance Therapy & Body Health",
    "event_4_desc": "Low-impact Latin cardio to burn calories, soothe muscular tension, and release endorphins through Caribbean rhythms.",
    "event_5_badge": "BACHATA & SOCIAL",
    "event_5_title": "Sensual Bachata Intensive Workshop & Social Night",
    "event_5_desc": "Partner lead, rhythmic flow, torso isolation, and musical connection on the social floor with the Enjoy & Learn community.",
    "gallery_kicker": "Visual Gallery",
    "gallery_title": "Moments on the Floor & in the Studio",
    "gallery_subtitle": "Discover photos of our classes, dance therapy workshops, and social evenings.",
    "gallery_filter_all": "All",
    "gallery_filter_salsa": "Cuban Salsa & Rumba",
    "gallery_filter_bienestar": "Dance Therapy",
    "gallery_filter_bachata": "Social Bachata",
    "gallery_item_1_badge": "MASTERCLASS",
    "gallery_item_1_title": "Cuban Salsa & Rumba Masterclass",
    "gallery_item_1_desc": "Rueda de Casino, Afro-Cuban percussion, and musicality with Yomiuri Ruiz.",
    "gallery_item_2_badge": "DANCE THERAPY",
    "gallery_item_2_title": "Dance Therapy & Latin Cardio Day",
    "gallery_item_2_desc": "Rhythmic movement, joy, and cardiovascular fitness with Ludivine Gomez.",
    "gallery_item_3_badge": "BACHATA & SOCIAL DANCE",
    "gallery_item_3_title": "Social Night & Sensual Bachata Intensive Workshop",
    "gallery_item_3_desc": "Partner connection, musicality, and social dancing with the Enjoy & Learn community.",
    "modal_booking_title": "Book Your Individual Class",
    "modal_booking_desc": "Select your instructor according to their style and methodology. Each class is taught 100% individually and personalized.",
    "label_instructor": "Preferred instructor",
    "opt_instructor_he": "Yomiuri Ruiz · Cuban Methodology (Cuban Salsa, Bachata & Rumba)",
    "opt_instructor_she": "Ludivine Gomez · Style & Health Methodology (Lady Style & Dance Therapy)",
    "label_service": "Style, class or special event",
    "optgroup_he": "Methodology Yomiuri Ruiz (Individual Classes)",
    "optgroup_she": "Methodology Ludivine Gomez (Individual Classes)",
    "optgroup_events": "🎉 Upcoming Events & Workshops (Specific Dates)",
    "label_date": "Class / event date",
    "label_date_free": "Preferred date (pick any date)",
    "label_date_locked": "Event date (confirmed)",
    "date_help_confirmed": "🔒 Official and confirmed date for this event.",
    "label_name": "Full name",
    "placeholder_name": "Your first and last name",
    "label_email": "Email address",
    "placeholder_email": "your-email@example.com",
    "label_notes": "Comments (current level, goals, etc.)",
    "placeholder_notes": "Do you have prior experience? Coming solo or as a couple?",
    "btn_confirm_booking": "Confirm Booking Request",
    "receipt_status": "Booking Receipt",
    "receipt_heading": "Hello! I've received your request",
    "receipt_banner_title": "I'm checking the schedule right now...",
    "receipt_banner_text": "I'm currently checking available time slots to find the best match for you. I'll confirm your booking shortly via email or WhatsApp so we can dance together soon.",
    "receipt_ref_label": "Reference",
    "receipt_name_label": "Name",
    "receipt_email_label": "Email",
    "receipt_instructor_label": "Instructor",
    "receipt_service_label": "Class / Style",
    "receipt_date_label": "Requested Date",
    "receipt_copy_notice": "📧 I've sent a copy of this receipt to your email. Please check your spam folder too.",
    "receipt_whatsapp_btn": "Message me on WhatsApp",
    "receipt_close_btn": "Close & Return to Site",
    "form_success_alert": "Request sent! We will confirm your booking soon. 💃",
    "footer_copyright": "© 2026 Enjoy and Learn · Cuban Salsa, Bachata, Rumba, and Dance Therapy classes in Luxembourg.",
    "footer_official_shop": "Official Store",
    "footer_privacy": "Privacy Policy",
    "footer_legal": "Legal Notice",
    "footer_rights": "All rights reserved.",
    "shop_nav_all": "All",
    "shop_nav_clothes": "Dancewear",
    "shop_nav_shoes": "Footwear",
    "shop_nav_wellness": "Wellness",
    "shop_nav_passes": "Class Passes",
    "shop_hero_kicker": "Official Store · Enjoy and Learn",
    "shop_hero_title": "Categories of <span class=\"accent\">Fashion, Footwear & Experiences</span>",
    "shop_hero_lead": "Discover our official lines of equipment and learning: technical dancewear, professional dance shoes, somatic dance therapy accessories, and class passes in Luxembourg.",
    "shop_filter_all": "All Categories",
    "shop_filter_clothes": "Dancewear",
    "shop_filter_shoes": "Footwear & Accessories",
    "shop_filter_wellness": "Dance Therapy & Health",
    "shop_filter_passes": "Class Passes",
    "shop_cat1_badge": "TEXTILE COLLECTION",
    "shop_cat1_title": "Dance & Rehearsal Wear",
    "shop_cat1_desc": "Technical garments and designer wear crafted specifically for salsa, bachata, rumba, and dance therapy dancers. Stretch, ultra-breathable, and lightweight fabrics ensuring complete freedom of movement and spins.",
    "shop_cat2_badge": "PROFESSIONAL FOOTWEAR",
    "shop_cat2_title": "Dance Shoes & Technical Soles",
    "shop_cat2_desc": "Salsa and bachata dance shoes for women and men. Suede soles and metatarsal cushioning to protect joints and achieve clean, safe spins.",
    "shop_cat3_badge": "HEALTH & WELLNESS",
    "shop_cat3_title": "Dance Therapy Somatic Kits",
    "shop_cat3_desc": "Ergonomic accessories selected by Ludivine Gomez to complement your dance therapy, somatic stretching, and postural alignment sessions at home or in the studio.",
    "shop_cat4_badge": "TRAINING & EXPERIENCES",
    "shop_cat4_title": "Class Passes & Gift Cards",
    "shop_cat4_desc": "Passes of 5 and 10 individual sessions with Yomiuri Ruiz or Ludivine Gomez with preferential rates, maximum schedule flexibility, and custom gift cards.",
    "shop_btn_consult": "Check Availability on WhatsApp",
    "nav_history": "History",
    "bridge_to_enjoy": "Enjoy and Learn",
    "hero_kicker_bienestar": "Mindfulness · Yoga · Holistic Nutrition",
    "hero_title_bienestar": "Reconnect with your natural balance through mindful movement.",
    "hero_lead_bienestar": "Holistic wellness space in Luxembourg: personalized yoga programs, guided meditation, and mindful nutrition led by certified specialists.",
    "hero_cta_booking": "Book a Session",
    "hero_cta_events": "View Retreats & Workshops",
    "about_kicker": "About Us",
    "about_title_bienestar": "A haven of calm and health in the heart of Luxembourg",
    "filter_all": "All",
    "filter_classes": "Yoga",
    "filter_events": "Retreats",
    "filter_workshops": "Nutrition",
    "modal_title": "Book Your Session",
    "modal_subtitle": "Select your service and desired date. We will reply within 24 hours.",
    "modal_service_label": "Service of Interest",
    "modal_date_label": "Preferred Date",
    "modal_name_label": "Full Name",
    "modal_email_label": "Email Address",
    "modal_notes_label": "Message or special requests",
    "modal_submit": "Confirm Booking",
    "modal_success": "Thank you! Your request has been recorded.",
    "footer_cookies": "Cookies"
  },
  "fr": {
    "nav_instructors": "Professeurs",
    "nav_classes": "Cours & Styles",
    "nav_events": "Événements",
    "nav_booking": "Réserver un Cours",
    "nav_shop": "Boutique Officielle 🛍️",
    "nav_salud": "🌿 Santé & Bien-être (Ludivine)",
    "bridge_to_dance": "Cours de Danse 💃",
    "mobile_instructors": "🕺 Professeurs (Lui & Elle)",
    "mobile_classes": "💃 Cours & Styles",
    "mobile_events": "🎉 Prochains Événements & Galerie",
    "mobile_shop": "🛍️ Boutique Officielle de Danse",
    "mobile_wellness": "🌿 Santé & Bien-être (Ludivine)",
    "mobile_whatsapp": "💬 WhatsApp (+33 7 49 08 80 22)",
    "hero_kicker_dance": "Salsa Cubaine · Bachata · Rumba · Danse-Thérapie",
    "hero_title_dance": "Deux professeurs individuels, <span class=\"accent\">deux méthodes uniques</span> pour votre progression.",
    "hero_lead_dance": "Des cours 100% individuels au Luxembourg avec des méthodologies spécialisées et indépendantes : apprenez la technique cubaine, le rythme et le guidage avec <strong>Yomiuri Ruiz</strong> (Salsa Cubaine traditionnelle, Bachata et Rumba afro-cubaine) ou le style féminin, la fluidité corporelle et la <strong>Danse-thérapie axée sur la Santé et le Bien-être</strong> avec <strong>Ludivine Gomez</strong>. Chaque professeur dispense ses propres cours.",
    "hero_cta_instructors": "Découvrir les Professeurs",
    "hero_cta_trial": "Réserver un Cours d'Essai",
    "hero_badge_title": "Cours 100% Individuels",
    "hero_badge_desc": "Chaque professeur dispense ses cours séparément avec sa propre méthode et approche pédagogique.",
    "instructors_kicker": "Équipe Pédagogique",
    "instructors_title": "Choisissez votre professeur idéal",
    "instructors_subtitle": "Professeurs indépendants avec leurs propres programmes et méthodologies. Chacun dispense ses cours séparément selon vos objectifs de danse ou de bien-être.",
    "tab_both": "👥 Voir les Deux Professeurs",
    "tab_he": "🕺 Yomiuri Ruiz (Salsa Cubaine, Bachata & Rumba)",
    "tab_she": "💃 Ludivine Gomez (Salsa Cubaine, Lady Style & Danse-Thérapie)",
    "he_role": "Professeur Individuel & Fondateur",
    "he_subtitle": "Méthode Cubaine · Cours Individuels de Salsa Cubaine, Bachata & Rumba",
    "he_bio": "Coach sportif certifié et professeur de danses latines avec un riche parcours à Cuba, en France et au Luxembourg. Sa méthode allie racines afro-cubaines, guidage clair en couple et préparation physique fonctionnelle, permettant à chaque élève de danser avec confiance, fluidité et une authentique saveur cubaine.",
    "specialties_title": "Spécialités clés :",
    "he_spec_1": "Salsa Cubaine (Casino)",
    "he_spec_2": "Bachata Sensuelle & Dominicaine",
    "he_spec_3": "★ Rumba Cubaine (Guaguancó)",
    "he_spec_4": "Musicalité & Guidage",
    "he_spec_5": "Personal Training & Fit",
    "btn_book_he": "Réserver avec Yomiuri",
    "btn_view_classes": "Voir les Cours",
    "she_role": "Professeure Individuelle & Bien-être",
    "she_subtitle": "Méthode Style & Santé · Cours Individuels de Salsa Cubaine, Lady Style & Danse-Thérapie",
    "she_bio": "Danseuse et professeure de Salsa et Bachata alliant sensualité et esthétique du mouvement à la santé globale. Son programme phare de <strong>Danse-thérapie</strong> utilise la danse comme médecine préventive : cardio latino à faible impact, correction posturale, libération du stress et tonification consciente.",
    "she_spec_1": "Salsa Cubaine (Style Féminin)",
    "she_spec_2": "Bachata Sensuelle & Fluidité",
    "she_spec_3": "★ Danse-Thérapie Santé & Bien-être",
    "she_spec_4": "Libération du Stress & Cardio",
    "she_spec_5": "Alignement Postural",
    "btn_book_she": "Réserver avec Ludivine",
    "styles_kicker": "Programmes de Formation",
    "styles_title": "Cours & méthodologies par professeur",
    "styles_subtitle": "Chaque professeur dispense ses propres séances de manière individualisée avec sa méthode et son approche pédagogique.",
    "style_tag_he": "Cours Individuel · Yomiuri Ruiz",
    "style_salsa_title": "Salsa Cubaine (Casino)",
    "style_salsa_desc": "Apprenez dès les bases rythmiques du Son et du Casino jusqu'aux passes circulaires complexes, jeux de bras et guidage cubain avec la méthode de Yomiuri.",
    "style_salsa_f1": "Niveaux : Débutant, Intermédiaire & Avancé",
    "style_salsa_f2": "Guapea, Dile que no, Enchufla et guidage cubain",
    "style_salsa_f3": "Rueda de Casino traditionnelle & musicalité",
    "btn_enroll_he": "M'inscrire avec Yomiuri",
    "style_rumba_title": "Rumba Traditionnelle & Racines",
    "style_rumba_desc": "Le berceau du rythme : Guaguancó, Yambú et Columbia. Travail approfondi de dissociation du buste, des épaules, des hanches et agilité.",
    "style_rumba_f1": "Le jeu du \"Vacunao\" et séduction folklorique",
    "style_rumba_f2": "Coordination motrice & puissance rythmique",
    "style_rumba_f3": "Application directe pour briller en Salsa",
    "style_tag_she": "Cours Individuel · Ludivine Gomez",
    "style_ladystyle_title": "Salsa Cubaine & Lady Style",
    "style_ladystyle_desc": "Élégance en danse sociale, dissociation corporelle fluide, technique des bras, tours nets et confiance féminine avec la méthode de Ludivine.",
    "style_ladystyle_f1": "Styling féminin appliqué à la danse sociale",
    "style_ladystyle_f2": "Fluidité, coordination & expression corporelle",
    "style_ladystyle_f3": "Jeux de jambes (shines) & posture élégante",
    "btn_enroll_she": "M'inscrire avec Ludivine",
    "style_bailoterapia_title": "Danse-Thérapie · Santé & Bien-être",
    "style_bailoterapia_desc": "Danse thérapeutique basée sur les rythmes latins combinée à la pleine conscience et à la respiration. Brûlez des calories, libérez le stress et revitalisez votre énergie avec la méthode de Ludivine.",
    "style_bailoterapia_f1": "Cardio latino doux sans impact articulaire",
    "style_bailoterapia_f2": "Libération d'endorphines & réduction du cortisol",
    "style_bailoterapia_f3": "Alignement postural & bien-être émotionnel",
    "events_kicker": "Programme en Direct",
    "events_title": "Prochains Événements & Ateliers",
    "events_subtitle": "Synchronisé automatiquement avec les publications Instagram de nos professeurs <a href=\"https://www.instagram.com/yomiuri_ruiz/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"instructor-design-name\" title=\"Instagram de Yomiuri\">Yomiuri</a> &amp; <a href=\"https://www.instagram.com/ludivine.gomez/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"instructor-design-name\" title=\"Instagram de Ludivine\">Ludivine</a>.",
    "btn_reserve_spot": "Réserver ma Place",
    "link_view_instagram": "Voir sur Instagram ↗",
    "event_1_badge": "GRAND FESTIVAL",
    "event_1_title": "Luxembourg Latin Dance Festival (Édition Officielle)",
    "event_1_desc": "Le festival latino de référence au Luxembourg : ateliers intensifs de Salsa Cubaine et Bachata, shows de danse avec des artistes internationaux et soirées inoubliables.",
    "event_2_badge": "FÊTE CUBAINE & ATELIER",
    "event_2_title": "Fête Cubaine & Atelier Casino avec Yomiuri Ruiz",
    "event_2_desc": "Atelier préparatoire de Salsa Cubaine & Rueda de Casino avec Yomiuri Ruiz suivi d'une soirée 100% Timba, Son et Salsa avec DJ Ladysalsa.",
    "event_3_badge": "LADY STYLE",
    "event_3_title": "Workshop Intensif de Salsa Fusion & Lady Styling",
    "event_3_desc": "Technique des bras, tours nets, fluidité dans la dissociation corporelle et confiance esthétique appliquée à la danse sociale avec la méthode de Ludivine.",
    "event_4_badge": "DANSE-THÉRAPIE",
    "event_4_title": "Journée 'Danse Vibes' : Danse-Thérapie & Santé Corporelle",
    "event_4_desc": "Cardio latino doux pour brûler des calories, soulager les tensions musculaires et libérer des endorphines grâce aux rythmes caribéens.",
    "event_5_badge": "BACHATA & SOCIAL",
    "event_5_title": "Atelier Intensif de Bachata Sensuelle & Soirée Sociale",
    "event_5_desc": "Guidage en couple, fluidité rythmique, isolation du buste et connexion musicale en soirée sociale avec la communauté Enjoy & Learn.",
    "gallery_kicker": "Galerie Visuelle",
    "gallery_title": "Instants sur la Piste et en Salle",
    "gallery_subtitle": "Découvrez des photos de nos cours collectifs, ateliers de danse-thérapie et soirées dansantes.",
    "gallery_filter_all": "Tous",
    "gallery_filter_salsa": "Salsa Cubaine & Rumba",
    "gallery_filter_bienestar": "Danse-Thérapie",
    "gallery_filter_bachata": "Bachata Sociale",
    "gallery_item_1_badge": "MASTERCLASS",
    "gallery_item_1_title": "Masterclass de Salsa Cubaine & Rumba",
    "gallery_item_1_desc": "Rueda de Casino, percussions afro-cubaines et musicalité avec Yomiuri Ruiz.",
    "gallery_item_2_badge": "DANSE-THÉRAPIE",
    "gallery_item_2_title": "Journée Danse-Thérapie & Cardio Latino",
    "gallery_item_2_desc": "Mouvement rythmé, joie et santé cardiovasculaire avec Ludivine Gomez.",
    "gallery_item_3_badge": "BACHATA & SOCIAL DANCE",
    "gallery_item_3_title": "Soirée Sociale & Atelier Intensif de Bachata Sensuelle",
    "gallery_item_3_desc": "Connexion à deux, musicalité et danse sociale avec la communauté Enjoy & Learn.",
    "modal_booking_title": "Réservez votre Cours Individuel",
    "modal_booking_desc": "Sélectionnez votre professeur selon son style et sa méthode. Chaque cours est dispensé de manière 100% individuelle et personnalisée.",
    "label_instructor": "Professeur souhaité",
    "opt_instructor_he": "Yomiuri Ruiz · Méthode Cubaine (Salsa Cubaine, Bachata & Rumba)",
    "opt_instructor_she": "Ludivine Gomez · Méthode Style & Santé (Lady Style & Danse-Thérapie)",
    "label_service": "Discipline, cours ou événement spécial",
    "optgroup_he": "Méthode Yomiuri Ruiz (Cours Individuels)",
    "optgroup_she": "Méthode Ludivine Gomez (Cours Individuels)",
    "optgroup_events": "🎉 Prochains Événements & Ateliers (Dates Spécifiques)",
    "label_date": "Date du cours / événement",
    "label_date_free": "Date souhaitée (choisissez n'importe quelle date)",
    "label_date_locked": "Date de l'événement (confirmée)",
    "date_help_confirmed": "🔒 Date officielle et confirmée pour cet événement.",
    "label_name": "Nom complet",
    "placeholder_name": "Votre nom et prénom",
    "label_email": "Adresse e-mail",
    "placeholder_email": "votre-email@exemple.com",
    "label_notes": "Commentaires (niveau actuel, objectifs, etc.)",
    "placeholder_notes": "Avez-vous une expérience préalable ? Seul(e) ou en couple ?",
    "btn_confirm_booking": "Confirmer la Réservation",
    "receipt_status": "Accusé de Réception",
    "receipt_heading": "Bonjour ! J'ai bien reçu votre demande",
    "receipt_banner_title": "Je consulte actuellement mon planning...",
    "receipt_banner_text": "Je vérifie les créneaux disponibles pour vous réserver le meilleur horaire. Je vous confirme très vite votre réservation par e-mail ou WhatsApp pour qu'on se retrouve bientôt sur la piste.",
    "receipt_ref_label": "Référence",
    "receipt_name_label": "Nom",
    "receipt_email_label": "E-mail",
    "receipt_instructor_label": "Professeur",
    "receipt_service_label": "Discipline",
    "receipt_date_label": "Date souhaitée",
    "receipt_copy_notice": "📧 Une copie de cet accusé vous a été envoyée par e-mail. Vérifiez aussi vos spams.",
    "receipt_whatsapp_btn": "M'écrire sur WhatsApp",
    "receipt_close_btn": "Fermer et Retourner au Site",
    "form_success_alert": "Demande envoyée ! Nous vous contacterons très vite pour confirmer. 💃",
    "footer_copyright": "© 2026 Enjoy and Learn · Cours de Salsa Cubaine, Bachata, Rumba et Danse-Thérapie au Luxembourg.",
    "footer_official_shop": "Boutique Officielle",
    "footer_privacy": "Politique de Confidentialité",
    "footer_legal": "Mentions Légales",
    "footer_rights": "Tous droits réservés.",
    "shop_nav_all": "Toutes",
    "shop_nav_clothes": "Vêtements de Danse",
    "shop_nav_shoes": "Chaussures",
    "shop_nav_wellness": "Bien-être",
    "shop_nav_passes": "Forfaits",
    "shop_hero_kicker": "Boutique Officielle · Enjoy and Learn",
    "shop_hero_title": "Catégories de <span class=\"accent\">Mode, Chaussures & Expériences</span>",
    "shop_hero_lead": "Découvrez nos gammes officielles d'équipement et d'apprentissage : vêtements techniques, chaussures de danse professionnelles, accessoires somatiques de danse-thérapie et forfaits de cours au Luxembourg.",
    "shop_filter_all": "Toutes les Catégories",
    "shop_filter_clothes": "Vêtements de Danse",
    "shop_filter_shoes": "Chaussures & Accessoires",
    "shop_filter_wellness": "Danse-Thérapie & Santé",
    "shop_filter_passes": "Forfaits de Cours",
    "shop_cat1_badge": "COLLECTION TEXTILE",
    "shop_cat1_title": "Vêtements de Danse & Répétition",
    "shop_cat1_desc": "Vêtements techniques conçus spécialement pour les danseurs de salsa, bachata, rumba et danse-thérapie. Tissus extensibles, ultra-respirants et légers garantissant une totale liberté de mouvement.",
    "shop_cat2_badge": "CHAUSSURES PROFESSIONNELLES",
    "shop_cat2_title": "Chaussures de Danse & Semelles Techniques",
    "shop_cat2_desc": "Chaussures de salsa et bachata pour femmes et hommes. Semelles en daim et amorti métatarsien pour protéger les articulations et réussir des tours nets en toute sécurité.",
    "shop_cat3_badge": "SANTÉ & BIEN-ÊTRE",
    "shop_cat3_title": "Kits Somatiques de Danse-Thérapie",
    "shop_cat3_desc": "Accessoires ergonomiques sélectionnés par Ludivine Gomez pour compléter vos séances de danse-thérapie, étirements somatiques et correction posturale à la maison ou en studio.",
    "shop_cat4_badge": "FORMATION & EXPÉRIENCES",
    "shop_cat4_title": "Forfaits de Cours & Cartes Cadeaux",
    "shop_cat4_desc": "Packs de 5 et 10 séances individuelles avec Yomiuri Ruiz ou Ludivine Gomez à tarif préférentiel, flexibilité maximale d'agenda et cartes cadeaux personnalisées.",
    "shop_btn_consult": "Consulter la Disponibilité sur WhatsApp",
    "nav_history": "Histoire",
    "bridge_to_enjoy": "Enjoy and Learn",
    "hero_kicker_bienestar": "Pleine Conscience · Yoga · Nutrition Holistique",
    "hero_title_bienestar": "Renouez avec votre équilibre naturel grâce au mouvement conscient.",
    "hero_lead_bienestar": "Espace de bien-être global au Luxembourg : programmes personnalisés de yoga, méditation guidée et nutrition consciente dispensés par des spécialistes certifiés.",
    "hero_cta_booking": "Réserver une Séance",
    "hero_cta_events": "Voir les Retraites & Ateliers",
    "about_kicker": "À Propos",
    "about_title_bienestar": "Un havre de calme et de santé au cœur du Luxembourg",
    "filter_all": "Tous",
    "filter_classes": "Yoga",
    "filter_events": "Retraites",
    "filter_workshops": "Nutrition",
    "modal_title": "Réservez votre Séance",
    "modal_subtitle": "Sélectionnez le service et la date souhaitée. Réponse sous 24h.",
    "modal_service_label": "Prestation souhaitée",
    "modal_date_label": "Date souhaitée",
    "modal_name_label": "Nom complet",
    "modal_email_label": "Adresse e-mail",
    "modal_notes_label": "Message ou demandes particulières",
    "modal_submit": "Confirmer la Réservation",
    "modal_success": "Merci ! Votre demande a été enregistrée.",
    "footer_cookies": "Cookies"
  }
};

let currentLang = localStorage.getItem("ecosystem_lang") || "es";

function applyLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem("ecosystem_lang", lang);

  // 1. Textos data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });

  // 2. Placeholders en formularios
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
      el.setAttribute("placeholder", TRANSLATIONS[lang][key]);
    }
  });

  // 3. Títulos / Tooltips
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
      el.setAttribute("title", TRANSLATIONS[lang][key]);
    }
  });

  // 4. Optgroups y Options
  document.querySelectorAll("optgroup[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
      el.label = TRANSLATIONS[lang][key];
    }
  });
  document.querySelectorAll("option[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  // 5. Indicador del navbar
  const langLabel = document.getElementById("currentLangLabel");
  if (langLabel) langLabel.textContent = lang.toUpperCase();

  // 6. Botones de idioma activos
  document.querySelectorAll(".lang-opt").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
  document.querySelectorAll(".receipt-lang-pill").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-receipt-lang") === lang);
  });

  // 7. Atributo lang en html
  document.documentElement.setAttribute("lang", lang);
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
  const dateInput = document.getElementById("bookDate");
  const dateSelect = document.getElementById("bookDateSelect");
  const dateHelpText = document.getElementById("dateHelpText");
  const dateLabel = document.getElementById("bookDateLabel");

  const EVENT_CONFIG = {
    "evento-luxembourg-latin-festival": {
      date: "2026-10-23",
      labels: {
        es: "23 – 25 Octubre 2026 (Festival Oficial)",
        en: "23 – 25 October 2026 (Official Festival)",
        fr: "23 – 25 Octobre 2026 (Festival Officiel)"
      },
      instructor: "he",
      name: "Luxembourg Latin Dance Festival"
    },
    "evento-fiesta-cubana-casino": {
      date: "2026-11-21",
      labels: {
        es: "Sábado, 21 Noviembre 2026 · 20:00",
        en: "Saturday, 21 November 2026 · 20:00",
        fr: "Samedi, 21 Novembre 2026 · 20h00"
      },
      instructor: "he",
      name: "Fiesta Cubana & Taller de Casino"
    },
    "evento-workshop-lady-styling": {
      date: "2026-11-28",
      labels: {
        es: "Sábado, 28 Noviembre 2026 · 16:30",
        en: "Saturday, 28 November 2026 · 16:30",
        fr: "Samedi, 28 Novembre 2026 · 16h30"
      },
      instructor: "she",
      name: "Workshop Intensivo de Salsa Fusion & Lady Styling"
    },
    "evento-danse-vibes-bailoterapia": {
      date: "2026-12-05",
      labels: {
        es: "Sábado, 05 Diciembre 2026 · 11:00",
        en: "Saturday, 05 December 2026 · 11:00",
        fr: "Samedi, 05 Décembre 2026 · 11h00"
      },
      instructor: "she",
      name: "Jornada 'Danse Vibes': Bailoterapia"
    },
    "evento-taller-bachata-sensual": {
      date: "2026-12-12",
      labels: {
        es: "Sábado, 12 Diciembre 2026 · 19:30",
        en: "Saturday, 12 December 2026 · 19:30",
        fr: "Samedi, 12 Décembre 2026 · 19h30"
      },
      instructor: "he",
      name: "Taller Intensivo de Bachata Sensual & Noche Social"
    }
  };

  function syncDateMode(preferredDate, preferredDateLabel) {
    if (!serviceSelect) return;
    const currentService = serviceSelect.value;
    const isEvent = currentService.startsWith("evento-") || (currentService in EVENT_CONFIG);

    if (isEvent) {
      const evt = EVENT_CONFIG[currentService];
      // Modo Evento: Mostrar selector de fechas específicas
      if (dateInput) {
        dateInput.style.display = "none";
        dateInput.removeAttribute("required");
        dateInput.disabled = true;
      }
      if (dateSelect) {
        dateSelect.style.display = "block";
        dateSelect.setAttribute("required", "");
        dateSelect.disabled = false;
        if (preferredDate) {
          dateSelect.value = preferredDate;
        } else if (evt && evt.date) {
          dateSelect.value = evt.date;
        }
      }
      if (dateHelpText) {
        dateHelpText.style.display = "block";
        const lockPrefix = currentLang === "en" ? "🔒 Confirmed date:" : (currentLang === "fr" ? "🔒 Date confirmée :" : "🔒 Fecha confirmada:");
        const label = preferredDateLabel || (evt && evt.labels ? evt.labels[currentLang] || evt.labels.es : (evt ? evt.label : ""));
        dateHelpText.textContent = label ? `${lockPrefix} ${label}` : "🔒";
      }
      if (dateLabel) {
        dateLabel.textContent = TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang].label_date_locked ? TRANSLATIONS[currentLang].label_date_locked : "Fecha del evento (confirmada)";
      }
      if (evt && evt.instructor && instructorSelect) {
        instructorSelect.value = evt.instructor;
      }
    } else {
      // Modo Clase Individual o Reserva General: Calendario regular abierto a cualquier fecha
      if (dateInput) {
        dateInput.style.display = "block";
        dateInput.setAttribute("required", "");
        dateInput.disabled = false;
        const today = new Date().toISOString().split("T")[0];
        dateInput.min = today;
      }
      if (dateSelect) {
        dateSelect.style.display = "none";
        dateSelect.removeAttribute("required");
        dateSelect.disabled = true;
      }
      if (dateHelpText) {
        dateHelpText.style.display = "none";
      }
      if (dateLabel) {
        dateLabel.textContent = TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang].label_date_free ? TRANSLATIONS[currentLang].label_date_free : "Fecha preferida (elige cualquier fecha)";
      }
    }
  }

  if (serviceSelect) {
    serviceSelect.addEventListener("change", () => {
      const currentService = serviceSelect.value || "";
      if (currentService.includes("yomiuri") && instructorSelect) {
        instructorSelect.value = "he";
      } else if (currentService.includes("ludivine") && instructorSelect) {
        instructorSelect.value = "she";
      }
      syncDateMode();
    });
  }

  if (instructorSelect) {
    instructorSelect.addEventListener("change", () => {
      const inst = instructorSelect.value;
      const currentService = serviceSelect ? serviceSelect.value : "";
      const isEvent = currentService.startsWith("evento-") || (currentService in EVENT_CONFIG);
      // Al cambiar de instructor, si había un evento o un servicio del otro instructor, cambiar a la clase individual correspondiente
      if (inst === "she") {
        if (isEvent || !currentService.includes("ludivine")) {
          if (serviceSelect) serviceSelect.value = "salsa-ladystyle-ludivine";
        }
      } else if (inst === "he") {
        if (isEvent || !currentService.includes("yomiuri")) {
          if (serviceSelect) serviceSelect.value = "salsa-yomiuri";
        }
      }
      syncDateMode();
    });
  }

  function openModal(preselectInstructor, preselectService, preselectDate, preselectDateLabel) {
    if (backdrop) {
      if (preselectInstructor && instructorSelect) {
        instructorSelect.value = preselectInstructor;
      }
      if (preselectService && serviceSelect) {
        serviceSelect.value = preselectService;
      } else if (!preselectService && serviceSelect) {
        // Reserva general o desde perfil de instructor: asegurar clase individual para permitir fecha libre
        if (preselectInstructor === "she" || (instructorSelect && instructorSelect.value === "she")) {
          serviceSelect.value = "salsa-ladystyle-ludivine";
        } else {
          serviceSelect.value = "salsa-yomiuri";
        }
      }

      syncDateMode(preselectDate, preselectDateLabel);

      // Asegurar estado inicial limpio
      if (modalHeader) modalHeader.style.display = "block";
      if (form) form.style.display = "block";
      if (receiptView) receiptView.style.display = "none";
      if (successMsg) successMsg.style.display = "none";

      backdrop.classList.add("active");
      document.body.style.overflow = "hidden";
      const firstInput = backdrop.querySelector("input:not([style*='display: none']), select:not([style*='display: none'])");
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
          syncDateMode();
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
    const preDate = btn.getAttribute("data-preselect-date");
    const preDateLabel = btn.getAttribute("data-preselect-date-label");
    openModal(preInstructor, preService, preDate, preDateLabel);
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

      const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "Estimado/a alumno/a";
      const email = emailInput && emailInput.value.trim() ? emailInput.value.trim() : "No especificado";

      const currentService = serviceSelect ? serviceSelect.value : "";
      const isEvent = currentService.startsWith("evento-") || (currentService in EVENT_CONFIG);
      let rawDate = "";
      let formattedDate = "";

      if (isEvent && dateSelect && !dateSelect.disabled) {
        rawDate = dateSelect.value;
        const selectedOpt = dateSelect.options[dateSelect.selectedIndex];
        formattedDate = (selectedOpt && selectedOpt.getAttribute("data-label")) || (selectedOpt ? selectedOpt.text : "");
      } else if (dateInput && !dateInput.disabled) {
        rawDate = dateInput.value;
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
              `📅 *Date souhaitée :* ${formattedDate || rawDate}\n` +
              `📧 *E-mail :* ${email}\n\n` +
              `Je reste à l'écoute pendant que vous vérifiez le planning pour me confirmer ma place. Merci beaucoup !`;
          } else if (currentLang === 'en') {
            waMessage = `Hi Enjoy & Learn! 👋 I just submitted my booking request on the website:\n\n` +
              `📋 *Reference:* #${randomRef}\n` +
              `👤 *Name:* ${name}\n` +
              (instructorName ? `🕺 *Instructor:* ${instructorName}\n` : "") +
              `🎯 *Class / Style:* ${serviceName}\n` +
              `📅 *Requested Date:* ${formattedDate || rawDate}\n` +
              `📧 *Email:* ${email}\n\n` +
              `I'll stay tuned while you check the schedule to confirm my spot. Thank you so much!`;
          } else {
            waMessage = `¡Hola Enjoy & Learn! 👋 Acabo de enviar mi solicitud de reserva en la web:\n\n` +
              `📋 *Referencia:* #${randomRef}\n` +
              `👤 *Nombre:* ${name}\n` +
              (instructorName ? `🕺 *Instructor:* ${instructorName}\n` : "") +
              `🎯 *Modalidad:* ${serviceName}\n` +
              `📅 *Fecha solicitada:* ${formattedDate || rawDate}\n` +
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
          "Fecha Solicitada": formattedDate || rawDate,
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
// 10. COMPARADOR DE PALETAS DE COLOR (6 Paletas Oficiales)
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

