export type Speaker = { name: string; role: string; bio: string; img: string };
export type Photo = { src: string; cap: string; cat: string; w: number; h: number };
export type AgendaItem = { time: string; title: string; desc: string };
export type Stat = { value: number; suffix?: string; label: string };

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
  cover: { src: string; alt: string; w: number; h: number };
  ctf?: { title: string; desc: string; phases: string[]; prizes?: string };
};

export type MainEvent = {
  kind: "main";
  slug: string;
  name: string;
  codename: string;
  start: string;
  dateLabel: string;
  venue: string;
  address: string;
  summary: string;
  lead: string;
  cfp: { deadline: string; deadlineLabel: string; resultsLabel: string };
  formats: { title: string; desc: string; icon: string }[];
  ctf: { format: string; teams: string; categories: string[]; prizes: string };
  cover: { src: string; alt: string; w: number; h: number };
};

export type AnyEvent = Edition | MainEvent;

const E00 = "/eventos/edicion-00";
const E01 = "/eventos/edicion-01";
const FELIPE = `${E00}/speakers/felipe-grados.png`;

export const SANDBOX_CON: MainEvent = {
  kind: "main",
  slug: "sandbox-con-2026",
  name: "Sandbox-Con 2026",
  codename: "Main Event",
  start: "2026-11-08T09:00:00-05:00",
  dateLabel: "08 de noviembre de 2026",
  venue: "Casa de la Cultura",
  address: "Quito, Ecuador",
  summary: "El main event de la comunidad: charlas con demos en vivo, CTF por equipos y villages para tocar hardware real.",
  lead: "Un día completo para romper, aprender y conectar con la escena de ciberseguridad de Ecuador.",
  cfp: {
    deadline: "2026-10-19T23:59:00-05:00",
    deadlineLabel: "19 de octubre de 2026",
    resultsLabel: "26 de octubre de 2026",
  },
  formats: [
    { title: "Charlas técnicas", desc: "25 minutos + 5 de Q&A. Demos en vivo antes que slides.", icon: "mic" },
    { title: "CTF por equipos", desc: "Jeopardy con retos de web, pwn, forense, OSINT y cripto.", icon: "flag" },
    { title: "Villages", desc: "Lockpicking, hardware hacking, recon, blue team y más.", icon: "key" },
    { title: "Networking", desc: "Reclutadores, mentores y la gente que hace la escena.", icon: "users" },
  ],
  ctf: {
    format: "Jeopardy",
    teams: "Equipos de 1 a 4 personas",
    categories: ["Web", "Pwn", "Forense", "OSINT", "Crypto"],
    prizes: "Premios, swag y trofeo para el podio",
  },
  cover: { src: "/foto-principal.jpg", alt: "La comunidad V-SandBox reunida tras la Edición 01", w: 2000, h: 1333 },
};

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
      "En paralelo, la Operación CTF desplegó su infraestructura: un objetivo corporativo con exposición web, secretos mal guardados, el abuso del «Demonio Guardián» (MySQL/UDF) y una misión final para asegurar persistencia.",
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
      title: "Operación CTF",
      desc: "Un objetivo corporativo simulado, de la superficie web a la persistencia.",
      phases: ["Exposición web", "Secretos mal guardados", "El «Demonio Guardián» (MySQL/UDF)", "Persistencia"],
      prizes: "Suscripciones a OffSec Proving Grounds y pases al RED LAB",
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

export const EVENTS: AnyEvent[] = [SANDBOX_CON, ...EDITIONS];

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
  editions: EDITIONS.length,
  speakers: allSpeakers().length,
  ctfs: EDITIONS.filter((e) => e.ctf).length,
  peakAttendance: 100,
};
