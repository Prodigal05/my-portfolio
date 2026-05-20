import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Globe, Clock, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "A clear map of what's eating your time",
    body: "We'll identify your biggest time drains and repetitive tasks with full visibility.",
  },
  {
    title: "Which tasks can be automated right away",
    body: "You'll leave with a prioritized list of quick-win automations you can implement immediately.",
  },
  {
    title: "A rough plan with timeline and cost",
    body: "Get a realistic roadmap including estimated timeline and investment required.",
  },
  {
    title: "Honest advice — even if automation isn't the answer",
    body: "I'll tell you straight whether automation is the right move or if there's a better solution for your situation.",
  },
];

const SLOTS = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];
const DEFAULT_TIME = "09:00 AM";

function buildMonth(year: number, month: number) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startPad = first.getDay();
  const days: (number | null)[] = [];
  for (let i = 0; i < startPad; i++) days.push(null);
  for (let d = 1; d <= last.getDate(); d++) days.push(d);
  while (days.length % 7 !== 0) days.push(null);
  return days;
}

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const WEEKDAYS = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

export function ScheduleCall() {
  const [today, setToday] = useState<Date | null>(null);
  const [view, setView] = useState(() => {
    const d = new Date();
    return { year: d.getFullYear(), month: d.getMonth() };
  });
  const [selected, setSelected] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>("09:00 AM");

  const days = useMemo(() => buildMonth(view.year, view.month), [view]);
  const [timeLabel, setTimeLabel] = useState("");
  useEffect(() => {
    setToday(new Date());
    const update = () => setTimeLabel(
      new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZone: "America/Los_Angeles" })
    );
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  const isPast = (d: number) => {
    if (!today) return false;
    const date = new Date(view.year, view.month, d);
    const t = new Date(today); t.setHours(0,0,0,0);
    return date < t;
  };
  const isWeekend = (d: number) => {
    const date = new Date(view.year, view.month, d);
    return date.getDay() === 0 || date.getDay() === 6;
  };

  const prev = () => setView((v) => v.month === 0 ? { year: v.year - 1, month: 11 } : { ...v, month: v.month - 1 });
  const next = () => setView((v) => v.month === 11 ? { year: v.year + 1, month: 0 } : { ...v, month: v.month + 1 });

  return (
    <section id="schedule" className="py-24 md:py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-glow opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-8xl md:text-9xl font-extrabold text-foreground">
          Schedule a <span className="text-primary text-glow">Call</span>
        </h2>
        <div className="mt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2"><Globe size={16} className="text-primary" /> Pacific Time (PT)</span>
          <span>•</span>
          <span className="inline-flex items-center gap-2"><Clock size={16} className="text-primary" /> {timeLabel || "—"}</span>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-6">
          {/* Calendar card */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="grid md:grid-cols-[1.6fr_1fr] gap-8">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <button onClick={prev} aria-label="Previous month" className="w-9 h-9 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition">
                    <ChevronLeft size={18} />
                  </button>
                  <h3 className="text-lg font-bold text-foreground">{MONTHS[view.month]} {view.year}</h3>
                  <button onClick={next} aria-label="Next month" className="w-9 h-9 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition">
                    <ChevronRight size={18} />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-bold tracking-widest text-muted-foreground mb-2">
                  {WEEKDAYS.map((w) => <div key={w}>{w}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {days.map((d, i) => {
                    if (d === null) return <div key={i} className="h-11" />;
                    const disabled = isPast(d) || isWeekend(d);
                    const isSel = selected && selected.getDate() === d && selected.getMonth() === view.month && selected.getFullYear() === view.year;
                    const isToday = today && today.getDate() === d && today.getMonth() === view.month && today.getFullYear() === view.year;
                    return (
                      <button
                        key={i}
                        disabled={disabled}
                        onClick={() => { setSelected(new Date(view.year, view.month, d)); setTime(DEFAULT_TIME); }}
                        className={`h-11 rounded-lg text-sm font-semibold transition ${
                          disabled
                            ? "text-muted-foreground/30 cursor-not-allowed"
                            : isSel
                              ? "bg-primary text-primary-foreground shadow-glow"
                              : "text-primary hover:bg-primary/10"
                        }`}
                      >
                        {d}
                        {isToday && !isSel && <span className="block w-1 h-1 mx-auto rounded-full bg-primary mt-0.5" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="md:border-l md:border-border md:pl-8">
                <p className="text-sm font-bold text-foreground mb-4">Select a date</p>
                {selected ? (
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground mb-3">
                      {selected.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}
                    </p>
                    {SLOTS.map((s) => (
                      <button
                        key={s}
                        onClick={() => setTime(s)}
                        className={`w-full rounded-lg border px-4 py-3 text-sm font-semibold transition ${
                          time === s
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border text-foreground hover:border-primary hover:text-primary"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                    {time && (
                      <a
                        href={`mailto:gal.francis23@gmail.com?subject=${encodeURIComponent("Discovery Call Booking")}&body=${encodeURIComponent(
                          `Hi Francis,\n\nI'd like to book ${selected.toDateString()} at ${time}. To discuss about the project below.\n\n(Project Details)\n\nBest Regards,\n[Your Name]`
                        )}`}
                        className="mt-4 block text-center rounded-xl bg-primary py-3 font-semibold text-primary-foreground hover:bg-primary-glow shadow-glow transition"
                      >
                        Confirm Booking
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="h-40 grid place-items-center text-sm text-muted-foreground text-center">
                    Pick a date to see times
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Benefits card */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">
              What You'll Get on the <span className="text-primary">Call</span>
            </h3>
            <ul className="space-y-5">
              {benefits.map((b) => (
                <li key={b.title} className="flex gap-3">
                  <CheckCircle2 size={20} className="shrink-0 mt-0.5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{b.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-1">{b.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
