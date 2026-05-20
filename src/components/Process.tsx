import { Phone, PenTool, Settings, Rocket, Headphones, ArrowRight } from "lucide-react";

const steps = [
  { icon: Phone, title: "Discovery Call", desc: "We identify your biggest workflow bottlenecks and highest-impact automation opportunities." },
  { icon: PenTool, title: "Strategy Design", desc: "We create a custom AI automation blueprint tailored to how your business operates." },
  { icon: Settings, title: "Build & Test", desc: "We develop and test every workflow in a safe environment before going live." },
  { icon: Rocket, title: "Launch & Train", desc: "We deploy the system and train your team so everything runs smoothly from day one." },
  { icon: Headphones, title: "Ongoing Support", desc: "We monitor, optimize, and improve your automations as your business grows." },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-7xl md:text-8xl font-extrabold text-foreground">
            <span className="text-primary text-glow">Process</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our straightforward 5-step process to build your custom AI automation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-4 relative">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="relative flex flex-col items-center text-center">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+44px)] w-[calc(100%-88px)] border-t border-dashed border-primary/40" />
                )}
                <div className="w-20 h-20 rounded-full border-2 border-primary grid place-items-center bg-card shadow-glow">
                  <Icon className="text-primary" size={28} />
                </div>
                <p className="mt-4 text-xs font-bold tracking-widest text-primary">
                  STEP 0{i + 1}
                </p>
                <h3 className="mt-1 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-[200px]">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-2xl bg-primary px-12 py-6 text-xl font-semibold text-primary-foreground hover:bg-primary-glow shadow-glow transition"
          >
            Start with a Free Discovery Call <ArrowRight size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
