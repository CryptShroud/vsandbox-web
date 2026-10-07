import { Breadcrumb, SectionHeader, PixelCard, Tag, PixelButton } from "@/components/pixel";
import { events } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function EventoDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = events.find((x) => x.slug === slug);
  if (!e) notFound();
  return (
    <div>
      <Breadcrumb trail={[["EVENTOS", "/eventos"], [e.title.toUpperCase().slice(0, 24) + "…", `/eventos/${slug}`]]} />
      <SectionHeader kicker={`${e.date} · ${e.mode}`} title={e.title.toUpperCase()} />
      <PixelCard className="space-y-3">
        <div className="flex gap-2"><Tag>{e.mode}</Tag><Tag>PREMIO: {e.prize.toUpperCase()}</Tag></div>
        <p className="text-xl text-[#16130e]">Agenda demo: bienvenida (15 min) → demo en vivo (60 min) → Q&A + networking (30 min). Trae tu laptop con Kali o tu nave favorita.</p>
        <p className="text-xl text-[#4a443b]">Lugar: grupo de WhatsApp + streaming en Twitch. Presencial cuando aplique: se anuncia en el grupo.</p>
        <PixelButton href="/unete">▶ RESERVAR MI LUGAR</PixelButton>
      </PixelCard>
    </div>
  );
}
