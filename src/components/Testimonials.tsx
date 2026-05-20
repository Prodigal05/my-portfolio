import { Sparkles } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-7xl md:text-8xl font-extrabold text-foreground mb-3">
          Client <span className="text-primary text-glow">Testimonials</span>
        </h2>

        <div className="mt-14 mx-auto max-w-2xl relative">
          {/* decorative frames */}
          <div className="absolute inset-0 -rotate-2 rounded-3xl border-2 border-primary/30 translate-x-2 translate-y-2" />
          <div className="absolute inset-0 rotate-1 rounded-3xl border border-primary/15 -translate-x-2 -translate-y-2" />

          <div className="relative rounded-3xl border border-primary/40 bg-card p-10 md:p-14 text-center shadow-glow overflow-hidden">
            {/* ambient glow */}
            <div className="pointer-events-none absolute -top-20 -left-20 w-60 h-60 bg-glow" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 w-60 h-60 bg-glow" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} /> Coming Soon
              </span>
              <p className="mt-6 text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                Available upon request.
              </p>
              <p className="mt-3 text-base md:text-lg text-muted-foreground">
                Currently building client base. In Jesus time.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow shadow-glow transition"
              >
                Request References
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
