export const ACADEMIA = {
  nombre: "Academia de Fútbol San Martín",
  nombreCorto: "San Martín",
  slogan: "Forma al Campeón que Llevas Dentro",
  lema: "Veritas Liberabit Vos",
  distrito: "Chorrillos",
  ciudad: "Lima, Perú",
  whatsapp: "+51999999999", // TODO: reemplazar con número real
  whatsappDisplay: "+51 999 999 999", // TODO: reemplazar
  whatsappMessage: "Hola, quiero información sobre la Academia San Martín",
  email: "contacto@academiasanmartin.pe", // TODO: reemplazar
  direccion: "Av. [Pendiente], Chorrillos, Lima", // TODO: reemplazar
  instagram: "academiasanmartin", // TODO: reemplazar (sin @)
  facebook: "academiasanmartin", // TODO: reemplazar
  tiktok: "academiasanmartin", // TODO: reemplazar
  horarioAtencion: "Lunes a Sábado 9:00 AM – 7:00 PM",
  añosFundacion: 2015, // TODO: reemplazar
  totalAlumnos: 200, // TODO: reemplazar
  url: "https://academiasanmartin.pe",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/categorias", label: "Categorías" },
  { href: "/horarios", label: "Horarios" },
  { href: "/sede/chorrillos", label: "Sede" },
  { href: "/precios", label: "Precios" },
  { href: "/noticias", label: "Noticias" },
  { href: "/nosotros", label: "Nosotros" },
] as const;

export const PILARES = [
  {
    titulo: "Entrenadores Certificados",
    descripcion: "Cuerpo técnico con licencias UEFA y FPF. Formación pedagógica, no solo experiencia jugando.",
    icono: "award",
  },
  {
    titulo: "Metodología por Edad",
    descripcion: "Planes de entrenamiento diseñados específicamente para cada etapa de desarrollo del jugador.",
    icono: "book-open",
  },
  {
    titulo: "Grupos Reducidos",
    descripcion: "Máximo 15 alumnos por entrenador. Más atención individual, más progreso.",
    icono: "users",
  },
  {
    titulo: "Infraestructura Segura",
    descripcion: "Canchas equipadas y en óptimas condiciones. Vestuarios y zonas de espera para padres.",
    icono: "shield-check",
  },
  {
    titulo: "Comunicación con Padres",
    descripcion: "Reportes de progreso, grupos de WhatsApp y reuniones periódicas con el cuerpo técnico.",
    icono: "message-circle",
  },
  {
    titulo: "Torneos y Proyección",
    descripcion: "Participación en ligas distritales y torneos inter-academias. Identificación de talentos.",
    icono: "trophy",
  },
] as const;

export const TESTIMONIOS = [
  {
    nombre: "María García",
    rol: "Mamá de Sebastián, 8 años — Fútbol Base",
    texto: "Desde que mi hijo está en San Martín, su disciplina y confianza han mejorado muchísimo. Los entrenadores son increíbles, siempre pendientes del avance de cada niño.",
    estrellas: 5,
    avatarColor: "#3949ab",
  },
  {
    nombre: "Carlos Ramírez",
    rol: "Papá de Luciana, 10 años — Fútbol Femenino",
    texto: "Excelente academia. Mi hija llegó sin saber nada de fútbol y en 6 meses ya está jugando en torneos. El ambiente es muy positivo y los valores que transmiten son invaluables.",
    estrellas: 5,
    avatarColor: "#1a237e",
  },
  {
    nombre: "Roberto Vega",
    rol: "Jugador adulto, 28 años — Categoría Adultos",
    texto: "Vine buscando una academia seria para adultos y encontré exactamente eso. Los entrenamientos son de alta calidad y el nivel del grupo es muy bueno.",
    estrellas: 5,
    avatarColor: "#3949ab",
  },
  {
    nombre: "Ana Torres",
    rol: "Mamá de Diego, 4 años — Baby Fútbol",
    texto: "Mi hijo tiene 4 años y ama los sábados de fútbol. Los coaches saben perfectamente cómo trabajar con los más pequeños. Lo recomiendo al 100%.",
    estrellas: 5,
    avatarColor: "#1a237e",
  },
] as const;

export const LOGROS = [
  { año: 2023, titulo: "Campeones Torneo Distrital Chorrillos", categoria: "Sub-12" },
  { año: 2023, titulo: "Subcampeones Copa Sur", categoria: "Sub-10" },
  { año: 2022, titulo: "1er Lugar Torneo Verano", categoria: "Femenino" },
  { año: 2022, titulo: "Campeones Liga Chorrillos", categoria: "Sub-14" },
  { año: 2021, titulo: "Campeones Copa Independencia", categoria: "Sub-10" },
  { año: 2021, titulo: "3er Lugar Torneo Metropolitano", categoria: "Sub-12" },
] as const; // TODO: reemplazar con logros reales

export const FORMAS_PAGO = ["Efectivo", "Yape", "Plin", "Transferencia bancaria"] as const;
