import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Works } from "@/components/Works";
import { Certificates } from "@/components/Certificates";
import { Testimonials } from "@/components/Testimonials";
import { ScheduleCall } from "@/components/ScheduleCall";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Process />
      <Services />
      <Works />
      <Certificates />
      <Testimonials />
      <ScheduleCall />
      <Contact />
    </main>
  );
}
