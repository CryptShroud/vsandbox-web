import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./icon";
import { Reveal } from "./fx";

type Variant = "primary" | "secondary" | "wa" | "ghost";
type Size = "sm" | "md" | "lg";

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: string;
  className?: string;
}) {
  const cls = `btn btn-${variant} ${size === "md" ? "" : `btn-${size}`} group ${className}`;
  const content = (
    <>
      {variant === "wa" && <Icon name="whatsapp" size={18} />}
      {children}
      {icon && <Icon name={icon} size={16} className="transition-transform group-hover:translate-x-0.5" />}
    </>
  );
  if (/^(https?:|mailto:)/.test(href)) {
    const external = href.startsWith("http");
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container-x ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function Chip({ children, tone = "default", className = "" }: { children: ReactNode; tone?: "default" | "brand" | "ok"; className?: string }) {
  return <span className={`chip ${tone === "default" ? "" : `chip-${tone}`} ${className}`}>{children}</span>;
}

export function Card({ children, className = "", hover = false }: { children: ReactNode; className?: string; hover?: boolean }) {
  return <div className={`card spotlight ${hover ? "card-hover" : ""} ${className}`}>{children}</div>;
}

export function IconBadge({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand-2 ${className}`}>
      <Icon name={name} size={20} />
    </span>
  );
}

/* Cabecera de sección con h2 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  action,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  action?: ReactNode;
  center?: boolean;
}) {
  return (
    <Reveal className={`mb-10 md:mb-14 flex flex-wrap items-end gap-6 ${center ? "justify-center text-center" : "justify-between"}`}>
      <div className={`max-w-2xl ${center ? "mx-auto flex flex-col items-center" : ""}`}>
        {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
        <h2 className="font-display text-3xl font-semibold leading-[1.05] text-fg sm:text-4xl md:text-5xl">{title}</h2>
        {lead && <p className="mt-4 text-lg text-muted">{lead}</p>}
      </div>
      {action}
    </Reveal>
  );
}

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export type Crumb = { label: string; href: string };

/* Cabecera de página interior con h1, migas y fondo decorativo */
export function PageHeader({
  eyebrow,
  title,
  lead,
  crumbs = [],
  actions,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  crumbs?: Crumb[];
  actions?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="orb -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 bg-brand/20" aria-hidden />
      <Container className="relative pt-14 pb-14 md:pt-20 md:pb-20">
        <nav aria-label="Migas de pan" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-xs text-dim">
            <li><Link href="/" className="hover:text-fg">Inicio</Link></li>
            {crumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-2">
                <Icon name="chevron-right" size={12} />
                {i === crumbs.length - 1 ? (
                  <span aria-current="page" className="text-muted">{c.label}</span>
                ) : (
                  <Link href={c.href} className="hover:text-fg">{c.label}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="max-w-3xl">
          {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
          <h1 className="font-display text-4xl font-semibold leading-[1.02] text-fg sm:text-5xl md:text-6xl">{title}</h1>
          {lead && <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">{lead}</p>}
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>
        {children}
      </Container>
    </header>
  );
}

export function StatBlock({ value, label, className = "" }: { value: ReactNode; label: string; className?: string }) {
  return (
    <div className={className}>
      <p className="font-display text-4xl font-semibold text-fg md:text-5xl">{value}</p>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-dim">{label}</p>
    </div>
  );
}

/* Lista con viñetas de check */
export function CheckList({ items, className = "" }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-muted">
          <Icon name="check" size={18} className="mt-0.5 text-brand-2" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
