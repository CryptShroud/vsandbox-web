export type Village = { slug: string; name: string; icon: string; desc: string; activities: string[]; level: string };

export const VILLAGES: Village[] = [
  { slug: "lockpick", name: "Lockpick", icon: "key", desc: "Ganzúas, candados y seguridad física. Toca, siente, abre.", activities: ["Taller de ganzúas 101", "Práctica libre por niveles", "Reto del candado negro"], level: "Todos los niveles" },
  { slug: "hardware", name: "Hardware Hacking", icon: "cpu", desc: "Soldadura, UART, JTAG y extracción de firmware con tus propias manos.", activities: ["Suelda tu primer badge", "Cacería de UART", "Carrera de dump de firmware"], level: "Intermedio" },
  { slug: "recon", name: "Recon & OSINT", icon: "radar", desc: "Inteligencia de fuentes abiertas competitiva: encuentra lo que no quiere ser encontrado.", activities: ["CTF de persona desaparecida", "Dorks en vivo", "Geolocalización hacker"], level: "Todos los niveles" },
  { slug: "blue", name: "Blue Team", icon: "shield", desc: "Defiende una red en tiempo real: detección, respuesta y forense.", activities: ["SOC en vivo", "Defensa contra phishing", "Forense relámpago"], level: "Intermedio" },
  { slug: "crypto", name: "Crypto & Privacy", icon: "lock", desc: "Cifrado, PGP, privacidad operativa y criptografía aplicada.", activities: ["Key-signing party", "Retos de cripto", "Clínica de OPSEC"], level: "Todos los niveles" },
  { slug: "social", name: "Social Engineering", icon: "eye", desc: "El arte del engaño autorizado: pretextos, vishing y concienciación.", activities: ["Concurso de vishing", "Pretextos 101", "Badge check"], level: "Avanzado" },
];

export type Tier = { name: string; price: string; highlight?: boolean; perks: string[] };

export const SPONSOR_TIERS: Tier[] = [
  { name: "Bronce", price: "$250", perks: ["Logo en la web y en pantallas del evento", "Mención en redes y en el grupo", "2 pases para el equipo"] },
  { name: "Plata", price: "$800", perks: ["Todo lo de Bronce", "Stand en la zona de villages", "Post dedicado y 5 pases", "Material en el kit de bienvenida"] },
  { name: "Oro", price: "$2.500", highlight: true, perks: ["Todo lo de Plata", "Slot de charla o keynote", "Logo en el badge oficial", "Acceso a la bolsa de talento", "Naming de un reto del CTF"] },
];

export const FAQS: [string, string][] = [
  ["¿Necesito saber programar o ser experto?", "No. Vienen estudiantes, curiosos y profesionales. Las charlas y villages tienen contenido para todos los niveles y siempre hay alguien dispuesto a explicarte."],
  ["¿Cuánto cuesta participar?", "Los meetups, villages, CTFs y el grupo de la comunidad son gratuitos. Si algún taller especial tiene costo, se anuncia con anticipación."],
  ["¿Qué debo llevar a un evento?", "Tu laptop con una máquina virtual (Kali, Parrot o la distro que prefieras) si quieres jugar el CTF. Para charlas y networking solo necesitas ganas."],
  ["¿Cómo me entero de los próximos eventos?", "Todo se anuncia primero en el grupo de WhatsApp de la comunidad. También publicamos cada evento en esta web."],
  ["¿Puedo dar una charla?", "Sí. Durante el Call for Papers recibimos propuestas; fuera de esa ventana escríbenos con tu tema. Damos mentoría a quienes dan su primera charla."],
  ["¿Mi empresa puede patrocinar?", "Claro. Tenemos paquetes Bronce, Plata y Oro, y armamos propuestas a medida. Revisa la página de patrocinadores."],
  ["¿Las actividades son legales?", "100 %. Solo atacamos laboratorios propios e infraestructura con autorización explícita. Cualquier actividad maliciosa significa expulsión inmediata."],
];

export const CTF_RULES: [string, string][] = [
  ["Equipos de 1 a 4", "Sin compartir flags ni pistas entre equipos."],
  ["La infraestructura no es un reto", "Nada de DoS ni ataques a la plataforma del CTF. Atacarla supone descalificación."],
  ["Sin fuerza bruta masiva", "Ningún reto requiere tumbar servicios compartidos. Si lo necesitas, vas por mal camino."],
  ["Writeups después del cierre", "Publica tus soluciones solo cuando termine la competencia."],
  ["Juego limpio y buena onda", "Ayuda a quien empieza. El rage-quit está permitido; el rage-chat no."],
];

export const CODE_OF_CONDUCT: [string, string][] = [
  ["Solo objetivos autorizados", "Labs, CTFs y programas de bug bounty con alcance claro. Nunca sistemas de terceros sin permiso."],
  ["Cero acoso", "No toleramos acoso, doxing ni discriminación de ningún tipo. Una ofensa grave significa expulsión."],
  ["Conocimiento, no malware", "Compartimos técnicas para aprender y defender, nunca herramientas para dañar."],
  ["Respeta los spoilers", "Marca como spoiler las soluciones de retos activos durante al menos 7 días."],
  ["Da crédito", "Cita los writeups, herramientas e investigaciones en las que te apoyas."],
  ["Cuida a la comunidad", "Si ves algo que no está bien, repórtalo. Tratamos cada caso con confidencialidad."],
];

export const VALUES: [string, string, string][] = [
  ["Aprende en público", "Comparte writeups y pregunta sin miedo. Aquí nadie nace root.", "book"],
  ["Hackea con ética", "Solo labs y objetivos autorizados. El daño real significa ban permanente.", "shield"],
  ["Levanta a otros", "Mentorea, revisa CVs y comparte lo que sabes. La comunidad sube junta.", "users"],
  ["Curiosidad radical", "Rompe, entiende y documenta. El porqué vale más que la flag.", "sparkles"],
];

/* Ruta de participación: cómo crece alguien dentro de la comunidad. */
export const PATH: { step: string; title: string; desc: string }[] = [
  { step: "01", title: "Asistente", desc: "Entras al grupo, vienes a tu primer meetup o edición y conoces a la gente." },
  { step: "02", title: "Jugador CTF", desc: "Formas o te unes a un equipo y capturas tus primeras flags." },
  { step: "03", title: "Voluntario", desc: "Ayudas en registro, villages o infraestructura. Así se ve el evento por dentro." },
  { step: "04", title: "Ponente", desc: "Subes al escenario con una charla o demo. Te acompañamos con mentoría." },
  { step: "05", title: "Líder de village", desc: "Diseñas y operas tu propia zona temática en un evento." },
  { step: "06", title: "Core team", desc: "Organizas las ediciones y defines el rumbo de la comunidad." },
];

export const PROJECT_IDEAS: { name: string; desc: string; stack: string; icon: string }[] = [
  { name: "Plataforma CTF propia", desc: "Infraestructura de retos reutilizable para las ediciones y los meetups.", stack: "Docker · Python", icon: "flag" },
  { name: "Labs efímeros", desc: "Entornos vulnerables que se levantan y destruyen bajo demanda para practicar.", stack: "Docker · Terraform", icon: "terminal" },
  { name: "Writeups en español", desc: "Archivo abierto de soluciones de los CTFs de la comunidad.", stack: "Markdown", icon: "book" },
  { name: "Badge electrónico", desc: "Un badge de hardware hackeable para el próximo main event.", stack: "C · KiCad", icon: "cpu" },
];

export const TRACKS = ["Web hacking", "Red Team / Ofensiva", "Blue Team / Defensa", "OSINT & Recon", "Hardware & RF", "Cripto & Privacidad", "Carrera & Comunidad"];
