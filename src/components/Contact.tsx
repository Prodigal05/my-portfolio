import { Mail } from "lucide-react";
import linkedinLogo from "@/assets/logos/linkedin.png";

const UPWORK = "https://www.upwork.com/freelancers/~011667b29378b98b00?mp_source=share";
const OLJ = "https://v2.onlinejobs.ph/jobseekers/info/4504301";
const LINKEDIN = "https://www.linkedin.com/in/francis-galo";

const socials = [
  { name: "Upwork", href: UPWORK, src: "https://cdn.simpleicons.org/upwork" },
  { name: "OnlineJobs.ph", href: OLJ, src: "https://www.onlinejobs.ph/favicon.ico" },
  { name: "LinkedIn", href: LINKEDIN, src: linkedinLogo },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-glow" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-foreground">
          Let's <span className="text-primary text-glow">Connect</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Contact me and let's find a way to make it easier.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:gal.francis23@gmail.com?subject=${encodeURIComponent("Let's Connect")}&body=${encodeURIComponent(
              "Hi Francis,\n\nI’d like to discuss a project with you.\n\nI’ve included a few details below for context, and I’m happy to share more if needed.\n\n(Project Details)\n\nLooking forward to hearing your thoughts.\n\nBest regards,\n[Your Name]"
            )}`}
            className="inline-flex items-center gap-3 rounded-2xl bg-primary px-12 py-6 text-xl font-semibold text-primary-foreground hover:bg-primary-glow shadow-glow transition"
          >
            <Mail size={24} /> Contact Me
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-5 text-muted-foreground">
          <span className="text-sm">Find me on:</span>
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border border-border bg-card grid place-items-center text-xs font-bold text-foreground hover:text-primary hover:border-primary hover:shadow-glow transition"
              aria-label={s.name}
              title={s.name}
            >
              <img
                src={s.src}
                alt={`${s.name} logo`}
                width={20}
                height={20}
                loading="lazy"
                className="w-5 h-5 object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      <footer className="relative mt-24 border-t border-border pt-8 pb-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-primary font-semibold">GAL.automates</span> — Francis Galo. All rights reserved.
      </footer>
    </section>
  );
}
