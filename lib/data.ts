export type Member = { nick: string; role: string; level: number; xp: number; country: string };
export type Post = { slug: string; title: string; cat: string; date: string; excerpt: string };
export type Lab = { name: string; os: string; diff: string; points: number };
export type Route = { slug: string; title: string; modules: number; hours: string; level: string; desc: string };
export type CtfEvent = { slug: string; title: string; date: string; mode: string; prize: string };
export type Job = { id: string; title: string; company: string; location: string; type: string };
export type Tool = { name: string; cat: string; desc: string };

export const AVATAR_COLORS = ["#ff6b00", "#ffb000", "#ff2e2e", "#39ff14", "#00d0ff", "#c26bff"];

export function avatarColor(nick: string) {
  let h = 0;
  for (const c of nick) h = (h * 31 + c.charCodeAt(0)) % 997;
  return AVATAR_COLORS[h % AVATAR_COLORS.length];
}

export const members: Member[] = [
  { nick: "cryptshroud", role: "ADMIN", level: 42, xp: 9800, country: "MX" },
  { nick: "0xNaranja", role: "MOD", level: 35, xp: 7200, country: "ES" },
  { nick: "pixelowl", role: "MENTOR", level: 31, xp: 6100, country: "AR" },
  { nick: "rootkitten", role: "HUNTER", level: 27, xp: 4900, country: "CO" },
  { nick: "buf3r0v3r", role: "HUNTER", level: 24, xp: 4100, country: "PE" },
  { nick: "null_ptr", role: "MEMBER", level: 18, xp: 2800, country: "CL" },
  { nick: "s coupled", role: "MEMBER", level: 15, xp: 2300, country: "UY" },
  { nick: "hexghost", role: "MEMBER", level: 12, xp: 1700, country: "MX" },
  { nick: "packetrat", role: "NOOB", level: 7, xp: 800, country: "ES" },
  { nick: "sud0wookie", role: "NOOB", level: 4, xp: 350, country: "AR" },
  { nick: "osintfox", role: "MENTOR", level: 29, xp: 5500, country: "CO" },
  { nick: "blu3potion", role: "HUNTER", level: 22, xp: 3700, country: "PE" },
];

export const routes: Route[] = [
  { slug: "fundamentos", title: "Fundamentos Hacker", modules: 8, hours: "20h", level: "LVL 1", desc: "Linux, redes, Python y mentalidad ofensiva. El tutorial del juego." },
  { slug: "pentest-web", title: "Pentest Web", modules: 12, hours: "40h", level: "LVL 10", desc: "OWASP Top 10, Burp, XSS, SQLi, SSRF. La mazmorra principal." },
  { slug: "blue-team", title: "Blue Team / Defensa", modules: 10, hours: "35h", level: "LVL 10", desc: "SOC, SIEM, forense, respuesta a incidentes. Protege la comunidad." },
  { slug: "osint", title: "OSINT", modules: 6, hours: "15h", level: "LVL 5", desc: "Investigación open-source, dorks, geolocalización." },
  { slug: "reversing", title: "Reversing & Pwn", modules: 9, hours: "45h", level: "LVL 20", desc: "Assembly, GDB, buffer overflows. Boss final." },
  { slug: "redes-wifi", title: "Redes & WiFi", modules: 7, hours: "25h", level: "LVL 8", desc: "Nmap, Wireshark, ataques wireless en laboratorio." },
];

export const labs: Lab[] = [
  { name: "naranja-01", os: "Linux", diff: "FÁCIL", points: 20 },
  { name: "calabaza-ftp", os: "Linux", diff: "FÁCIL", points: 20 },
  { name: "castillo-xss", os: "Web", diff: "MEDIA", points: 40 },
  { name: "cripta-sqli", os: "Web", diff: "MEDIA", points: 40 },
  { name: "torre-ssrf", os: "Web", diff: "MEDIA", points: 50 },
  { name: "bosque-forense", os: "Forense", diff: "MEDIA", points: 50 },
  { name: "dragon-pwn", os: "Pwn", diff: "INSANE", points: 100 },
  { name: "jefe-final-ad", os: "AD", diff: "INSANE", points: 120 },
];

export const posts: Post[] = [
  { slug: "nmap-desde-cero", title: "Nmap desde cero: tu primera espada", cat: "REDES", date: "2026-09-20", excerpt: "Escaneo de puertos, scripts NSE y tácticas sigilosas explicadas con dibujitos." },
  { slug: "xss-guia-pixel", title: "XSS reflejado, almacenado y DOM en 15 min", cat: "WEB", date: "2026-09-12", excerpt: "Payloads, contextos de escape y cómo reportarlo como un pro." },
  { slug: "linpeas-trucos", title: "10 trucos de LinPEAS que nadie te cuenta", cat: "PRIVESC", date: "2026-08-30", excerpt: "De enumeración aburrida a root en 5 comandos." },
  { slug: "osint-con-fotos", title: "Geolocalizar fotos como detective", cat: "OSINT", date: "2026-08-18", excerpt: "Sombras, carteles y EXIF: el trío investigador." },
  { slug: "soc-en-casa", title: "Monta tu SOC casero con Wazuh", cat: "BLUE", date: "2026-08-02", excerpt: "Detecta a tus propios gatos atacando tu red." },
  { slug: "diccionarios-wordlists", title: "Wordlists: el botín del diccionario", cat: "RECURSOS", date: "2026-07-25", excerpt: "SecLists, rockyou y cuándo mutar con reglas." },
];

export const events: CtfEvent[] = [
  { slug: "meetup-12", title: "Meetup #12: Web Hacking en vivo", date: "2026-10-18", mode: "PRESENCIAL + STREAM", prize: "Stickers" },
  { slug: "taller-burp", title: "Taller: Burp Suite desde cero", date: "2026-10-25", mode: "ONLINE", prize: "Certificado" },
  { slug: "sandbox-ctf-04", title: "SANDBOX-CTF #04: La Calabaza Encantada", date: "2026-11-08", mode: "JEOPARDY 48H", prize: "500€ + swag" },
  { slug: "charla-soc", title: "Charla: entrar al SOC sin morir", date: "2026-11-15", mode: "STREAM", prize: "—" },
  { slug: "winter-pwn", title: "Winter Pwn: final por equipos", date: "2026-12-06", mode: "ATTACK/DEFENSE", prize: "1000€" },
];

export const jobs: Job[] = [
  { id: "pentester-jr", title: "Pentester Jr", company: "NaranjaSec", location: "Remoto / ES", type: "FULL-TIME" },
  { id: "soc-l1", title: "Analista SOC L1", company: "CalabazaLabs", location: "Remoto / LATAM", type: "FULL-TIME" },
  { id: "appsec", title: "AppSec Engineer", company: "PixelBank", location: "Híbrido CDMX", type: "FULL-TIME" },
  { id: "ctf-freelance", title: "Creador de retos CTF", company: "V-SandBox", location: "Freelance", type: "CONTRACT" },
];

export const tools: Tool[] = [  { name: "Nmap", cat: "REDES", desc: "Escáner de puertos y servicios." },
  { name: "Burp Suite", cat: "WEB", desc: "Proxy para cazar bugs web." },
  { name: "Wireshark", cat: "REDES", desc: "Analiza paquetes como pociones." },
  { name: "LinPEAS", cat: "PRIVESC", desc: "Enumeración Linux automática." },
  { name: "ffuf", cat: "WEB", desc: "Fuzzing rápido de rutas y vhosts." },
  { name: "John", cat: "CRACKING", desc: "Rompe hashes con wordlists." },
  { name: "Ghidra", cat: "REVERSING", desc: "Desensambla binarios gratis." },
  { name: "Wazuh", cat: "BLUE", desc: "SIEM open-source para tu SOC." },
  { name: "theHarvester", cat: "OSINT", desc: "Emails y subdominios a granel." },
  { name: "Hydra", cat: "FUERZA", desc: "Ataques de login (solo labs)." },
  { name: "Volatility", cat: "FORENSE", desc: "Análisis de memoria RAM." },
  { name: "Aircrack-ng", cat: "WIFI", desc: "Auditoría wireless en lab." },
];

export type Village = { slug: string; name: string; icon: string; desc: string; activities: string[]; level: string };

export const villages: Village[] = [
  { slug: "lockpick", name: "Lockpick Village", icon: "key", desc: "Ganzúas, candados y cerrajería física. Toca, siente, abre.", activities: ["Taller ganzúas 101", "Esquinas de práctica libre", "Reto candado negro"], level: "TODOS" },
  { slug: "hardware", name: "Hardware Hacking Village", icon: "swor", desc: "Soldadura, UART, JTAG y dumping de firmware con tus manos.", activities: ["Suelda tu primer badge", "UART hunting", "Flash dump race"], level: "LVL 5+" },
  { slug: "recon", name: "Recon Village", icon: "ghost", desc: "OSINT competitivo: encuentra a la persona invisible.", activities: ["Missing-person CTF", "Dorks en vivo", "Geoguessr hacker"], level: "TODOS" },
  { slug: "blue", name: "Blue Team Village", icon: "shield", desc: "Defiende la red de La Floresta en tiempo real.", activities: ["SOC en vivo", "Phishing defense", "Forense relámpago"], level: "LVL 8+" },
  { slug: "crypto", name: "Crypto & Privacy Village", icon: "terminal", desc: "Cifrado, PGP, cripto-guerras y privacidad operativa.", activities: ["Key-signing party", "Cripto-retos", "Opsec clinic"], level: "TODOS" },
  { slug: "social", name: "Social Engineering Village", icon: "flag", desc: "El arte del engaño autorizado: vishing y pretextos en cabina.", activities: ["Vishing contest", "Lectura fría 101", "Badge check"], level: "LVL 10+" },
];

export type Sponsor = { name: string; tier: string };

export const sponsors: Sponsor[] = [
  { name: "Pichincha Packets", tier: "ORO" },
  { name: "MitadDelMundo Labs", tier: "ORO" },
  { name: "RondaSec", tier: "PLATA" },
  { name: "Panecillo Cloud", tier: "PLATA" },
  { name: "ChullaTech", tier: "PLATA" },
  { name: "Canelazo Cloud", tier: "BRONCE" },
  { name: "Teleférico Tech", tier: "BRONCE" },
  { name: "QuindeSec", tier: "BRONCE" },
];

export const WHATSAPP_URL = "https://chat.whatsapp.com/JQUY0vBwG44GGVkwZEonA5";

export const HQ = {  street: "La Floresta, Valladolid N24-120",
  city: "Quito, Ecuador 170519",
  meetup: "Cada 2º viernes · 18:30 EC · Casa de la Cultura",
  stream: "Twitch · viernes 19:00 EC (GMT-5)",
};
