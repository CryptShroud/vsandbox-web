export type Speaker = { name: string; role: string; bio: string; img: string };
export type Photo = { src: string; cap: string; cat: string; w: number; h: number };
export type AgendaItem = { time: string; title: string; desc: string };
export type Stat = { value: number; suffix?: string; label: string };
export type Img = { src: string; alt: string; w: number; h: number };

/* Edición presencial de V-SandBox (evento grande) */
export type Edition = {
  kind: "edition";
  slug: string;
  number: string;
  name: string;
  codename: string;
  start: string; // ISO con zona horaria
  dateLabel: string;
  timeLabel: string;
  venue: string;
  address: string;
  summary: string;
  lead: string;
  recap: string[];
  closing: string;
  stats: Stat[];
  agenda: AgendaItem[];
  speakers: Speaker[];
  photos: Photo[];
  cover: Img;
  ctf?: { title: string; desc: string; phases: string[]; prizes?: string; poster?: Img };
};

/* Meetup virtual o evento en comunidad (con aliados, o laboratorio práctico) */
export type CommunityEvent = {
  kind: "meetup" | "collab" | "lab";
  slug: string;
  series: string; // "Virtual Meetup 04", "AWS Community Day"…
  title: string;
  start?: string;
  dateLabel?: string;
  timeLabel?: string;
  mode: string;
  venue?: string;
  speaker?: string;
  summary: string;
  body: string[];
  highlights?: string[];
  poster?: Img;
  cover: Img;
  photos: Photo[];
  partners?: string[];
};

export type AnyEvent = Edition | CommunityEvent;

const E00 = "/eventos/edicion-00";
const E01 = "/eventos/edicion-01";
const FELIPE = `${E00}/speakers/felipe-grados.png`;

export const EDITIONS: Edition[] = [
  {
    kind: "edition",
    slug: "edicion-01",
    number: "01",
    name: "V-SANDBOX 01",
    codename: "Persistence & Privilege Escalation",
    start: "2026-07-24T16:00:00-05:00",
    dateLabel: "Viernes 24 de julio de 2026",
    timeLabel: "16:00 – 20:00",
    venue: "Edificio CIESPAL",
    address: "Av. Diego de Almagro N32-133, Quito",
    summary: "Cinco ponentes, una operación CTF de ~2 horas y el brutalismo del CIESPAL lleno de operadores.",
    lead: "La edición donde la comunidad pasó del acceso inicial a root y persistencia.",
    recap: [
      "La segunda edición de V-SandBox llegó al mítico Edificio CIESPAL, «La Casa de Tarzán», y la comunidad respondió. Un viernes por la tarde, el brutalismo quiteño se llenó de operadores listos para romper el siguiente nivel.",
      "Cinco charlas: hacking móvil con iOS, Android y Frida; el eslabón olvidado de SNMP a Domain Controller; la ruta de un HackTheBox Guru #1 de Ecuador; la nueva ley de ciberseguridad y su impacto en la profesión; y el cierre del fundador con privilege escalation.",
      "En paralelo, la Operación CTF «Pwn or Die» desplegó su infraestructura: un objetivo corporativo con exposición web, secretos mal guardados, el abuso del «Demonio Guardián» (MySQL/UDF) y una misión final para asegurar persistencia.",
    ],
    closing: "Access granted. Position secured. La comunidad sigue operando.",
    stats: [
      { value: 5, label: "Ponentes" },
      { value: 2, suffix: "h", label: "Operación CTF" },
      { value: 4, label: "Fases de la misión" },
      { value: 8, label: "Bloques de agenda" },
    ],
    agenda: [
      { time: "16:00", title: "Apertura y registro", desc: "Check-in, networking inicial y entrega de credenciales." },
      { time: "16:20", title: "Keynote: el hacking en Ecuador", desc: "Charla inaugural de la comunidad V-SandBox." },
      { time: "16:45", title: "Bloque A · Ofensiva", desc: "Ataques a Active Directory y glitching de microcontroladores." },
      { time: "17:40", title: "Lanzamiento del CTF", desc: "Las escuadras compiten en tiempo real." },
      { time: "18:15", title: "Bloque B · Defensa y DevSecOps", desc: "Threat hunting y pipelines seguros." },
      { time: "19:10", title: "Cierre del CTF y premiación", desc: "Top operadores y entrega de reconocimientos." },
      { time: "19:30", title: "Networking", desc: "Conexiones, mentoría y comunidad." },
      { time: "20:00", title: "Fin del bloque operativo", desc: "system halt — see you next deploy." },
    ],
    speakers: [
      { name: "Jaime Ramírez", role: "Cybersecurity Researcher", img: `${E01}/speakers/jaime-ramirez.jpeg`, bio: "Hacking Mobile 101: introducción al pentesting móvil con iOS, Android y Frida." },
      { name: "Esteban Jiménez", role: "HackTheBox Guru · #1 Ecuador", img: `${E01}/speakers/esteban-jimenez.jpg`, bio: "De HTB a la trinchera: cómo escalar en la plataforma y lo que aprendió en el camino hacia el Red Team." },
      { name: "Galo Candela", role: "Lead Analyst AppSec · NTT DATA", img: `${E01}/speakers/galo-candela.png`, bio: "El eslabón olvidado: de SNMP a Domain Controller. Threat modeling y la cadena de ataque que nadie mira." },
      { name: "Felipe Grados", role: "Founder V-SandBox · CEO Vultaethel", img: FELIPE, bio: "Privilege escalation: del acceso inicial a root. El fundador cerrando la operación." },
      { name: "Darío Portero", role: "Abogado · Ciberderecho", img: `${E01}/speakers/dario-portero.png`, bio: "Ley de Ciberseguridad 2026: qué cambia para los profesionales y por qué el marco legal importa." },
    ],
    photos: [
      { src: `${E01}/gallery/DSC07908.jpg`, cap: "Foto oficial: la comunidad completa", cat: "Networking", w: 1600, h: 1067 },
      { src: `${E01}/gallery/evento01-02.jpeg`, cap: "Operación en curso en el CIESPAL", cat: "CTF", w: 1358, h: 905 },
      { src: `${E01}/gallery/DSC07199.jpg`, cap: "Ponencia frente al main stage", cat: "Ponentes", w: 1600, h: 1067 },
      { src: `${E01}/gallery/evento01-03.jpeg`, cap: "IEEE Computer Society UIDE en la Edición 01", cat: "Networking", w: 1204, h: 1600 },
      { src: `${E01}/gallery/DSC07479-HDR.jpg`, cap: "Audiencia atenta en el CIESPAL", cat: "Escenario", w: 1600, h: 1067 },
      { src: `${E01}/gallery/DSC07164-2.jpg`, cap: "Operador en plena faena", cat: "CTF", w: 1600, h: 1067 },
      { src: `${E01}/gallery/DSC07259-2.jpg`, cap: "Q&A con la comunidad", cat: "Ponentes", w: 1600, h: 1067 },
      { src: `${E01}/gallery/evento01-01.jpeg`, cap: "Póster oficial de la Edición 01", cat: "Escenario", w: 1000, h: 1000 },
      { src: `${E01}/gallery/DSC07302.jpg`, cap: "Mesas de trabajo durante la operación", cat: "CTF", w: 1600, h: 1067 },
      { src: `${E01}/gallery/DSC07501.jpg`, cap: "Keynote: aprende, practica, protege", cat: "Ponentes", w: 1600, h: 1067 },
      { src: `${E01}/gallery/DSC07858-2.jpg`, cap: "Speaker en modo chill", cat: "Ponentes", w: 1600, h: 1067 },
      { src: `${E01}/gallery/evento01-04.jpeg`, cap: "Cierre del bloque operativo", cat: "Networking", w: 1280, h: 960 },
      { src: `${E01}/gallery/DSC07916-2.jpg`, cap: "IEEE UIDE presente en la operación", cat: "Networking", w: 1600, h: 1067 },
    ],
    cover: { src: `${E01}/gallery/evento01-02.jpeg`, alt: "Operación CTF en curso en el Edificio CIESPAL", w: 1358, h: 905 },
    ctf: {
      title: "Pwn or Die",
      desc: "La Operación CTF: un objetivo corporativo simulado, de la superficie web a la persistencia.",
      poster: { src: `${E01}/pwn-or-die.jpg`, alt: "Afiche de OffSec × V-SandBox: premios para el Pwn or Die", w: 865, h: 812 },
      phases: ["Exposición web", "Secretos mal guardados", "El «Demonio Guardián» (MySQL/UDF)", "Persistencia"],
      prizes: "3 suscripciones de 1 año a OffSec Proving Grounds Practice y pases al RED LAB",
    },
  },
  {
    kind: "edition",
    slug: "edicion-00",
    number: "00",
    name: "V-SANDBOX 00",
    codename: "Initial Access",
    start: "2026-04-24T17:00:00-05:00",
    dateLabel: "Viernes 24 de abril de 2026",
    timeLabel: "17:00 – 20:30",
    venue: "Quito, Ecuador",
    address: "Main Stage / Workshops",
    summary: "Más de 100 asistentes, 5 ponentes, ransomware en vivo sobre hardware real, CTF y networking.",
    lead: "La primera edición. La noche en que empezó el movimiento.",
    recap: [
      "La primera edición de V-SandBox marcó el inicio de un movimiento. Un viernes por la noche reunimos en Quito a más de un centenar de hackers, estudiantes, pentesters e investigadores: sin teoría vacía, solo gente que rompe cosas de verdad.",
      "Charlas técnicas que fueron desde auditar plugins de WordPress para conseguir tu primer CVE hasta cuánto tardaría realmente romper la criptografía actual, una demostración de ransomware en vivo sobre hardware físico y un cierre con CTF competitivo y networking.",
    ],
    closing: "Esto fue solo el Initial Access.",
    stats: [
      { value: 100, suffix: "+", label: "Asistentes" },
      { value: 5, label: "Ponentes" },
      { value: 1, label: "Ransomware en vivo" },
      { value: 1, label: "CTF competitivo" },
    ],
    agenda: [
      { time: "17:00", title: "Apertura oficial", desc: "Presentación del evento, la comunidad y lo que viene." },
      { time: "17:15", title: "Bloque de ponentes", desc: "Hacking, defensa, vulnerabilidades y casos reales de la industria." },
      { time: "18:30", title: "Ransomware en vivo", desc: "Ejecución real sobre hardware físico en un entorno controlado: cifrado, propagación y persistencia." },
      { time: "18:50", title: "CTF y networking", desc: "Capture The Flag en vivo y networking con la comunidad." },
      { time: "20:15", title: "Cierre oficial", desc: "Reconocimientos, palabras finales y despedida." },
    ],
    speakers: [
      { name: "Daniel Troya", role: "Investigación en ciberseguridad", img: `${E00}/speakers/daniel-troya.png`, bio: "Estudiante de Ciencias Computacionales con enfoque en investigación científica aplicada a la ciberseguridad." },
      { name: "Nakleh Said Zeidan", role: "AppSec · 10 CVEs", img: `${E00}/speakers/said.png`, bio: "Especialista en AppSec con 10 CVEs documentados y múltiples vulnerabilidades críticas reportadas." },
      { name: "Jacob Pérez", role: "Seguridad inalámbrica", img: `${E00}/speakers/jacob-peres.png`, bio: "Evaluación de la seguridad de redes inalámbricas para identificar vulnerabilidades explotables." },
      { name: "Esteban Cárdenas", role: "Ethical hacking y privacidad", img: `${E00}/speakers/esteban-cardenas.png`, bio: "El ethical hacking como consecuencia de la necesidad de proteger los datos personales." },
      { name: "Felipe Grados", role: "Founder V-SandBox · CEO Vultaethel", img: FELIPE, bio: "Live ransomware en hardware real." },
    ],
    photos: [
      { src: `${E00}/gallery/1777301966688.jpeg`, cap: "Sala llena durante la apertura", cat: "Escenario", w: 1000, h: 1000 },
      { src: `${E00}/gallery/1777304704921.jpeg`, cap: "«Auditando plugins de WordPress para tu primer CVE»", cat: "Ponentes", w: 1600, h: 1066 },
      { src: `${E00}/gallery/1777304708462.jpeg`, cap: "CTF Pass oficial de la Edición 00", cat: "CTF", w: 1280, h: 2282 },
      { src: `${E00}/gallery/1777301965191.jpeg`, cap: "Audiencia atenta durante las charlas", cat: "Escenario", w: 1000, h: 1000 },
      { src: `${E00}/gallery/1777305682979.jpeg`, cap: "«¿Cuánto tardaría romper la criptografía actual?»", cat: "Ponentes", w: 1000, h: 1000 },
      { src: `${E00}/gallery/1777304705484.jpeg`, cap: "Equipos compitiendo en el CTF", cat: "CTF", w: 1600, h: 1066 },
      { src: `${E00}/gallery/1777305247462.jpeg`, cap: "Ponente en escenario", cat: "Ponentes", w: 1000, h: 1000 },
      { src: `${E00}/gallery/1777301967171.jpeg`, cap: "CTF en vivo: mesas de operadores", cat: "CTF", w: 1000, h: 1000 },
      { src: `${E00}/gallery/1777306249722.jpeg`, cap: "Energía en el escenario", cat: "Escenario", w: 1000, h: 1000 },
      { src: `${E00}/gallery/1777305683293.jpeg`, cap: "De hackers para hackers", cat: "Ponentes", w: 1000, h: 1000 },
      { src: `${E00}/gallery/1777301968016.jpeg`, cap: "Squad de CTF con WiFi Pineapple en la mesa", cat: "CTF", w: 1000, h: 1000 },
      { src: `${E00}/gallery/1777306249763.jpeg`, cap: "Q&A con la comunidad", cat: "Escenario", w: 1000, h: 1000 },
      { src: `${E00}/gallery/1777301967730.jpeg`, cap: "Networking y coffee break", cat: "Networking", w: 1000, h: 1000 },
    ],
    cover: { src: `${E00}/gallery/1777301968016.jpeg`, alt: "Squad de CTF de la Edición 00", w: 1000, h: 1000 },
    ctf: {
      title: "CTF Initial Access",
      desc: "El primer CTF presencial de la comunidad, en paralelo al networking de cierre.",
      phases: ["Reconocimiento", "Explotación", "Captura de flags"],
    },
  },
];


const M = "/eventos";

export const MEETUPS: CommunityEvent[] = [
  {
    kind: "meetup",
    slug: "meetup-04",
    series: "Virtual Meetup 04",
    title: "Herramientas de autogestión para la ingeniería social",
    start: "2026-10-01T19:00:00-05:00",
    dateLabel: "Jueves 1 de octubre de 2026",
    timeLabel: "19:00 – 20:00",
    mode: "Online",
    speaker: "Jorge Sánchez Freire",
    summary: "Cómo armar tu propio kit de ingeniería social: de los principios psicológicos a las herramientas de ataque.",
    body: [
      "Jorge Sánchez Freire recorrió los fundamentos de la ingeniería social (phishing, pretexting, baiting) y cómo construir un kit propio y autogestionado para ejercicios de concienciación y red team.",
      "Hubo demos técnicas con USB Rubber Ducky, consulta de brechas con Have I Been Pwned y un espacio de preguntas con la comunidad.",
    ],
    highlights: ["Fundamentos de ingeniería social", "Demo con USB Rubber Ducky", "Have I Been Pwned", "Threat awareness"],
    poster: { src: `${M}/meetup-04/poster.jpg`, alt: "Afiche del Virtual Meetup 04 con Jorge Sánchez Freire", w: 1000, h: 1000 },
    cover: { src: `${M}/meetup-04/poster.jpg`, alt: "Afiche del Virtual Meetup 04", w: 1000, h: 1000 },
    photos: [
      { src: `${M}/meetup-04/recap.jpg`, cap: "Resumen oficial del Virtual Meetup 04", cat: "Recap", w: 1080, h: 1064 },
      { src: `${M}/meetup-04/slide-rubber-ducky.jpg`, cap: "USB Rubber Ducky como herramienta de ataque", cat: "Charla", w: 1080, h: 1087 },
      { src: `${M}/meetup-04/sesion-1.jpg`, cap: "El invitado explicando en vivo", cat: "Charla", w: 1080, h: 1060 },
      { src: `${M}/meetup-04/sesion-2.jpg`, cap: "La comunidad conectada en la sesión", cat: "Comunidad", w: 1080, h: 1073 },
    ],
    partners: ["Vultaethel"],
  },
  {
    kind: "meetup",
    slug: "meetup-03",
    series: "Virtual Meetup 03",
    title: "Red Team: pentesting de LLMs y agentes IA",
    start: "2026-08-06T19:00:00-05:00",
    dateLabel: "Jueves 6 de agosto de 2026",
    timeLabel: "19:00 – 20:00",
    mode: "Online · Zoom",
    speaker: "Said Zeidan",
    summary: "Explorando el OWASP Top 10 para LLM: cómo se ataca y cómo se defiende una aplicación con IA.",
    body: [
      "Said Zeidan, especialista AppSec y ponente de la Edición 00, llevó al meetup el pentesting de modelos de lenguaje y agentes de IA, siguiendo el OWASP Top 10 para LLM.",
    ],
    highlights: ["OWASP Top 10 para LLM", "Agentes de IA", "Red Team"],
    poster: { src: `${M}/meetup-03/poster.jpg`, alt: "Afiche del Virtual Meetup 03 con Said Zeidan", w: 1182, h: 1330 },
    cover: { src: `${M}/meetup-03/poster.jpg`, alt: "Afiche del Virtual Meetup 03", w: 1182, h: 1330 },
    photos: [],
    partners: ["Vultaethel"],
  },
  {
    kind: "meetup",
    slug: "meetup-02",
    series: "Virtual Meetup 02",
    title: "Linux para principiantes",
    start: "2026-07-16T18:00:00-05:00",
    dateLabel: "Jueves 16 de julio de 2026",
    timeLabel: "18:00 – 19:00",
    mode: "Online · Zoom",
    speaker: "Dax Navarrete",
    summary: "Los fundamentos de Linux desde cero: aprende la terminal y domínala como un profesional.",
    body: [
      "Mini workshop semanal para quienes empiezan: Dax Navarrete enseñó los fundamentos de Linux y la línea de comandos, la base de cualquier camino en ciberseguridad.",
    ],
    highlights: ["Fundamentos de Linux", "La terminal", "Para principiantes"],
    poster: { src: `${M}/meetup-02/poster.jpg`, alt: "Afiche del Virtual Meetup 02 con Dax Navarrete", w: 1254, h: 1254 },
    cover: { src: `${M}/meetup-02/poster.jpg`, alt: "Afiche del Virtual Meetup 02", w: 1254, h: 1254 },
    photos: [],
    partners: ["Vultaethel"],
  },
  {
    kind: "meetup",
    slug: "meetup-01",
    series: "Virtual Meetup 01",
    title: "Hacking web en la era de la IA",
    start: "2026-07-09T18:00:00-05:00",
    dateLabel: "Jueves 9 de julio de 2026",
    timeLabel: "18:00 – 19:00",
    mode: "Online · Zoom",
    speaker: "Jacob Pérez",
    summary: "Cuando la inteligencia artificial democratiza el hacking y transforma la ciberseguridad.",
    body: [
      "El primer meetup virtual de la comunidad: Jacob Pérez, ponente de la Edición 00, mostró cómo la IA cambia el hacking web, tanto para atacar como para defender.",
    ],
    highlights: ["Hacking web", "IA y ciberseguridad", "Mini workshop"],
    poster: { src: `${M}/meetup-01/poster.jpg`, alt: "Afiche del Virtual Meetup 01 con Jacob Pérez", w: 1422, h: 1600 },
    cover: { src: `${M}/meetup-01/poster.jpg`, alt: "Afiche del Virtual Meetup 01", w: 1422, h: 1600 },
    photos: [],
    partners: ["Vultaethel"],
  },
];

export const COLLABS: CommunityEvent[] = [
  {
    kind: "collab",
    slug: "build-with-ai-gdg",
    series: "Build with AI · GDG Quito",
    title: "Apoyamos como comunidad a GDG Quito",
    start: "2026-06-27T08:15:00-05:00",
    dateLabel: "27 de junio de 2026",
    mode: "Presencial",
    venue: "Escuela Politécnica Nacional (EPN), Quito",
    summary: "V-SandBox acompañó el Build with AI de GDG Quito en la EPN, junto a las ramas estudiantiles de IEEE.",
    body: [
      "Para el evento Build with AI, organizado por GDG Quito en la Escuela Politécnica Nacional, la comunidad se sumó para apoyar y conectar con estudiantes: charlas, talleres y almuerzo en comunidad.",
      "Estuvimos acompañados por las ramas estudiantiles de IEEE Computer Society y Cibermind EPN.",
    ],
    highlights: ["Charlas y talleres", "Almuerzo en comunidad", "IEEE Computer Society", "Cibermind EPN"],
    poster: { src: `${M}/build-with-ai-gdg/flyer.jpg`, alt: "Afiche: Vamos a apoyar como comunidad al evento de GDG", w: 1254, h: 1254 },
    cover: { src: `${M}/build-with-ai-gdg/comunidad-epn.jpg`, alt: "La comunidad V-SandBox en la EPN", w: 865, h: 649 },
    photos: [
      { src: `${M}/build-with-ai-gdg/comunidad-epn.jpg`, cap: "La comunidad reunida en la EPN", cat: "Comunidad", w: 865, h: 649 },
      { src: `${M}/build-with-ai-gdg/sala.jpg`, cap: "Sala del evento Build with AI", cat: "Evento", w: 1599, h: 899 },
      { src: `${M}/build-with-ai-gdg/ieee-grupo.jpg`, cap: "IEEE Computer Society en la EPN", cat: "Comunidad", w: 2000, h: 1506 },
      { src: `${M}/build-with-ai-gdg/ieee-anfiteatro.jpg`, cap: "Ramas IEEE en el anfiteatro", cat: "Comunidad", w: 2000, h: 1506 },
    ],
    partners: ["GDG Quito", "IEEE Computer Society", "Cibermind EPN"],
  },
  {
    kind: "collab",
    slug: "aws-community-day-2026",
    series: "AWS Community Day Ecuador 2026",
    title: "Nos fuimos al AWS Community Day",
    dateLabel: "2026",
    mode: "Presencial",
    venue: "Cuenca, Ecuador",
    summary: "Una delegación de la comunidad viajó al AWS Community Day Ecuador: misma pasión, nuevos horizontes.",
    body: [
      "La comunidad viajó en grupo al AWS Community Day Ecuador 2026 para aprender de la comunidad cloud, conocer gente nueva y representar a V-SandBox, junto a las ramas estudiantiles de IEEE.",
    ],
    highlights: ["Cloud y seguridad", "Networking", "Viaje en comunidad"],
    poster: { src: `${M}/aws-community-day/flyer.jpg`, alt: "Afiche: Nos vamos al AWS Community Day Ecuador 2026", w: 1080, h: 1319 },
    cover: { src: `${M}/aws-community-day/asistentes.jpg`, alt: "Asistentes al AWS Community Day", w: 1080, h: 685 },
    photos: [
      { src: `${M}/aws-community-day/asistentes.jpg`, cap: "Asistentes al AWS Community Day", cat: "Evento", w: 1080, h: 685 },
      { src: `${M}/aws-community-day/cuenca.jpg`, cap: "La delegación en Cuenca", cat: "Comunidad", w: 1080, h: 792 },
      { src: `${M}/aws-community-day/ieee.jpg`, cap: "IEEE UIDE con la comunidad", cat: "Comunidad", w: 1030, h: 716 },
      { src: `${M}/aws-community-day/credenciales.jpg`, cap: "Credenciales de V-SandBox", cat: "Evento", w: 1080, h: 1334 },
    ],
    partners: ["AWS Community", "IEEE UIDE"],
  },
];

export const LABS: CommunityEvent[] = [
  {
    kind: "lab",
    slug: "red-lab",
    series: "RED LAB",
    title: "RED LAB: laboratorio práctico de Red Team",
    mode: "Presencial",
    summary: "Mesas de trabajo, laptops y máquinas vulnerables: una sesión práctica para atacar de verdad.",
    body: [
      "El RED LAB es el espacio más práctico de la comunidad: grupos pequeños, máquinas vulnerables y gente que te acompaña mientras explotas. Algunos pases al RED LAB fueron premio de la Operación CTF de la Edición 01.",
    ],
    highlights: ["Grupos pequeños", "Máquinas vulnerables", "Acompañamiento 1 a 1"],
    cover: { src: `${M}/red-lab/mesa-1.jpg`, alt: "Equipo trabajando en el RED LAB", w: 1600, h: 1200 },
    photos: [
      { src: `${M}/red-lab/mesa-1.jpg`, cap: "Mesa de trabajo del RED LAB", cat: "Laboratorio", w: 1600, h: 1200 },
      { src: `${M}/red-lab/panoramica-1.jpg`, cap: "Guiando la práctica en vivo", cat: "Laboratorio", w: 2000, h: 900 },
      { src: `${M}/red-lab/panoramica-2.jpg`, cap: "Laptops, terminales y mucho café", cat: "Laboratorio", w: 2000, h: 900 },
      { src: `${M}/red-lab/equipo.jpg`, cap: "El equipo del RED LAB", cat: "Comunidad", w: 1079, h: 669 },
    ],
  },
];

export const COMMUNITY_EVENTS: CommunityEvent[] = [...MEETUPS, ...COLLABS, ...LABS];
export const EVENTS: AnyEvent[] = [...EDITIONS, ...COMMUNITY_EVENTS];

export function getEvent(slug: string) {
  return EVENTS.find((e) => e.slug === slug);
}

/** Ponentes únicos de todas las ediciones (sin duplicar a quien repite). */
export function allSpeakers() {
  const seen = new Map<string, Speaker & { editions: string[] }>();
  for (const ed of [...EDITIONS].reverse()) {
    for (const sp of ed.speakers) {
      const prev = seen.get(sp.name);
      if (prev) prev.editions.push(ed.number);
      else seen.set(sp.name, { ...sp, editions: [ed.number] });
    }
  }
  return [...seen.values()];
}

export const COMMUNITY_STATS = {
  events: EVENTS.length,
  editions: EDITIONS.length,
  meetups: MEETUPS.length,
  speakers: allSpeakers().length,
  peakAttendance: 100,
};
