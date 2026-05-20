import { useState, useEffect } from "react";
import { X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import zapier from "@/assets/certificates/zapier.png";
import make from "@/assets/certificates/make.png";
import n8n from "@/assets/certificates/n8n.png";
import prompt from "@/assets/certificates/prompt-engineering.png";
import ghl from "@/assets/certificates/gohighlevel.png";

const certs = [
  { name: "AI Automation with n8n", issuer: "Technical Virtual Assistants PH", year: "2026", image: n8n },
  { name: "AI Automation with Make.com", issuer: "Technical Virtual Assistants PH", year: "2026", image: make },
  { name: "AI Automation with Zapier", issuer: "Technical Virtual Assistants PH", year: "2026", image: zapier },
  { name: "HighLevel CRM", issuer: "Technical Virtual Assistants PH", year: "2026", image: ghl },
  { name: "Prompt Engineering", issuer: "Technical Virtual Assistants PH", year: "2026", image: prompt },
];

const PAGE_SIZE = 3;

export function Certificates() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(certs.length / PAGE_SIZE));
  const visible = certs.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  const prevPage = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const nextPage = () => setPage((p) => (p + 1) % totalPages);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section id="certificates" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-7xl md:text-8xl font-extrabold text-foreground mb-3">
          Certifications & <span className="text-primary text-glow">Badges</span>
        </h2>
        <div className="mb-12" />

        <div className="relative">
          {totalPages > 1 && (
            <>
              <button
                onClick={prevPage}
                aria-label="Previous certificates"
                className="hidden md:grid absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 place-items-center rounded-full border border-border bg-card text-foreground hover:text-primary hover:border-primary hover:shadow-glow transition"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={nextPage}
                aria-label="Next certificates"
                className="hidden md:grid absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 place-items-center rounded-full border border-border bg-card text-foreground hover:text-primary hover:border-primary hover:shadow-glow transition"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map((c, i) => (
              <article
                key={`${page}-${i}`}
                className="rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 hover:shadow-glow transition flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => setLightbox({ src: c.image, title: c.name })}
                  className="group relative aspect-[4/3] shrink-0 overflow-hidden bg-background/50 cursor-zoom-in p-4"
                  aria-label={`Expand ${c.name} certificate`}
                >
                  <img
                    src={c.image}
                    alt={`${c.name} certificate`}
                    loading="lazy"
                    className="w-full h-full object-contain transition group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-3 right-3 grid place-items-center w-9 h-9 rounded-full bg-background/80 backdrop-blur text-primary opacity-0 group-hover:opacity-100 transition">
                    <Maximize2 size={16} />
                  </span>
                </button>
                <div className="p-6">
                  <p className="font-bold text-foreground">{c.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {c.issuer} • {c.year}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prevPage}
                aria-label="Previous certificates"
                className="md:hidden w-10 h-10 grid place-items-center rounded-full border border-border bg-card text-foreground hover:text-primary hover:border-primary transition"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    aria-label={`Go to page ${i + 1}`}
                    className={`h-2 rounded-full transition ${
                      i === page ? "w-8 bg-primary shadow-glow" : "w-2 bg-border hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextPage}
                aria-label="Next certificates"
                className="md:hidden w-10 h-10 grid place-items-center rounded-full border border-border bg-card text-foreground hover:text-primary hover:border-primary transition"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md grid place-items-center p-4 md:p-10"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute top-4 right-4 grid place-items-center w-11 h-11 rounded-full bg-card border border-border text-foreground hover:text-primary hover:border-primary transition"
          >
            <X size={20} />
          </button>
          <figure
            className="max-w-[95vw] max-h-[90vh] flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="max-w-full max-h-[82vh] object-contain rounded-xl border border-border shadow-glow"
            />
            <figcaption className="text-sm text-muted-foreground">{lightbox.title}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
