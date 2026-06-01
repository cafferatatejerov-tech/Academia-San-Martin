export interface Category {
  slug: string;
  nombre: string;
  edadMin: number | null;
  edadMax: number | null;
  edadTexto: string;
  precio: number;
  descripcion: string;
  descripcionLarga: string;
  icono: string;
  color: string;
  horario: string;
  aprenden: string[];
  requisitos: string[];
}

export const CATEGORIAS: Category[] = [
  {
    slug: "baby-futbol",
    nombre: "Baby Fútbol",
    edadMin: 3,
    edadMax: 5,
    edadTexto: "3 – 5 años",
    precio: 120,
    descripcion: "Iniciación lúdica al fútbol para los más pequeños.",
    descripcionLarga:
      "El programa Baby Fútbol está diseñado para introducir a los niños de 3 a 5 años en el mundo del fútbol a través del juego y la diversión. Nuestros coaches especializados en primera infancia crean un ambiente seguro, estimulante y afectivo donde los niños desarrollan sus primeras habilidades motrices y sociales.",
    icono: "baby",
    color: "#1a237e",
    horario: "Sáb y Dom · 4:30 PM – 5:30 PM",
    aprenden: [
      "Coordinación y equilibrio básico",
      "Manejo del balón con ambos pies",
      "Juego en equipo y respeto",
      "Seguimiento de instrucciones simples",
      "Disfrute del deporte",
    ],
    requisitos: [
      "DNI del menor y apoderado",
      "Partida de nacimiento",
      "2 fotos carnet",
      "Ropa deportiva cómoda",
    ],
  },
  {
    slug: "futbol-base",
    nombre: "Fútbol Base",
    edadMin: 6,
    edadMax: 12,
    edadTexto: "6 – 12 años",
    precio: 150,
    descripcion: "Formación técnica y táctica para niños en etapa escolar.",
    descripcionLarga:
      "El programa Fútbol Base es el corazón de nuestra academia. Durante esta etapa crucial, los niños de 6 a 12 años aprenden las bases técnicas y tácticas del fútbol con una metodología progresiva. Trabajamos el control, el pase, el regate y la visión de juego en grupos reducidos para maximizar el aprendizaje individual.",
    icono: "target",
    color: "#1a237e",
    horario: "Sáb y Dom · 4:30 PM – 6:30 PM (según categoría)",
    aprenden: [
      "Técnica individual: control, pase, regate",
      "Conceptos tácticos básicos",
      "Juego posicional",
      "Trabajo en equipo y comunicación",
      "Valores: disciplina, respeto, esfuerzo",
    ],
    requisitos: [
      "DNI del menor y apoderado",
      "Partida de nacimiento",
      "2 fotos carnet",
      "Constancia médica o seguro de salud",
    ],
  },
  {
    slug: "pre-juvenil",
    nombre: "Pre-Juvenil",
    edadMin: 12,
    edadMax: 13,
    edadTexto: "12 – 13 años",
    precio: 150,
    descripcion: "Transición técnico-táctica hacia el fútbol juvenil.",
    descripcionLarga:
      "El programa Pre-Juvenil prepara a los jugadores para el salto al fútbol de mayor exigencia. Con 12 y 13 años, los chicos están en una etapa clave donde la técnica se consolida y la táctica colectiva cobra protagonismo. Entrenamos específicamente para competir en torneos distritales y ligas reguladas.",
    icono: "trending-up",
    color: "#1a237e",
    horario: "Sáb y Dom · 5:30 PM – 6:30 PM",
    aprenden: [
      "Táctica colectiva y sistemas de juego",
      "Técnica avanzada bajo presión",
      "Liderazgo y comunicación",
      "Preparación física específica",
      "Mentalidad competitiva",
    ],
    requisitos: [
      "DNI del menor y apoderado",
      "Partida de nacimiento",
      "2 fotos carnet",
      "Constancia médica o seguro de salud",
    ],
  },
  {
    slug: "juvenil",
    nombre: "Juvenil",
    edadMin: 14,
    edadMax: 17,
    edadTexto: "14 – 17 años",
    precio: 160,
    descripcion: "Alto rendimiento y preparación para el fútbol competitivo.",
    descripcionLarga:
      "El programa Juvenil está orientado a jóvenes de 14 a 17 años con ambiciones competitivas. La metodología integra preparación física especializada, táctica avanzada y desarrollo mental. Participamos en ligas juveniles de Lima y realizamos seguimiento personalizado del progreso de cada jugador.",
    icono: "zap",
    color: "#1a237e",
    horario: "Sáb y Dom · 6:30 PM – 7:30 PM",
    aprenden: [
      "Sistemas tácticos avanzados",
      "Preparación física de alto rendimiento",
      "Toma de decisiones bajo presión",
      "Análisis de video del propio rendimiento",
      "Proyección hacia el fútbol amateur/profesional",
    ],
    requisitos: [
      "DNI del menor y apoderado",
      "2 fotos carnet",
      "Constancia médica apta para deporte",
      "Seguro de salud vigente",
    ],
  },
  {
    slug: "adultos",
    nombre: "Adultos / Amateur",
    edadMin: 18,
    edadMax: null,
    edadTexto: "18+ años",
    precio: 180,
    descripcion: "Fútbol de calidad para adultos que aman el deporte.",
    descripcionLarga:
      "El programa Adultos está diseñado para mayores de 18 años que quieren jugar fútbol con estructura y calidad. Ya sea que busques mejorar tu nivel técnico, mantenerte en forma o simplemente disfrutar del fútbol en un ambiente serio y amistoso, esta categoría es para ti.",
    icono: "user",
    color: "#1a237e",
    horario: "Sáb y Dom · 7:30 PM – 8:30 PM", // TODO: confirmar horario
    aprenden: [
      "Técnica y táctica individual",
      "Juego posicional y colectivo",
      "Preparación física adaptada",
      "Participación en torneos amateur",
      "Disfrute y salud a través del fútbol",
    ],
    requisitos: [
      "DNI vigente",
      "2 fotos carnet",
      "Apto médico para actividad deportiva",
    ],
  },
  {
    slug: "arqueros",
    nombre: "Escuela de Arqueros",
    edadMin: null,
    edadMax: null,
    edadTexto: "Todas las edades",
    precio: 160,
    descripcion: "Formación especializada para porteros de todas las edades.",
    descripcionLarga:
      "La Escuela de Arqueros es un programa especializado para jugadores que quieren dominar la posición de portero. Con entrenadores especializados en la posición, trabajamos técnica de manos, posicionamiento, salidas, saques y la parte mental que exige ser el último hombre del equipo.",
    icono: "shield",
    color: "#1a237e",
    horario: "Sáb y Dom (horario según edad del portero)",
    aprenden: [
      "Técnica de manos y posicionamiento",
      "Salidas y cobertura de espacios",
      "Saques con pie y mano",
      "Juego con el pie (GK moderno)",
      "Mentalidad y concentración",
    ],
    requisitos: [
      "DNI del jugador (y apoderado si es menor)",
      "2 fotos carnet",
      "Constancia médica o seguro de salud",
      "Guantes de portero propios (opcional)",
    ],
  },
  {
    slug: "femenino",
    nombre: "Fútbol Femenino",
    edadMin: null,
    edadMax: null,
    edadTexto: "Todas las edades",
    precio: 130,
    descripcion: "Empoderamiento y técnica para jugadoras de todas las edades.",
    descripcionLarga:
      "El programa de Fútbol Femenino de Academia San Martín está comprometido con el desarrollo de las jugadoras en un ambiente inclusivo, respetuoso y de alta calidad técnica. Formamos jugadoras competitivas y personas íntegras, apoyando el crecimiento del fútbol femenino en Chorrillos y Lima.",
    icono: "heart",
    color: "#1a237e",
    horario: "Sáb y Dom · 4:30 PM – 5:30 PM",
    aprenden: [
      "Técnica individual y colectiva",
      "Táctica y sistemas de juego",
      "Preparación física adaptada",
      "Confianza y liderazgo",
      "Participación en torneos femeninos",
    ],
    requisitos: [
      "DNI de la jugadora (y apoderado si es menor)",
      "2 fotos carnet",
      "Constancia médica o seguro de salud",
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIAS.find((c) => c.slug === slug);
}
