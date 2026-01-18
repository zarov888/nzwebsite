import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { NowDashboard } from "@/components/sections/now-dashboard";
import { Projects } from "@/components/sections/projects";
import { Music } from "@/components/sections/music";
import { Timeline } from "@/components/sections/timeline";
import { Contact } from "@/components/sections/contact";
import { Navbar } from "@/components/layout/navbar";
import { IntroOverlay } from "@/components/intro-overlay";
import { CommandMenu } from "@/components/command-menu";

export default function Home() {
  return (
    <main className="min-h-screen">
      <IntroOverlay />
      <Navbar />
      <Hero />
      <div className="space-y-12 bg-gradient-to-b from-transparent to-black/20">
        <About />
        <NowDashboard />
      </div>
      <Projects />
      <div className="bg-black/20">
        <Music />
        <Timeline />
      </div>
      <Contact />
      <CommandMenu />
    </main>
  );
}
