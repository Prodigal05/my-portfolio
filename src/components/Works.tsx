import { useState, useEffect } from "react";
import { ArrowRight, X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import fb from "@/assets/projects/fb-ai-agent.png";
import scraper from "@/assets/projects/job-scraper.png";
import vapi from "@/assets/projects/vapi-receptionist.png";
import supa from "@/assets/projects/supabase-rag.png";
import xero from "@/assets/projects/xero-export.png";
import gmail from "@/assets/projects/gmail-attachments.png";
import leads from "@/assets/projects/leads-enrichment.png";
import content from "@/assets/projects/content-repurposing.png";
import asana from "@/assets/projects/asana-crm.png";
import clientOnboarding from "@/assets/projects/client-onboarding.png";
import heygenAvatar from "@/assets/projects/heygen-avatar.png";
import timesheetAutomation from "@/assets/projects/timesheet-automation.png";

type Project = {
  title: string;
  image: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
  link: string;
};

const data: Record<"N8N" | "Make" | "Zapier", Project[]> = {
  N8N: [
    {
      title: "Timesheet Automation",
      image: timesheetAutomation,
      challenge: "Employee timesheet collection, manager approvals, and PDF generation involve manual chasing, duplicate submissions, and inconsistent record-keeping.",
      solution: "End-to-end n8n workflow with Typeform intake, signature verification, duplicate detection, manager approval routing, automated PDF generation, Gmail notifications, and scheduled reminders for pending approvals.",
      result: "Fully automated timesheet lifecycle — from submission to approval to archived PDF — with zero manual follow-ups.",
      tags: ["n8n", "Typeform", "Gmail", "Google Sheets"],
      link: "#",
    },
    {
      title: "AI Client Onboarding",
      image: clientOnboarding,
      challenge: "Manual client onboarding (Drive folders, permissions, Airtable logging, welcome emails) is slow, inconsistent, and error-prone.",
      solution: "n8n workflow triggered by intake form that auto-creates Google Drive folder, logs client in Airtable, generates personalized email with Gemini 2.5 Flash, sends via Gmail, and notifies team in Slack.",
      result: "Full onboarding in seconds — completely hands-off.",
      tags: ["n8n", "Airtable", "Gemini", "Slack"],
      link: "https://drive.google.com/drive/folders/1HDBH6ESJaduORY21HV1x4MpaY2T5PBGg?usp=sharing",
    },
    {
      title: "HeyGen v3 Avatar Video Creation",
      image: heygenAvatar,
      challenge: "Manual script writing, HeyGen video creation, and client notification is slow and doesn't scale.",
      solution: "n8n workflow that polls Google Sheets every 5 mins, enhances script with Gemini, submits to HeyGen v3 API, and auto-emails the video when ready.",
      result: "End-to-end automated video production with zero manual work.",
      tags: ["n8n", "HeyGen", "Gemini", "Gmail"],
      link: "https://drive.google.com/drive/folders/1lemUqqDrronkm0nrmdtVYQHHbbUjRgKX?usp=sharing",
    },
    {
      title: "Facebook AI Agent",
      image: fb,
      challenge: "Facebook Page managers can't reply to every employee message at scale.",
      solution: "n8n workflow with Gemini AI Agent that auto-replies using the Employee Handbook via Graph API.",
      result: "Instant, accurate answers on Facebook Messenger 24/7 — zero human effort.",
      tags: ["AI Agent", "Facebook", "Gemini", "Webhooks"],
      link: "https://drive.google.com/drive/folders/1dV3HeDOSxpnL_FZY-zpK25G3kcMoQXcq",
    },
    {
      title: "AI Job Scraper + Resume Optimizer",
      image: scraper,
      challenge: "Manually searching for jobs, tailoring resumes, and writing proposals is time-consuming and scales poorly.",
      solution: "An n8n workflow triggered by a Slack message that searches jobs, filters listings, and uses AI to generate a tailored resume, Upwork proposal, and Gmail draft per job.",
      result: "A single Slack message kicks off a full job search pipeline — tailored resume, proposal, and email draft per relevant job.",
      tags: ["Slack", "AI", "Gmail", "Upwork"],
      link: "https://drive.google.com/drive/folders/1FznwLW3gFsNmoeH-p0hyHX1p1Kolxfqb?usp=sharing",
    },
    {
      title: "VAPI AI Receptionist",
      image: vapi,
      challenge: "Clinic staff spend significant time on routine inbound calls for scheduling, rescheduling, and cancellations.",
      solution: "A VAPI voice AI receptionist that handles inbound calls end-to-end, managing the full appointment lifecycle via n8n sub-workflows connected to Google Calendar and Airtable.",
      result: "The clinic's phone line is handled 24/7 by an AI that books, reschedules, and cancels appointments — fully synced and logged.",
      tags: ["VAPI", "Voice AI", "Google Calendar", "Airtable"],
      link: "https://drive.google.com/drive/folders/1qq5T9ElYNK5LoaaX_LP0FzHoGbJQUFE6?usp=sharing",
    },
    {
      title: "Supabase RAG Agent",
      image: supa,
      challenge: "Teams need to ask questions of an ever-changing document library without manually re-indexing.",
      solution: "An n8n RAG agent that watches Google Drive, embeds documents into Supabase pgvector, and answers questions via Gemini.",
      result: "Always-current knowledge base with natural-language Q&A — files are auto-synced on create, update, and delete.",
      tags: ["Supabase", "RAG", "Gemini", "Google Drive"],
      link: "https://drive.google.com/drive/folders/1OyA5yZEfvvH_Gg-m_bQ335noqT5jTujg",
    },
  ],
  Make: [
    {
      title: "Xero → Asana Transactions Export",
      image: xero,
      challenge: "Finance team manually exported Xero transactions and uploaded them to Asana for client review.",
      solution: "A Make scenario that watches completed Asana tasks, pulls Xero transactions via API, writes a CSV to Sheets, and attaches it back to Asana.",
      result: "Zero-touch monthly reporting — transactions flow from Xero to the right Asana task automatically.",
      tags: ["Make", "Xero", "Asana", "Google Sheets"],
      link: "https://drive.google.com/drive/folders/1bU98ZFiZC5DJP_NSmzac0sTTGqMXjYs2",
    },
    {
      title: "Sort Gmail Attachments to Drive",
      image: gmail,
      challenge: "Important attachments were getting lost in the inbox and never filed properly.",
      solution: "A Make scenario that watches Gmail, uses AI to classify each attachment, uploads to the right Drive folder, and logs it to Sheets.",
      result: "Every attachment is automatically named, filed, and logged — with an email confirmation to the team.",
      tags: ["Make", "Gmail", "Google Drive", "AI"],
      link: "https://drive.google.com/drive/folders/1VSIdLcL_sleHcUrjTcrIUXJ-4AzUI3l5",
    },
  ],
  Zapier: [
    {
      title: "Automated Lead Enrichment",
      image: leads,
      challenge: "Inbound leads arrived with minimal info and weren't being prioritized or routed correctly.",
      solution: "A Zap that catches the lead webhook, enriches via Apollo, splits by priority, logs high-priority to Sheets, and notifies Sales on Slack + Gmail.",
      result: "Sales gets enriched, prioritized leads in real time — with AI-drafted first-touch emails ready to send.",
      tags: ["Zapier", "Apollo", "Slack", "Gmail"],
      link: "https://drive.google.com/drive/folders/1vVZ5w9d0hj65GY7eEHxQb-UfAt3QOtaY",
    },
    {
      title: "AI Content Repurposing",
      image: content,
      challenge: "Long-form content (videos, audio) wasn't being repurposed into social posts consistently.",
      solution: "A Zap that watches Drive for new files, transcribes with AI, generates blog posts, then loops to publish on Facebook & LinkedIn.",
      result: "One uploaded file → blog post + multi-platform social posts, fully automated.",
      tags: ["Zapier", "AI", "Facebook", "LinkedIn"],
      link: "https://drive.google.com/drive/folders/1isoAWBxbNH8isb9Wg3diR53E75oQ50PP",
    },
    {
      title: "Asana CRM Lead Engagement",
      image: asana,
      challenge: "Leads sat in Asana without consistent follow-up across the sales lifecycle.",
      solution: "A multi-path Zap that splits leads by stage (Ready, No Response, Quoted, Approved, Paid) and triggers the right Gmail / Drive / Asana actions for each.",
      result: "Every lead gets the right follow-up at the right time — with welcome emails, quotes, and onboarding all automated.",
      tags: ["Zapier", "Asana", "Gmail", "CRM"],
      link: "https://drive.google.com/drive/folders/1nqX0YsunL_ECOQDVUfl9PN7FR7BYlIDA?usp=sharing",
    },
  ],
};

const tabs = ["N8N", "Make", "Zapier"] as const;
const PAGE_SIZE = 3;

export function Works() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("N8N");
  const [page, setPage] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);
  const projects = data[tab];
  const totalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
  const visible = projects.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  useEffect(() => { setPage(0); }, [tab]);

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

  const prevPage = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const nextPage = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section id="works" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-7xl md:text-8xl font-extrabold text-foreground mb-10">
          Featured <span className="text-primary text-glow">Projects</span>
        </h2>

        <div className="flex justify-center gap-3 mb-12">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                tab === t
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "border border-border text-muted-foreground hover:text-primary hover:border-primary"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="relative">
          {totalPages > 1 && (
            <>
              <button
                onClick={prevPage}
                aria-label="Previous projects"
                className="hidden md:grid absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 place-items-center rounded-full border border-border bg-card text-foreground hover:text-primary hover:border-primary hover:shadow-glow transition"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={nextPage}
                aria-label="Next projects"
                className="hidden md:grid absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 place-items-center rounded-full border border-border bg-card text-foreground hover:text-primary hover:border-primary hover:shadow-glow transition"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map((p, i) => (
              <article
                key={`${tab}-${page}-${i}`}
                className="rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 hover:shadow-glow transition flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => setLightbox({ src: p.image, title: p.title })}
                  className="group relative aspect-[16/11] shrink-0 overflow-hidden bg-background/50 cursor-zoom-in p-4"
                  aria-label={`Expand ${p.title} image`}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-contain transition group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-3 right-3 grid place-items-center w-9 h-9 rounded-full bg-background/80 backdrop-blur text-primary opacity-0 group-hover:opacity-100 transition">
                    <Maximize2 size={16} />
                  </span>
                </button>

                <div className="p-7 flex-1 flex flex-col gap-5">
                  <h3 className="text-xl font-bold text-foreground">{p.title}</h3>

                  <div className="space-y-4">
                    {[
                      ["CHALLENGE", p.challenge],
                      ["SOLUTION", p.solution],
                      ["RESULT", p.result],
                    ].map(([label, text]) => (
                      <div key={label}>
                        <p className="text-[11px] font-bold tracking-widest text-primary mb-1.5">{label}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 min-h-[3.9rem]">{text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {p.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-3 py-1 rounded-full bg-secondary text-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-primary-foreground hover:bg-primary-glow shadow-glow transition"
                  >
                    View Project Details <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prevPage}
                aria-label="Previous projects"
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
                aria-label="Next projects"
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
