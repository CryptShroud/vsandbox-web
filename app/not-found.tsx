import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="noise relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="orb left-1/2 top-0 h-96 w-[700px] -translate-x-1/2 bg-brand/20" aria-hidden />
      <Container className="relative py-28 text-center md:py-40">
        <p className="font-mono text-sm text-brand-2">$ curl -I {"<"}esta-ruta{">"}</p>
        <p className="font-mono text-sm text-dim">HTTP/1.1 404 Not Found</p>
        <h1 className="font-display mt-8 text-[7rem] font-semibold leading-none text-gradient md:text-[11rem]">404</h1>
        <p className="font-display mt-4 text-2xl font-semibold text-fg md:text-3xl">Esta ruta no existe… o está muy bien escondida.</p>
        <p className="mt-3 text-muted">La flag que buscas está en otro castillo.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/" icon="arrow-right">Volver al inicio</Button>
          <Button href="/eventos" variant="secondary">Ver eventos</Button>
        </div>
      </Container>
    </section>
  );
}
