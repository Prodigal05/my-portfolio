import { ArrowRight } from "lucide-react";
import portrait from "@/assets/francis-portrait.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-20 pb-6 md:pt-20 md:pb-8 overflow-hidden"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] bg-glow" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-glow" />

      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-8 lg:gap-12 items-center px-[90px] py-[80px]">
        <div className="lg:col-span-7">
          <h2 className="text-primary font-bold text-[1.73rem] md:text-[2.76rem] mb-3">
            Hello there!
          </h2>
          <h1 className="font-extrabold leading-[1.05] text-foreground text-[2.76rem] sm:text-[3.45rem] md:text-[66px]">
            I'm <span className="text-primary">Francis Galo</span>,
          </h1>
          <p className="mt-2 font-extrabold leading-[1.05] text-foreground text-[2.3rem] sm:text-[2.76rem] md:text-[59px]">
            Workflow Automation Specialist.
          </p>
          <p className="mt-6 max-w-xl text-[0.95rem] md:text-[1.05rem] text-muted-foreground leading-relaxed">
            I help teams work smarter by automating the repetitive stuff,
            clearing bottlenecks, and stopping the little manual mistakes that
            can quietly damage the business.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-[1.78rem] py-[0.81rem] text-[0.95rem] font-semibold text-primary-foreground hover:bg-primary-glow shadow-glow transition"
            >
              Let's Talk <ArrowRight size={18} />
            </a>
            <a
              href="#works"
              className="inline-flex items-center rounded-xl border-2 border-primary px-[1.78rem] py-[0.81rem] text-[0.95rem] font-semibold text-primary hover:bg-primary/10 transition"
            >
              View My Work
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative mx-auto w-full max-w-[332px] sm:max-w-[368px] lg:max-w-[405px]">
          {/* decorative frames */}
          <div className="absolute inset-0 -rotate-3 rounded-3xl border-2 border-primary/40 translate-x-3 translate-y-3" />
          <div className="absolute inset-0 rotate-2 rounded-3xl border border-primary/20 -translate-x-2 -translate-y-2" />
          <img
            src={portrait}
            alt="Francis Galo, Workflow Automation Specialist"
            width={640}
            height={720}
            className="relative w-full h-auto object-cover rounded-3xl shadow-glow"
          />
        </div>
      </div>
    </section>
  );
}
