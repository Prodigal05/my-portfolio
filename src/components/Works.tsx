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
import purchaseOrderGenerator from "@/assets/projects/purchase-order-generator.png";
import jobEstimateQuoteGenerator from "@/assets/projects/job-estimate-quote-generator.png";

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
      challenge: "Employees submitted duplicate timesheets, managers chased approvals manually, and PDFs were generated inconsistently with no central record.",
      solution: "Typeform intake feeds an n8n workflow that checks for duplicates, routes to the manager for approval, generates a signed PDF, and archives it.",
      result: "Timesheets go from submission to archived PDF without any manual steps.",
      tags: ["n8n", "Typeform", "Gmail", "Google Sheets"],
      link: "https://drive.google.com/drive/folders/1yq7wxaeef5Vbo5NCTR_GsiS7rfXfTVJy?usp=sharing",
    },
    {
      title: "Job Estimate & Quote Generator",
      image: jobEstimateQuoteGenerator,
      challenge: "Construction quotes were written manually and sent late, with no system to follow up on proposals that hadn't been opened.",
      solution: "A client enquiry triggers n8n to generate a Claude AI quote, produce a PDF, assign the lead, and send a 48-hour follow-up.",
      result: "Quotes reach clients in under 60 seconds, with every lead assigned and a follow-up already scheduled.",
      tags: ["n8n", "Claude AI", "PDF", "CRM"],
      link: "https://drive.google.com/drive/folders/1loobJ4_DCkTAYUKsYZdw1vKz4uDuH973?usp=sharing",
    },
    {
      title: "Purchase Order Generator",
      image: purchaseOrderGenerator,
      challenge: "POs were created manually in documents, emailed for approval, and entered into Xero by hand with no audit trail.",
      solution: "A Typeform submission triggers n8n to generate a PDF, route it for one-click approval, and create the Xero bill on confirmation.",
      result: "A submitted PO is approved and recorded in Xero without any manual data entry.",
      tags: ["n8n", "Typeform", "Xero", "PDF"],
      link: "https://drive.google.com/drive/folders/1V5KdALFFzAKjc-bi9SFVTlBJAMOl7EFi",
    },
    {
      title: "AI Client Onboarding",
      image: clientOnboarding,
      challenge: "Each new client required manually creating a Drive folder, logging details in Airtable, and drafting a welcome email from scratch.",
      solution: "An intake form triggers n8n to create a Drive folder, log to Airtable, write a Gemini-drafted welcome email, and ping Slack.",
      result: "A new client is fully set up in seconds, from folder to welcome email, with no manual work.",
      tags: ["n8n", "Airtable", "Gemini", "Slack"],
      link: "https://drive.google.com/drive/folders/1HDBH6ESJaduORY21HV1x4MpaY2T5PBGg?usp=sharing",
    },
    {
      title: "HeyGen v3 Avatar Video Creation",
      image: heygenAvatar,
      challenge: "Every video required manually writing the script, submitting it to HeyGen, then emailing the client when it was done.",
      solution: "n8n polls Google Sheets every 5 minutes, refines the script with Gemini, submits to HeyGen's v3 API, and emails the video on completion.",
      result: "A script in Google Sheets becomes a delivered video in the client's inbox with no manual steps.",
      tags: ["n8n", "HeyGen", "Gemini", "Gmail"],
      link: "https://drive.google.com/drive/folders/1lemUqqDrronkm0nrmdtVYQHHbbUjRgKX?usp=sharing",
    },
    {
      title: "Facebook AI Agent",
      image: fb,
      challenge: "The Facebook Page received too many employee messages to answer individually, leaving questions unanswered for hours.",
      solution: "n8n connects Facebook's Graph API to a Gemini agent trained on the Employee Handbook, which reads each message and replies instantly.",
      result: "Every employee message on Facebook Messenger gets an accurate, policy-grounded reply within seconds, around the clock.",
      tags: ["AI Agent", "Facebook", "Gemini", "Webhooks"],
      link: "https://drive.google.com/drive/folders/1dV3HeDOSxpnL_FZY-zpK25G3kcMoQXcq",
    },
    {
      title: "AI Job Scraper + Resume Optimizer",
      image: scraper,
      challenge: "Finding relevant jobs, rewriting the resume for each one, and drafting an Upwork proposal took several hours per application.",
      solution: "A Slack command triggers n8n to scrape listings, filter by fit, and output a tailored resume, Upwork proposal, and Gmail draft per job.",
      result: "One Slack message produces a complete application package for every matching job.",
      tags: ["Slack", "AI", "Gmail", "Upwork"],
      link: "https://drive.google.com/drive/folders/1FznwLW3gFsNmoeH-p0hyHX1p1Kolxfqb?usp=sharing",
    },
    {
      title: "VAPI AI Receptionist",
      image: vapi,
      challenge: "Clinic staff handled every inbound call manually, including routine bookings, reschedules, and cancellations.",
      solution: "VAPI handles inbound calls end-to-end through n8n sub-workflows that check Google Calendar availability and log every appointment in Airtable.",
      result: "The clinic's phone line books, reschedules, and cancels appointments 24/7 with no staff involvement.",
      tags: ["VAPI", "Voice AI", "Google Calendar", "Airtable"],
      link: "https://drive.google.com/drive/folders/1qq5T9ElYNK5LoaaX_LP0FzHoGbJQUFE6?usp=sharing",
    },
    {
      title: "Supabase RAG Agent",
      image: supa,
      challenge: "Staff couldn't query the document library without searching manually, and new files weren't reflected until someone re-indexed them.",
      solution: "n8n watches Google Drive for file changes, embeds updated content into Supabase pgvector, and routes natural-language questions to Gemini for answers.",
      result: "Any file added or updated in Drive is immediately queryable in plain English.",
      tags: ["Supabase", "RAG", "Gemini", "Google Drive"],
      link: "https://drive.google.com/drive/folders/1OyA5yZEfvvH_Gg-m_bQ335noqT5jTujg",
    },
  ],
  Make: [
    {
      title: "Xero → Asana Transactions Export",
      image: xero,
      challenge: "The finance team manually exported Xero transactions and attached them to Asana tasks every reporting cycle.",
      solution: "Make watches for completed Asana tasks, pulls matching Xero transactions, exports them to a Google Sheets CSV, and attaches the file back.",
      result: "Transaction reports attach themselves to the right Asana task the moment it's completed.",
      tags: ["Make", "Xero", "Asana", "Google Sheets"],
      link: "https://drive.google.com/drive/folders/1bU98ZFiZC5DJP_NSmzac0sTTGqMXjYs2",
    },
    {
      title: "Sort Gmail Attachments to Drive",
      image: gmail,
      challenge: "Attachments arrived in Gmail with inconsistent names and were never filed, making them hard to find later.",
      solution: "Make watches Gmail for new attachments, classifies each with AI, renames the file, uploads it to the correct Drive folder, and logs the entry.",
      result: "Every email attachment is filed and logged automatically, with the team notified by email.",
      tags: ["Make", "Gmail", "Google Drive", "AI"],
      link: "https://drive.google.com/drive/folders/1VSIdLcL_sleHcUrjTcrIUXJ-4AzUI3l5",
    },
  ],
  Zapier: [
    {
      title: "Automated Lead Enrichment",
      image: leads,
      challenge: "Inbound leads came in with only an email address and were sent to sales with no context on who the prospect was.",
      solution: "A lead webhook triggers enrichment via Apollo, splits by priority, logs high-value contacts to Sheets, and pings sales on Slack and Gmail.",
      result: "Sales receives an enriched, prioritized lead with a drafted first-touch email within seconds of sign-up.",
      tags: ["Zapier", "Apollo", "Slack", "Gmail"],
      link: "https://drive.google.com/drive/folders/1vVZ5w9d0hj65GY7eEHxQb-UfAt3QOtaY",
    },
    {
      title: "AI Content Repurposing",
      image: content,
      challenge: "Podcast episodes and videos sat in Drive without being turned into social posts or blog content.",
      solution: "A new file in Drive triggers a Zap that transcribes the audio, writes a blog post, then publishes to Facebook and LinkedIn.",
      result: "One uploaded file becomes a blog post and social content across two platforms with no extra work.",
      tags: ["Zapier", "AI", "Facebook", "LinkedIn"],
      link: "https://drive.google.com/drive/folders/1isoAWBxbNH8isb9Wg3diR53E75oQ50PP",
    },
    {
      title: "Asana CRM Lead Engagement",
      image: asana,
      challenge: "Leads moved through Asana stages without triggering any follow-up actions, so quotes and onboarding steps were handled manually or missed.",
      solution: "A Zap watches each lead's Asana stage and triggers the correct Gmail, Drive, or Asana action for Ready, Quoted, Approved, and Paid states.",
      result: "Every lead gets the right action at the right stage without the sales team touching it manually.",
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
                  className="group relative h-[220px] shrink-0 overflow-hidden cursor-zoom-in"
                  aria-label={`Expand ${p.title} image`}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition group-hover:scale-[1.03]"
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
