export const clinic = {
  name: "Peluquería Manuel Casal",
  logo: "/images/logo.png",
  tagline: "Tu peluquería de confianza en 28014 Madrid",
  description: "Peluquería Manuel Casal es un oasis de profesionalidad en pleno corazón de Madrid. Con 4.8 estrellas y 175 reseñas en Google, Manuel combina la maestría de la peluquería clásica de toda la vida con las técnicas más actuales. Especializado en cortes personalizados, afeitado clásico y barbería tradicional, ofrece un trato exquisito y cercano que te hará sentir como en casa. Una auténtica peluquería de barrio donde el buen hacer y la calidad están garantizados.",
  colors: {
    primary: "#2563EB",
    secondary: "#1E293B",
    accent: "#60A5FA",
    neutral: "#F8FAFC"
  },
  phone: "652 11 46 38",
  whatsapp: "+34652114638",
  whatsappMessage: "Hola, me gustaría pedir cita para peluquería.",
  email: "info@peluqueríamanuelcasal.es",
  address: {
    street: "Calle de Echegaray, 27, Centro, 28014 Madrid, España",
    city: "28014 Madrid",
    province: "Madrid",
    postalCode: "28014",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=10020030124480892656&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Peluquer%C3%ADa%20Manuel%20Casal%20%4040.4141%2C-3.69948&z=16&output=embed",
  coordinates: {
    lat: 40.4141,
    lng: -3.69948
  },
  schedule: [
    {
      days: "lunes - viernes",
      hours: "10:00–14:00, 16:30–20:30"
    },
    {
      days: "sábado",
      hours: "9:30–14:30"
    },
    {
      days: "domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 4.8,
    count: 175,
    url: "https://maps.google.com/?cid=10020030124480892656&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Ángel Luis Cárabe",
        rating: 5,
        text: "Manuel, profesional indiscutible. Tan exquisito en el trabajo como en el trato. Tan buen peluquero como buena persona. La globalización no ha llegado a la calle Echegaray ¡Aún quedan peluquerías de barrio!.\nDesde que le conocí no he ido a otra.\nGracias Manuel.",
        date: "Hace 3 meses"
      },
      {
        author: "Jesus",
        rating: 5,
        text: "Manuel es un peluquero de los de toda la vida, un tío simpático y amable.\nLlevo cortándome el pelo con el desde hace mas de un año. Me he cortado en varias que hay o había por el barrio y puedo asegurar que es el mejor.",
        date: "Hace 4 meses"
      },
      {
        author: "Karasu Lions",
        rating: 5,
        text: "Manolo. Maestro peluquero y Barbero se toda la  vida. Afeitado clásico muy bien hecho y cortes de pelo clásicos o lo que esté a la moda. Muy atento y educado, y siempre flexible con la petición de las citas.",
        date: "Hace 6 años"
      },
      {
        author: "Drymartino",
        rating: 5,
        text: "Entre tanto barbershop,hairdressers y tontás varias,aún quedan oasis como este establecimiento con un gran profesional al frente y con un buen hacer. Muy recomendable y buen corte de pelo.",
        date: "Hace 5 meses"
      },
      {
        author: "raul luengo",
        rating: 5,
        text: "Una peluquería clásica de todo la vida.\nEl propietario, un señor encantador y precios muy buenos.\nLo recomiendo 100%.",
        date: "Hace 2 meses"
      }
    ]
  },
  services: [
    {
      id: "corte-clasico-moderno",
      icon: "Scissors",
      name: "Cortes Clásicos y Modernos",
      benefits: [
        "Cortes adaptados a tu fisonomía y estilo de vida",
        "Técnicas tradicionales y modernas combinadas",
        "Asesoramiento profesional sobre el mejor look para ti"
      ],
      description: "Manuel domina tanto los cortes clásicos atemporales como las tendencias más actuales. Con más de años de experiencia, adapta cada corte a tu estilo personal, tipo de cabello y preferencias. Un servicio personalizado donde la maestría se nota en cada detalle."
    },
    {
      id: "afeitado-clasico",
      icon: "Sparkles",
      name: "Afeitado Clásico a Navaja",
      benefits: [
        "Técnica tradicional con navaja profesional",
        "Tratamiento completo con toallas calientes",
        "Experiencia relajante y resultado impecable"
      ],
      description: "Disfruta de la experiencia del afeitado tradicional con navaja, toallas calientes y productos premium. Un ritual de barbería clásica que te dejará la piel suave, cuidada y con un acabado impecable. El arte del afeitado como se hacía antes."
    },
    {
      id: "barberia-masculina",
      icon: "User",
      name: "Barbería y Grooming Masculino",
      benefits: [
        "Arreglo y diseño de barba profesional",
        "Perfilado de precisión y acabados impecables",
        "Productos de alta calidad para el cuidado masculino"
      ],
      description: "Servicio completo de barbería para el hombre moderno que valora la calidad. Arreglo de barba, perfilado, cortes masculinos y cuidado facial. Manuel combina la tradición de la barbería clásica con las tendencias actuales del grooming."
    },
    {
      id: "cortes-personalizados",
      icon: "Crown",
      name: "Cortes Personalizados a Medida",
      benefits: [
        "Análisis personalizado de tu cabello y estilo",
        "Atención individualizada en cada cita",
        "Resultado adaptado a tu día a día"
      ],
      description: "Cada cliente es único y merece un corte diseñado específicamente para él. Manuel analiza tu tipo de cabello, forma del rostro y estilo personal para crear el look perfecto. Flexibilidad total con tus peticiones y un resultado siempre profesional."
    },
    {
      id: "color-tinte",
      icon: "Sparkles",
      name: "Color y Tinte Profesional",
      benefits: [
        "Productos profesionales de máxima calidad",
        "Cobertura perfecta y colores duraderos",
        "Asesoramiento sobre tonos que te favorecen"
      ],
      description: "Coloraciones y tintes con productos de alta gama que respetan la salud de tu cabello. Desde coberturas de canas hasta cambios de look completos, Manuel te asesora sobre el color que mejor te favorece y lo aplica con técnica impecable."
    },
    {
      id: "tratamientos-capilares",
      icon: "Heart",
      name: "Tratamientos Capilares",
      benefits: [
        "Tratamientos adaptados a tu tipo de cabello",
        "Productos profesionales de alta gama",
        "Resultados visibles desde la primera sesión"
      ],
      description: "Cuida la salud de tu cabello con tratamientos específicos para cada necesidad. Hidratación profunda, reparación y fortalecimiento capilar con productos profesionales que devuelven la vitalidad a tu pelo."
    },
    {
      id: "peinados-eventos",
      icon: "Crown",
      name: "Peinados para Eventos",
      benefits: [
        "Peinados elegantes para cualquier ocasión",
        "Acabado profesional duradero",
        "Asesoramiento sobre el estilo que mejor te sienta"
      ],
      description: "Luce impecable en cualquier ocasión especial con peinados profesionales. Bodas, eventos, celebraciones o simplemente cuando quieres lucir tu mejor versión. Estilo, elegancia y un acabado que dura todo el día."
    },
    {
      id: "cuidado-capilar",
      icon: "Layers",
      name: "Cuidado y Mantenimiento Capilar",
      benefits: [
        "Consejos profesionales personalizados",
        "Recomendación de productos específicos",
        "Trucos para mantener tu estilo en casa"
      ],
      description: "Aprende a cuidar tu cabello en casa con los consejos profesionales de Manuel. Recomendaciones personalizadas de productos, técnicas de peinado y rutinas de cuidado para mantener tu look perfecto entre visitas."
    }
  ],
  process: [
    {
      step: 1,
      title: "Reserva tu Cita",
      description: "Llama al 652 11 46 38 o contacta por WhatsApp para reservar tu cita. Manuel se adapta a tus horarios con total flexibilidad y siempre te atiende de forma personalizada."
    },
    {
      step: 2,
      title: "Consulta Personalizada",
      description: "Manuel analizará tu tipo de cabello, escuchará tus preferencias y te asesorará profesionalmente sobre el corte o servicio que mejor se adapta a ti. Aquí tu opinión cuenta y el trato es siempre cercano."
    },
    {
      step: 3,
      title: "Trabajo Artesanal",
      description: "Disfruta de la experiencia de un maestro peluquero y barbero de toda la vida. Manuel trabaja con técnica impecable, atención al detalle y productos de calidad para garantizar el mejor resultado."
    },
    {
      step: 4,
      title: "Resultado Impecable",
      description: "Sal con un look renovado que refleja tu personalidad y estilo. Manuel te dará consejos para mantener tu corte en casa y te esperará en tu próxima visita con la misma profesionalidad y buen trato de siempre."
    }
  ],
  whyUs: [
    {
      icon: "Crown",
      title: "Profesionalidad Indiscutible",
      description: "Manuel es un maestro peluquero y barbero de toda la vida con años de experiencia. Su técnica impecable, atención al detalle y dominio tanto de estilos clásicos como modernos le convierten en un profesional de referencia. No es casualidad que nuestros clientes no vayan a otra peluquería desde que nos conocen."
    },
    {
      icon: "Sparkles",
      title: "4.8 Estrellas en Google",
      description: "Con 175 reseñas y una valoración de 4.8 sobre 5 en Google, nuestros clientes avalan la calidad de nuestro trabajo. Destacan el trato exquisito, la profesionalidad, los precios justos y el ambiente de auténtica peluquería de barrio. Una prueba real de que aquí recibes el mejor servicio."
    },
    {
      icon: "Heart",
      title: "Trato Personalizado y Cercano",
      description: "En Peluquería Manuel Casal no eres un número más. Manuel te atiende personalmente, escucha tus preferencias, te asesora profesionalmente y se adapta con flexibilidad a tus necesidades. Un trato tan exquisito en el trabajo como en lo personal, como destacan todos nuestros clientes."
    },
    {
      icon: "User",
      title: "Peluquería de Barrio Auténtica",
      description: "Entre tanta franquicia impersonal y barbershop de moda, Peluquería Manuel Casal es un oasis de calidad y autenticidad. Una verdadera peluquería de barrio donde la globalización no ha llegado, con buen hacer tradicional, precios justos y la calidez del trato de toda la vida. Ven y descubre la diferencia."
    }
  ],
  team: [
    {
      name: "Equipo de Peluquería Manuel Casal",
      role: "Estilistas Profesionales",
      image: "/images/team/placeholder.jpg",
      bio: "Estilistas apasionados por la belleza y las tendencias. En Peluquería Manuel Casal nos dedicamos a que cada cliente salga con el look perfecto y la confianza renovada."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "Peluquería Manuel Casal - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Peluquería Manuel Casal - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Peluquería Manuel Casal - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Peluquería Manuel Casal - Imagen 4"
    }
  ],
  faq: [
    {
      answer: "Aunque Manuel es flexible con las citas, es recomendable llamar al 652 11 46 38 o contactar por WhatsApp para asegurar tu hueco. De esta forma garantizamos que puedas ser atendido sin esperas y con la dedicación que mereces. Manuel se adapta a tus horarios para ofrecerte la máxima comodidad.",
      question: "¿Necesito pedir cita previa en Peluquería Manuel Casal?"
    },
    {
      answer: "Peluquería Manuel Casal es una auténtica peluquería de barrio en pleno Madrid, lejos de las franquicias impersonales. Manuel es un maestro peluquero y barbero de toda la vida que combina técnicas clásicas con las tendencias actuales. Con 4.8 estrellas y 175 reseñas en Google, nuestros clientes destacan el trato exquisito, la profesionalidad indiscutible y la calidad del trabajo. Aquí recibes atención personalizada de un verdadero profesional.",
      question: "¿Qué diferencia a Peluquería Manuel Casal de otras peluquerías?"
    },
    {
      answer: "Sí, Manuel es especialista en afeitado clásico tradicional con navaja. Es uno de los servicios más valorados por nuestros clientes. El afeitado incluye técnica profesional con navaja, toallas calientes y productos de alta calidad para un resultado impecable y una experiencia relajante. Un auténtico ritual de barbería clásica que no encontrarás en cualquier sitio.",
      question: "¿Ofrecen servicio de afeitado clásico con navaja?"
    },
    {
      answer: "En Peluquería Manuel Casal ofrecemos servicio completo de barbería masculina: cortes clásicos y modernos, afeitado tradicional con navaja, arreglo y diseño de barba, perfilado y cuidado facial. Manuel domina tanto los estilos clásicos atemporales como las tendencias actuales del grooming masculino, siempre con la máxima profesionalidad y atención al detalle.",
      question: "¿Qué servicios de barbería ofrecen?"
    },
    {
      answer: "El tiempo varía según el servicio: un corte de pelo suele durar entre 30-45 minutos, mientras que servicios como coloración o tratamientos pueden requerir más tiempo. Manuel trabaja sin prisas, dedicando a cada cliente la atención necesaria para garantizar un resultado perfecto. Al reservar tu cita te informaremos de la duración estimada según el servicio que necesites.",
      question: "¿Cuánto tiempo dura una cita en la peluquería?"
    },
    {
      answer: "Sí, en Peluquería Manuel Casal atendemos tanto a hombres como a mujeres. Manuel tiene amplia experiencia en cortes masculinos, barbería y también en cortes femeninos, coloración y peinados. Es un profesional versátil que adapta su técnica a cada cliente, independientemente del género, siempre con el mismo nivel de excelencia y dedicación.",
      question: "¿Hacen cortes de pelo para mujer y hombre?"
    },
    {
      answer: "Estamos ubicados en la calle Echegaray, en pleno centro de Madrid, código postal 28014. Es una zona céntrica y bien comunicada del barrio de Las Letras. Para llegar puedes usar transporte público o consultar la ubicación exacta al llamar al 652 11 46 38. Una auténtica peluquería de barrio en el corazón de Madrid.",
      question: "¿Dónde está ubicada Peluquería Manuel Casal?"
    },
    {
      answer: "Nuestros clientes nos valoran con 4.8 estrellas sobre 5 en Google, con 175 reseñas. Destacan la profesionalidad indiscutible de Manuel, su trato exquisito y cercano, la calidad del trabajo y los precios justos. Muchos clientes llevan años viniendo y nos recomiendan como la mejor opción frente a las franquicias impersonales. Las palabras que más se repiten son: profesional, amable, clásico, maestro y recomendable 100%.",
      question: "¿Qué opinan los clientes de Peluquería Manuel Casal?"
    }
  ],
  seo: {
    keywords: [
      "peluquería Madrid 28014",
      "Peluquería Manuel Casal",
      "barbería clásica Madrid",
      "afeitado navaja Madrid",
      "peluquero profesional Madrid centro",
      "corte pelo hombre Madrid",
      "peluquería barrio Letras",
      "barbería tradicional Madrid",
      "peluquería calle Echegaray",
      "mejor peluquero Madrid",
      "peluquería de barrio Madrid",
      "grooming masculino Madrid centro"
    ],
    defaultTitle: "Peluquería Manuel Casal | 28014 Madrid | 4.8★",
    titleTemplate: "%s | Peluquería Manuel Casal",
    defaultDescription: "Peluquería y barbería clásica en Madrid 28014. Cortes personalizados, afeitado tradicional y trato profesional. 4.8★ en Google. Manuel, maestro peluquero de toda la vida. ☎️ 652 11 46 38",
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Peluquería Manuel Casal",
    cif: "",
    registeredAddress: "Calle de Echegaray, 27, Centro, 28014 Madrid, España, 28014 Madrid, Madrid"
  },
  heroHeadline: [
    "Tu Centro de",
    "Peluquería",
    "en 28014 Madrid"
  ],
  heroDescription: "En Peluquería Manuel Casal encontrarás la experiencia de un maestro peluquero y barbero de toda la vida. Manuel te ofrece cortes clásicos y modernos, afeitado tradicional y un trato personalizado que marca la diferencia. Olvídate de las franquicias impersonales y descubre el auténtico arte de la peluquería de barrio en pleno Madrid.",
  specialty: "Peluquería Clásica y Barbería",
  ctaLabel: "Tu Nuevo Look",
  ctaHeadline: "¿Listo para un cambio de look con un auténtico profesional?",
  ctaDescription: "Reserva tu cita en Peluquería Manuel Casal y descubre por qué nuestros clientes nos recomiendan con 4.8 estrellas. Experiencia, calidad y trato personalizado en cada visita.",
  statsLabel: "Clientes",
  schemaType: "HairSalon",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Técnicas avanzadas de estética y belleza para realzar tu imagen y cuidar de ti.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la belleza en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu belleza, nuestra pasión",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para realzar tu belleza natural.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestras clientas",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestro centro",
    galleryDescription: "Un espacio diseñado para tu bienestar y relajación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestras clientas.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializadas",
    teamDescription: "Experiencia y pasión al servicio de tu belleza"
  }
}

export type Clinic = typeof clinic
