// Brand logos. Most come from Simple Icons CDN; a few brands aren't on Simple
// Icons (or use a different slug), so we use their official favicon/CDN.
import freshdeskLogo from "@/assets/logos/freshdesk.webp";
import gohighlevelLogo from "@/assets/logos/gohighlevel.jpeg";

type Tool = { name: string; src: string };

const si = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

const tools: Tool[] = [
  { name: "Make", src: si("make") },
  { name: "n8n", src: si("n8n") },
  { name: "Zapier", src: si("zapier") },
  { name: "ElevenLabs", src: si("elevenlabs") },
  { name: "Vapi", src: "https://vapi.ai/favicon.ico" },
  { name: "Airtable", src: si("airtable") },
  { name: "Supabase", src: si("supabase") },
  { name: "GoHighLevel", src: gohighlevelLogo },
  { name: "Freshdesk", src: freshdeskLogo },
  { name: "Claude", src: si("claude") },
  { name: "OpenRouter", src: si("openrouter") },
  { name: "HubSpot", src: si("hubspot") },
  { name: "ClickUp", src: si("clickup") },
  { name: "HeyGen", src: "https://www.heygen.com/favicon.ico" },
];

export function LogoMarquee() {
  const row = [...tools, ...tools];
  return (
    <section className="relative py-[15px] border-y border-border overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex w-max animate-marquee gap-[1.1rem]">
        {row.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-[0.69rem] rounded-lg border border-border bg-card px-[1.1rem] py-[0.69rem] shrink-0"
          >
            <span className="w-[1.93rem] h-[1.93rem] grid place-items-center">
              <img
                src={t.src}
                alt={`${t.name} logo`}
                width={31}
                height={31}
                loading="lazy"
                className="w-[1.93rem] h-[1.93rem] object-contain"
              />
            </span>
            <span className="text-[0.96rem] font-semibold tracking-wide text-foreground uppercase">
              {t.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
