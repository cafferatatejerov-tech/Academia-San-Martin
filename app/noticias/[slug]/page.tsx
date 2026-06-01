import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

const ARTICULOS: Record<
  string,
  { titulo: string; resumen: string; fecha: string; categoria: string; imagen: string; contenido: string }
> = {
  "edad-empezar-academia-futbol": {
    titulo: "¿A qué edad pueden empezar los niños en una academia de fútbol?",
    resumen: "Muchos padres se preguntan cuándo es el momento ideal para comenzar. Te explicamos todo.",
    fecha: "15 Enero 2026",
    categoria: "Tips de Fútbol",
    imagen: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1200&q=80",
    contenido: `Los expertos en desarrollo infantil coinciden en que **a partir de los 3 años**, los niños ya pueden participar en actividades futbolísticas estructuradas, siempre que estén adaptadas a su nivel de desarrollo motor y cognitivo.

**Baby Fútbol (3–5 años):** En esta etapa, el objetivo no es enseñar fútbol técnico, sino desarrollar habilidades motrices básicas a través del juego. Correr, saltar, equilibrarse y coordinar son las bases. En Academia San Martín, nuestro programa Baby Fútbol usa dinámicas lúdicas que hacen que los niños aprendan sin darse cuenta.

**Fútbol Base (6–12 años):** Esta es la etapa dorada del aprendizaje técnico. El cerebro del niño está en su momento óptimo para adquirir patrones de movimiento. Es cuando se forma el "control natural" del balón.

**¿Qué dicen los especialistas?** La FPF (Federación Peruana de Fútbol) recomienda que el fútbol formativo comience con actividades de iniciación entre los 3 y 5 años, sin presión competitiva.

En resumen: **cuanto antes empiece, mejor** — siempre con una metodología adecuada para su edad.`,
  },
  "vacaciones-utiles-2026-futbol-chorrillos": {
    titulo: "Vacaciones útiles 2026: fútbol para niños en Chorrillos",
    resumen: "Este verano 2026 tu hijo puede aprender fútbol con los mejores coaches de Chorrillos.",
    fecha: "10 Enero 2026",
    categoria: "Vacaciones Útiles",
    imagen: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    contenido: `Las vacaciones útiles de verano (diciembre–febrero) son una de las épocas más populares para que los niños de Lima prueben nuevas actividades deportivas. El fútbol sigue siendo el deporte número 1 en Perú.

**¿Por qué Academia San Martín para las vacaciones útiles?**

- Entrenadores certificados FPF disponibles sábados y domingos
- Grupos reducidos para mayor atención individual
- Instalaciones en Chorrillos, accesibles desde Barranco, Surco y San Juan de Miraflores
- Precios transparentes publicados en nuestra web

**Categorías disponibles en verano 2026:**
Baby Fútbol · Fútbol Base · Pre-Juvenil · Juvenil · Femenino · Adultos · Arqueros

**Inscripciones abiertas.** Los cupos son limitados — reserva el tuyo hoy.`,
  },
  "como-elegir-academia-futbol-lima": {
    titulo: "Cómo elegir la mejor academia de fútbol para tu hijo en Lima",
    resumen: "Guía completa para padres: qué preguntar, qué observar y qué señales revelan si una academia es realmente profesional.",
    fecha: "5 Enero 2026",
    categoria: "Tips de Fútbol",
    imagen: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",
    contenido: `Elegir una academia de fútbol para tu hijo es casi como elegir un colegio: la calidad del entrenador, el ambiente y los valores que transmiten importan tanto como la técnica que enseñan.

**7 cosas que debes verificar antes de inscribir a tu hijo:**

1. **Credenciales del entrenador:** ¿Tiene licencia FPF o UEFA? ¿Tiene formación en trabajo con niños?
2. **Ratio alumnos/entrenador:** Más de 20 niños por entrenador es señal de mala atención.
3. **Metodología por edad:** Un programa para un niño de 4 años debe ser diferente al de uno de 12.
4. **Transparencia en precios:** Si no publican sus precios, algo ocultan.
5. **Comunicación con padres:** ¿Te informarán del progreso de tu hijo?
6. **Instalaciones:** ¿Son seguras? ¿Tienen área de espera para padres?
7. **Referencias:** Habla con otros padres antes de inscribir.

En Academia San Martín cumplimos con los 7 puntos. Puedes venir a conocernos sin compromiso.`,
  },
  "beneficios-futbol-desarrollo-ninos": {
    titulo: "Beneficios del fútbol en el desarrollo de los niños",
    resumen: "El fútbol va más allá del deporte. Descubre cómo mejora la disciplina y las habilidades sociales.",
    fecha: "28 Diciembre 2025",
    categoria: "Tips de Fútbol",
    imagen: "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=1200&q=80",
    contenido: `El fútbol no es solo un deporte: es una herramienta de desarrollo integral para los niños. Varios estudios respaldan sus beneficios a nivel físico, cognitivo y emocional.

**Beneficios físicos:** Mejora la coordinación motriz, el equilibrio, la resistencia cardiovascular y la fuerza muscular de manera apropiada para cada edad.

**Beneficios cognitivos:** El fútbol requiere tomar decisiones rápidas, leer el espacio y anticipar movimientos. Esto estimula las funciones ejecutivas del cerebro.

**Beneficios emocionales y sociales:** Aprender a ganar y perder con respeto, trabajar en equipo, comunicarse bajo presión y respetar la autoridad del entrenador son lecciones que van mucho más allá de la cancha.

**Disciplina y responsabilidad:** La rutina de entrenamiento semanal ayuda a los niños a estructurar su tiempo y desarrollar el hábito del esfuerzo continuo.

En Academia San Martín, nuestro objetivo no es solo formar buenos futbolistas — es formar buenas personas.`,
  },
  "metodologia-entrenamiento-san-martin": {
    titulo: "Academia San Martín: nuestra metodología de entrenamiento por edades",
    resumen: "Conócenos por dentro: cómo estructuramos el entrenamiento según la edad del jugador.",
    fecha: "20 Diciembre 2025",
    categoria: "Tips de Fútbol",
    imagen: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?auto=format&fit=crop&w=1200&q=80",
    contenido: `En Academia San Martín no usamos un programa genérico para todos. Nuestra metodología está diseñada específicamente para cada etapa del desarrollo del jugador, siguiendo las directrices de la FPF y referentes europeos.

**3–5 años (Baby Fútbol):** Juego libre estructurado. El objetivo es el disfrute y el desarrollo motor básico. Ningún resultado de partido importa más que una sonrisa al final del entrenamiento.

**6–12 años (Fútbol Base):** Técnica individual progresiva. Comenzamos con el control del balón, el pase y el regate. A medida que crecen, introducimos conceptos tácticos simples y el juego en equipos reducidos.

**12–17 años (Pre-Juvenil y Juvenil):** Táctica colectiva y preparación física específica. En esta etapa, trabajamos sistemas de juego, salidas desde atrás y la parte mental de la competición.

**18+ años (Adultos):** Programa mixto de técnica, táctica y preparación física adaptada al nivel y objetivos de cada jugador.

Todos nuestros entrenadores siguen el mismo marco metodológico y tienen formación continua. Eso garantiza que el progreso de tu hijo sea constante, incluso si cambia de categoría.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(ARTICULOS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const art = ARTICULOS[slug];
  if (!art) return {};
  return buildMetadata({
    title: `${art.titulo} | Academia San Martín`,
    description: art.resumen,
    path: `/noticias/${slug}`,
    image: art.imagen,
  });
}

export default async function ArticuloPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const art = ARTICULOS[slug];
  if (!art) notFound();

  return (
    <div style={{ paddingTop: "72px" }}>
      {/* Hero image */}
      <div
        style={{
          height: "400px",
          backgroundImage: `url(${art.imagen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
        role="img"
        aria-label={art.titulo}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(10,15,30,0.3) 0%, rgba(10,15,30,0.9) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "2rem 1.5rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <Link href="/noticias" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#8899bb", textDecoration: "none", fontSize: "0.9rem", marginBottom: "1rem" }}>
            <ArrowLeft size={16} aria-hidden="true" /> Todas las noticias
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span
              style={{
                backgroundColor: "rgba(57, 73, 171, 0.5)",
                color: "#8899bb",
                padding: "3px 10px",
                borderRadius: "100px",
                fontSize: "0.75rem",
                fontWeight: 700,
                backdropFilter: "blur(8px)",
              }}
            >
              {art.categoria}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#8899bb", fontSize: "0.78rem" }}>
              <Calendar size={12} aria-hidden="true" />
              {art.fecha}
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-raleway)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            {art.titulo}
          </h1>
        </div>
      </div>

      {/* Content */}
      <section style={{ padding: "4rem 1.5rem", backgroundColor: "#0a0f1e" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div
            style={{
              color: "#d4deff",
              fontSize: "1.05rem",
              lineHeight: 1.85,
            }}
          >
            {art.contenido.split("\n\n").map((paragraph, i) => (
              <p key={i} style={{ marginBottom: "1.5rem" }} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
            ))}
          </div>

          <div
            style={{
              marginTop: "3rem",
              padding: "2rem",
              backgroundColor: "#0f1a2e",
              border: "1px solid #1e2d4a",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <p style={{ fontFamily: "var(--font-raleway)", fontSize: "1.3rem", fontWeight: 600, color: "#ffffff", margin: "0 0 0.5rem" }}>
              ¿Te interesa inscribir a tu hijo?
            </p>
            <p style={{ color: "#8899bb", fontSize: "0.9rem", margin: "0 0 1.5rem" }}>
              Cupos limitados. Inscripciones abiertas para el verano 2026.
            </p>
            <Link
              href="/inscribete"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#1a237e",
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1rem",
                border: "2px solid #3949ab",
                minHeight: "52px",
              }}
            >
              Inscribirme ahora <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
