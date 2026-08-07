// src/data/projectsData.js

export const projectsData = [
  {
    id: 1,
    slug: "weprom-mx",
    title: "WeProm MX | Sede LATAM",
    description: "Plataforma corporativa de alta fidelidad UI/UX para una de las agencias de marketing líderes en México. Desarrollo Pixel-Perfect basado en físicas y animaciones complejas.",
    detailedDescription: "Ecosistema web corporativo premium de 9 secciones especializado para WeProm LATAM. Desarrollo Pixel-Perfect que traduce diseños complejos de Figma en código interactivo de alto rendimiento.",
    challenge: "Traducir un diseño corporativo sumamente complejo de Figma en una experiencia interactiva fluida y de alta gama sin comprometer los tiempos de carga.",
    solution: "Implementación de una arquitectura frontend basada en React y Tailwind CSS, complementada con animaciones avanzadas y micro-interacciones gestionadas con Framer Motion.",
    results: "Despliegue exitoso de un ecosistema corporativo robusto, optimizado para SEO y con una experiencia de usuario de nivel internacional.",
    stack: ["React.js", "Tailwind CSS", "Framer Motion", "Figma UI/UX", "Vercel", "Vite", "Canva Design", "npm"],
    image: "/images/hero-wepromx.png",
    gallery: [],
    github: null,
    demo: "https://weprommarketing.mx/",
    aosDelay: 150,

    colorPalette: {
      primary: "#80b67d",    // Rojo
      secondary: "#599ddf",  // Azul
      accent: "#e6af41",     // Amarillo
      dark: "#1a1a1a",       // Negro suave
      light: "#f5f5f5",      // Blanco roto
    }

  },
  {
    id: 2,
    slug: "weprom-promocionales",
    title: "WeProm | Artículos Promocionales",
    description: "E-commerce corporativo y CMS administrativo a medida. Arquitectura Full-Stack con control de inventario y transiciones premium.",
    detailedDescription: "Plataforma web comercial y administrativa para la división internacional de artículos promocionales de WeProm LATAM. Integra una landing page interactiva con un Dashboard Administrativo privado (CRUD).",
    challenge: "Crear un sistema unificado que permitiera tanto al cliente final cotizar productos como al equipo administrativo gestionar catálogos de forma autónoma y segura.",
    solution: "Desarrollo de una arquitectura Full-Stack conectando React y Tailwind con Node.js y Supabase para asegurar persistencia de datos en tiempo real y autenticación robusta.",
    results: "Automatización completa del flujo de solicitudes comerciales y optimización en la administración de inventarios digitales.",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Supabase", "Vercel", "Canva Design", "Vite", "npm"],
    image: "/images/hero-promocionales.png",
    gallery: [],
    github: null,
    demo: "https://promocionales.weprom.mx/",
    aosDelay: 50,
  },

  {
      id: 3,
      slug: "weprom-europe-v2",
      title: "WeProm Europe | Business Development Hub",
      description: "Hub corporativo internacional para la conexión estratégica entre Europa y América Latina. Plataforma institucional de alto nivel con enfoque B2B.",
      detailedDescription: "WeProm Europe es la sede europea de un grupo internacional con más de 35 años de experiencia, tres generaciones y más de 10,000 proyectos entregados. El sitio web corporativo actúa como un hub estratégico que conecta empresas e instituciones entre Europa y América Latina, ofreciendo servicios de inteligencia de mercado, consultoría de expansión y posicionamiento internacional. El diseño refleja la solidez y el prestigio de una firma global, con una navegación clara y un enfoque en la generación de confianza y oportunidades de negocio.",
      challenge: "El desafío fue consolidar la identidad digital de una firma con más de tres décadas de trayectoria, adaptándola a un mercado europeo exigente. El sitio debía comunicar credibilidad, experiencia y capacidad de ejecución, a la vez que servía como un punto de entrada para empresas de ambos lados del Atlántico. La estructura debía ser lo suficientemente flexible para albergar múltiples servicios, sectores y un equipo internacional, sin perder claridad ni impacto visual.",
      solution: "Se desarrolló una arquitectura de información jerárquica y modular, con secciones clave que guían al usuario desde el diagnóstico de oportunidad hasta la activación local. El diseño combina una estética corporativa sobria con elementos visuales dinámicos que refuerzan la identidad de marca. La integración de un CMS headless (Sanity) permite la publicación autónoma de insights y reportes, posicionando a WeProm Europe como un referente de pensamiento estratégico en el corredor transatlántico.",
      results: "El sitio se ha convertido en la principal herramienta de captación de clientes para WeProm Europe, generando consultas de empresas de sectores como automotriz, agroalimentario, tecnología y energía limpia. La plataforma ha mejorado la percepción de la marca en el mercado europeo y ha facilitado la comunicación con socios institucionales y comerciales en ambos continentes.",
      stack: ["React.js", "Tailwind CSS", "Sanity CMS", "Vite", "Framer Motion", "SEO"],
      image: "/images/hero-weprom-europe-v2.png", // Necesitas añadir esta imagen
      gallery: [],
      github: null,
      demo: "https://wepromeurope.com/",
      aosDelay: 100,
      colorPalette: {
        primary: "#1a2a3a",    // Azul oscuro corporativo
        secondary: "#4a6a8a",  // Azul medio
        accent: "#c9a84c",     // Dorado / Acento
        dark: "#0d1b2a",       // Casi negro
        light: "#f4f6f9",      // Gris muy claro
      }
    },

     {
      id: 4,
      slug: "aurea-fractional",
      title: "Aurea Fractional | Luxury Fractional Ownership",
      description: "Landing page de lujo para un proyecto de copropiedad en Tapalpa, Jalisco. Diseño elegante y sofisticado que transmite exclusividad y confianza.",
      detailedDescription: "Landing page de alta gama para 'Cabaña Pastores', un proyecto de copropiedad de lujo. El sitio web presenta la propiedad con un diseño visualmente impactante que combina una paleta de colores sofisticada (beige/ocre, azules y grises) con una experiencia de usuario fluida. El objetivo es comunicar la exclusividad, la privacidad y la gestión sin preocupaciones que ofrece el modelo de negocio, todo a través de una interfaz moderna, responsiva y con un rendimiento optimizado.",
      challenge: "El principal desafío fue traducir la esencia de una propiedad de lujo y un modelo de negocio innovador (copropiedad fraccionada) en una experiencia digital que transmitiera confianza, exclusividad y serenidad. La landing page debía ser visualmente impactante, pero también funcional, guiando al usuario a través de la información (ubicación, distribución, servicios, modelo) de manera intuitiva y sin fricciones.",
      solution: "Se optó por una arquitectura frontend moderna con React y Tailwind CSS para garantizar un desarrollo ágil y un diseño altamente personalizado. La página se estructuró con secciones claras y un flujo narrativo que comienza con un 'hero' inspirador, seguido de los detalles de la propiedad, el modelo de negocio y la ubicación. El uso de tipografía limpia, espaciado generoso y una paleta de colores que refleja la calidez y elegancia del proyecto, junto con animaciones sutiles, crea una experiencia de usuario envolvente y profesional.",
      results: "Se entregó una landing page responsiva, optimizada para SEO y con una velocidad de carga excelente, que posiciona a 'Cabaña Pastores' como una opción de lujo en el mercado inmobiliario fraccionado. La página ha recibido comentarios positivos por su diseño elegante y su capacidad para comunicar claramente el valor de la propiedad y el modelo de negocio, lo que ha contribuido a generar leads y consultas de potenciales compradores.",
      stack: ["React.js", "Tailwind CSS", "Vite", "Responsive Design", "Framer Motion"],
      image: "/images/hero-aurea-fractional.png", // Asegúrate de tener esta imagen en public/images/
      gallery: [],
      github: null,
      demo: "https://aurea-fractional-landing.vercel.app/",
      aosDelay: 150,
      colorPalette: {
        primary: "#CEB295",    // Beige / Ocre
        secondary: "#344E6A",  // Azul Oscuro / Central
        accent: "#4B647D",     // Azul Acero / Pizarra
        dark: "#4F5052",       // Gris Oscuro / Carbón
        light: "#E2E2E2",      // Fondo Gris Claro
      }
    },


    {
      id: 5,
      slug: "weprom-europe-market-research",
      title: "WeProm Europe | Market Research & Cross-Border Expansion",
      description: "Landing page institucional para servicios de inteligencia de mercado y expansión internacional entre Europa y América Latina. Diseño corporativo de alto nivel con enfoque B2B y navegación multilingüe.",
      detailedDescription: "Plataforma digital especializada en investigación de mercados y consultoría de expansión transfronteriza. El sitio presenta los servicios de WeProm Europe en tres pilares clave: investigación de mercados, consultoría de aterrizaje y posicionamiento estratégico. Diseñada para transmitir confianza, precisión y capacidad ejecutiva, la landing page utiliza una paleta de colores que combina azul marino corporativo con acentos eléctricos, creando una experiencia visual sobria, profesional y altamente premium.",
      challenge: "El principal desafío fue comunicar la sofisticación y el alcance global de una firma con más de 35 años de experiencia en un sector tan exigente como la consultoría internacional. La página debía transmitir autoridad y precisión, a la vez que guiaba al usuario a través de una oferta de servicios compleja (investigación de mercados, expansión, posicionamiento) de manera clara y estructurada. Además, se requería soporte multilingüe (inglés/francés) para atender a una audiencia corporativa internacional.",
      solution: "Se optó por una arquitectura frontend moderna con React y Tailwind CSS, priorizando la claridad tipográfica y una jerarquía visual impecable. La estructura se organizó en secciones modulares que guían al usuario desde las capacidades globales hasta los casos de éxito y el marco metodológico. El uso de una paleta de colores sobria (azul marino, blanco, acentos eléctricos) refuerza la identidad corporativa, mientras que las animaciones sutiles y el video de fondo en el hero generan un impacto visual inmediato sin comprometer la velocidad de carga.",
      results: "La landing page se ha convertido en una herramienta clave de captación para WeProm Europe, generando consultas de empresas de sectores como automotriz, agroalimentario, tecnología y energía. La estructura clara y el enfoque en la resolución de problemas han mejorado la tasa de conversión y la percepción de la marca como un socio estratégico confiable para la expansión internacional.",
      stack: ["React.js", "Tailwind CSS", "Vite", "Responsive Design", "Framer Motion"],
      image: "/images/hero-weprom-market-research.png", // Debes añadir esta imagen en public/images/
      gallery: [],
      github: null,
      demo: "https://wepromeurope.com/market-research/",
      aosDelay: 100,
      colorPalette: {
        primary: "#7F9DFF",    // Azul Degradado / Texto Resaltado
        secondary: "#5346E2",  // Acento Morado / Azul Eléctrico
        accent: "#5346E2",     // Mismo acento para botones
        dark: "#091026",       // Azul Marino Corporativo (fondo oscuro)
        light: "#D3D6DF",      // Gris Plata Neutro (textos secundarios)
      }
    },


    {
      id: 6,
      slug: "rt-proyectos",
      title: "RT Proyectos | Soluciones Tecnológicas",
      description: "Landing page para arrendamiento y venta de equipos de cómputo. Diseño corporativo moderno con enfoque en PyMEs y corporativos, destacando simulación de arrendamiento y catálogo de equipos.",
      detailedDescription: "Plataforma digital de RT Proyectos, empresa especializada en arrendamiento y venta de equipo de cómputo. La landing page presenta un simulador de arrendamiento, catálogo de laptops, PCs de escritorio y multifuncionales, así como casos de éxito y testimonios. El diseño moderno y profesional combina una paleta de colores que incluye azul eléctrico, grises y blanco, transmitiendo confianza y solidez tecnológica.",
      challenge: "El desafío fue crear una landing page que comunicara claramente los beneficios del arrendamiento de equipos (deducibilidad fiscal, sin descapitalización) y que guiara al usuario a través de un proceso de cotización sencillo. La página debía ser visualmente atractiva para PyMEs y corporativos, destacando la flexibilidad de los planes y la variedad del catálogo, a la vez que generaba confianza con casos de éxito y clientes.",
      solution: "Se desarrolló una arquitectura frontend con React y Tailwind CSS, estructurada en secciones clave: hero con propuesta de valor, simulador de arrendamiento, catálogo de equipos, comparativa de valor, soluciones por sector y clientes. Se utilizó una paleta de colores corporativa (azul eléctrico, grises y blanco) para transmitir profesionalismo y tecnología, con llamadas a la acción claras y un diseño responsivo optimizado para conversión.",
      results: "La landing page ha mejorado la captación de leads para RT Proyectos, facilitando la cotización y el contacto directo. Los clientes han destacado la claridad del simulador y la presentación del catálogo, lo que ha incrementado las solicitudes de información y la confianza en la empresa.",
      stack: ["React.js", "Tailwind CSS", "Vite", "Responsive Design", "Framer Motion"],
      image: "/images/hero-rtproyectos.png",
      gallery: [],
      github: null,
      demo: "https://rtproyectos.com/rt-landing/",
      aosDelay: 100,
      colorPalette: {
        primary: "#194CE5",    // Azul Eléctrico
        secondary: "#4E5868",  // Gris Oxford
        accent: "#194CE5",     // Azul Eléctrico (botones)
        dark: "#0F1A2C",       // Negro Carbón
        light: "#EDF1F6",      // Gris Nube
        white: "#FFFFFF",      // Blanco
      }
    },


    {
      id: 7,
      slug: "weprom-europe",
      title: "WeProm Europe | París",
      description: "Corporate Hub internacional y CMS autogestionable para el corredor comercial Europa-América Latina. Optimización de infraestructura empresarial.",
      detailedDescription: "Sitio institucional premium desarrollado para la sede europea en París de un grupo con más de 35 años de trayectoria intercontinental utilizando Sanity Studio como Headless CMS.",
      challenge: "Garantizar tiempos de respuesta óptimos y alta disponibilidad para usuarios ubicados en el mercado europeo a través de servidores especializados.",
      solution: "Integración de un Headless CMS (Sanity) desacoplado de la interfaz en React, optimizado específicamente para infraestructura WPX Net.",
      results: "Máxima velocidad de carga en mercados internacionales y autonomía total para la publicación de contenido corporativo.",
      stack: ["React.js", "Tailwind", "Sanity CMS", "WPX Net", "Canva Design", "Vite", "npm"],
      image: "/images/hero-wepromeurope.png",
      gallery: [],
      github: null,
      demo: "https://wepromeurope.com/",
      aosDelay: 100,
    },

  
  {
    id: 8,
    slug: "ambiqua-landing",
    title: "Ambiqua Landing",
    description: "Landing page corporativa de alta conversión para tecnología agrotech. Enfoque estricto en UX/UI interactivo y accesibilidad.",
    detailedDescription: "Interfaz web de presentación para Ambiqua, una solución de ingeniería enfocada en el riego inteligente, priorizando la accesibilidad universal y la semántica HTML5 limpia.",
    challenge: "Comunicar conceptos de ingeniería agrotech complejos a través de una interfaz visualmente atractiva, ligera y altamente adaptativa.",
    solution: "Maquetación web nativa bajo metodologías ágiles, enfocada en rendimiento absoluto sin dependencias pesadas de frameworks.",
    results: "Excelente puntuación en métricas de rendimiento web y una presentación impecable en cualquier dispositivo móvil o de escritorio.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive", "Vercel"],
    image: "/images/hero-ambiqua.png",
    gallery: [],
    github: "https://github.com/jhon-henao13/Ambiqua-Landing",
    demo: "https://henao-ambiqua.vercel.app",
    aosDelay: 100,
  },
  {
    id: 9,
    slug: "ambiqua-app-iot",
    title: "Ambiqua App IoT",
    description: "Ecosistema Full-Stack IoT para telemetría agrícola. Telecontrol de hardware y procesamiento de datos en tiempo real.",
    detailedDescription: "Aplicación Web Progresiva (PWA) de nivel industrial para el monitoreo y automatización de cultivos que conecta hardware ESP32 mediante MQTT.",
    challenge: "Sincronizar flujos de datos asíncronos provenientes de sensores físicos con una interfaz web capaz de renderizar telemetría sin latencia perceptible.",
    solution: "Implementación de un backend en Flask con bases de datos MySQL y comunicación MQTT, integrado con Chart.js para gráficos reactivos en tiempo real.",
    results: "Monitoreo remoto operativo 24/7 y capacidad de actuación hidráulica instantánea desde la PWA.",
    stack: ["Flask", "Python", "MySQL", "Chart.js", "MQTT", "PWA"],
    image: "/images/hero-ambiqua-app.png",
    gallery: [],
    github: "https://github.com/jhon-henao13/Ambiqua",
    demo: "https://henao-ambiqua.vercel.app",
    aosDelay: 100,
  },
  {
    id: 10,
    slug: "grupo-elite-saas",
    title: "Grupo Élite SaaS (AI EdTech)",
    description: "Plataforma de software educativo integrado con Modelos de Lenguaje Avanzados (LLM) para analítica de aprendizaje personalizado.",
    detailedDescription: "SaaS arquitectónicamente diseñado para la optimización académica mediante Llama 3 (Groq API) configurado como un mentor cognitivo personalizado.",
    challenge: "Procesar volúmenes masivos de estadísticas de simulacros ICFES y generar recomendaciones pedagógicas automatizadas y precisas.",
    solution: "Construcción de un backend analítico en Python/Flask conectado a la API de Groq para procesamiento de lenguaje natural y modelado de datos.",
    results: "Plataforma educativa inteligente capaz de diagnosticar debilidades académicas y trazar planes de estudio adaptativos por estudiante.",
    stack: ["Python", "Flask", "MySQL", "Llama 3 (Groq)", "Chart.js", "Tailwind", "PWA"],
    image: "/images/mockup-dashboard2.webp",
    gallery: [],
    github: "#",
    demo: "https://grupoelite.pythonanywhere.com",
    aosDelay: 200,
  },
  {
    id: 11,
    slug: "clipzy-media-pwa",
    title: "Clipzy Media PWA",
    description: "Aplicación Web Progresiva multimedia de alta velocidad orientada al procesamiento en la nube y descargas asíncronas.",
    detailedDescription: "Herramienta de software en la nube optimizada como PWA para la extracción y transcodificación de archivos multimedia en alta definición de forma concurrente.",
    challenge: "Manejar tareas pesadas de procesamiento de video en servidores remotos sin bloquear la experiencia interactiva del usuario final.",
    solution: "Uso de yt-dlp y procesos asíncronos en Flask desplegados en infraestructura Koyeb con una interfaz minimalista.",
    results: "Descargas multimedia ultrarrápidas con consumo mínimo de recursos en el cliente.",
    stack: ["Flask", "Python", "yt-dlp", "Tailwind", "PWA", "Koyeb"],
    image: "/images/hero-clipzy.png",
    gallery: [],
    github: "https://github.com/jhon-henao13/Clipzy",
    demo: "https://clipzy.koyeb.app",
    aosDelay: 100,
  },

 


  {
    id: 12,
    slug: "socialize-network",
    title: "Socialize Network",
    description: "Plataforma social monolítica con mensajería privada, control de sesiones seguro y sistemas de interacción asíncrona.",
    detailedDescription: "Aplicación web social con pasarelas de autenticación cifrada, control de perfiles dinámicos, hilos de discusión y mensajería interna entre usuarios.",
    challenge: "Diseñar una arquitectura relacional sólida capaz de manejar relaciones complejas de usuarios, amistades, publicaciones y chats privados simultáneamente.",
    solution: "Desarrollo estructurado bajo PHP y MySQL con un diseño modular en Bootstrap y control estricto de sesiones.",
    results: "Una red social funcional que demuestra dominio completo de bases de datos relacionales y lógica backend tradicional.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JS", "Bootstrap", "XAMPP"],
    image: "/images/hero-socialize.jpeg",
    gallery: [],
    github: "https://github.com/jhon-henao13/Socialize",
    demo: null,
    aosDelay: 400,
  },

  


  {
    id: 14,
    slug: "syslity-tech",
    title: "Syslity Tech",
    description: "Landing page empresarial de servicios TI. Diseño enfocado en la conversión corporativa y la confianza de marca.",
    detailedDescription: "Portal corporativo para firma especializada en soporte de infraestructura con elementos dinámicos interactivos de partículas fluidas.",
    challenge: "Equilibrar un aspecto sobrio de ciberseguridad/soporte técnico con un toque moderno e innovador que enganche al visitante B2B.",
    solution: "Integración de tsParticles y AOS.js para transiciones suaves al hacer scroll, estructurando un embudo visual claro de conversión.",
    results: "Incremento en la captación de prospectos corporativos gracias a un diseño limpio y profesional.",
    stack: ["HTML", "CSS", "JS", "tsParticles.js", "AOS.js", "Vercel", "Font Awesome"],
    image: "/images/hero-syslity.png",
    gallery: [],
    github: "https://github.com/jhon-henao13/Syslity-Landing",
    demo: "https://syslity.vercel.app",
    aosDelay: 200,
  },
  {
    id: 15,
    slug: "pionix-events",
    title: "Pionix Events",
    description: "Plataforma institucional híbrida con segmentación visual avanzada de modelos de negocio cruzados.",
    detailedDescription: "Desarrollo web corporativo para gestión de eventos masivos y soporte técnico que unifica dos unidades de negocio bajo una misma identidad.",
    challenge: "Fusionar dos servicios con enfoques operativos muy distintos en un mismo sitio web sin generar confusión visual en el usuario.",
    solution: "Implementación de layouts asimétricos, optimización de recursos estáticos y animaciones controladas mediante AOS.js.",
    results: "Coherencia de marca impecable y navegación intuitiva entre las distintas divisiones de la compañía.",
    stack: ["HTML", "CSS", "JS", "tsParticles.js", "AOS.js", "Vercel", "Font Awesome"],
    image: "/images/hero-pionix.jpg",
    gallery: [],
    github: "https://github.com/jhon-henao13/Pionix",
    demo: "https://jhon-henao13.github.io/Pionix-Landing",
    aosDelay: 300,
  },
  {
    id: 16,
    slug: "socialis-forums",
    title: "Socialis Forums",
    description: "Comunidad y foro de discusión digital de alto rendimiento con taxonomías dinámicas y login seguro.",
    detailedDescription: "Plataforma Web Full-Stack para creación y debate de blogs técnicos y comunidades online con categorías jerárquicas y moderación.",
    challenge: "Estructurar un sistema de foros anidados con control de roles y permisos para la administración eficiente de contenido generado por usuarios.",
    solution: "Construcción de un backend en Flask conectado a MySQL con autenticación segura y gestión de bases de datos relacionales.",
    results: "Entorno comunitario dinámico, seguro y altamente escalable para publicaciones técnicas.",
    stack: ["Flask", "Python", "MySQL", "HTML", "CSS", "JavaScript", "Auth Login"],
    image: "/images/hero-socialis.png",
    gallery: [],
    github: "https://github.com/jhon-henao13/Foro_Socialis_2",
    demo: "https://estiguar15.pythonanywhere.com/",
    aosDelay: 300,
  },
  {
    id: 17,
    slug: "vitalis-telemedicina",
    title: "Vitalis Telemedicina",
    description: "Plataforma de e-Health para el monitoreo clínico remoto. Dashboards reactivos con analítica de constantes vitales.",
    detailedDescription: "Software de salud digital enfocado en la comunicación médico-paciente con registro de métricas corporales y alertas automáticas.",
    challenge: "Manejar información médica sensible garantizando privacidad estricta y visualización analítica clara de las constantes vitales.",
    solution: "Desarrollo de un panel clínico inteligente en Flask y MySQL acompañado de gráficos interactivos con Chart.js para detección de anomalías.",
    results: "Herramienta de seguimiento preventivo eficiente que agiliza la lectura de datos clínicos para especialistas.",
    stack: ["Flask", "Python", "MySQL", "Chart.js", "HTML", "CSS", "JS"],
    image: "/images/hero-vitalis.png",
    gallery: [],
    github: "https://github.com/jhon-henao13/vitalis",
    demo: "https://estiguar16.pythonanywhere.com",
    aosDelay: 400,
  },
  {
    id: 18,
    slug: "ai-politics-chatbot",
    title: "AI Politics Chatbot",
    description: "Asistente cognitivo inteligente entrenado para el procesamiento de lenguaje natural y análisis político de datos contextuales.",
    detailedDescription: "Agente conversacional especializado para la interpretación contextualizada de datos políticos utilizando la API de OpenAI.",
    challenge: "Mitigar alucinaciones del modelo de lenguaje y asegurar que las respuestas se mantengan estrictamente dentro de un marco analítico neutral y verídico.",
    solution: "Aplicación de ingeniería de prompts avanzada, capas de moderación automatizada y control de estados de sesión con Flask y Python.",
    results: "Asistente virtual preciso capaz de procesar consultas contextuales complejas de índole sociopolítica.",
    stack: ["Python", "OpenAI API", "Flask", "Frontend"],
    image: "/images/vector.png",
    gallery: [],
    github: "https://github.com/jhon-henao13/chatbot-politica",
    demo: null,
    aosDelay: 500,
  },
];