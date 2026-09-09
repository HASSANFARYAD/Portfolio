import About from "@/components/about";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import CurrentlyBuilding from "@/components/currently-building";
import Experience from "@/components/experience";
import GithubActivity from "@/components/github-activity";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import StatsBar from "@/components/stats-bar";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <StatsBar />
      <SectionDivider />
      <CurrentlyBuilding />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Blog />
      <GithubActivity />
      <Contact />
    </main>
  );
}
