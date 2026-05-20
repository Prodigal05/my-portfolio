import { Workflow, TrendingUp, Brain, Users, PenTool, Code2 } from "lucide-react";

const services = [
  { icon: Workflow, title: "Zapier, Make & N8N", desc: "I build smart, multi-step automations that connect different apps so they work together automatically. Complex workflows, API integrations, webhooks, and error handling with retries." },
  { icon: TrendingUp, title: "Scale & CRM", desc: "I help businesses scale by building and optimizing GoHighLevel systems — pipeline automation, smooth CRM migrations, clean contact management, and systems that help you grow." },
  { icon: Brain, title: "AI Integrations", desc: "I create intelligent automations using Claude and GPT — workflows that extract data, parse information, classify leads or content, and use prompt engineering to get great AI results." },
  { icon: Users, title: "Client Acquisition", desc: "Systems that help you get more clients with less effort: automated lead qualification, nurture sequences, booking automation, and smart follow-up pipelines that keep prospects moving." },
  { icon: PenTool, title: "Workflow Design", desc: "I'm great at mapping out your current processes, identifying bottlenecks, creating clear SOPs, and designing simple, efficient systems that actually work for your team." },
  { icon: Code2, title: "Development", desc: "When needed, I go beyond no-code: web scrapers with Playwright, custom features in Next.js and Node.js, REST API integrations, and databases like Supabase and Airtable." },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-7xl md:text-8xl font-extrabold text-foreground mb-16">
          What I'm <span className="text-primary text-glow">Good At</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-card p-7 hover:border-primary/60 hover:shadow-glow transition"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 grid place-items-center mb-5 group-hover:bg-primary/25 transition">
                  <Icon className="text-primary" size={22} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
