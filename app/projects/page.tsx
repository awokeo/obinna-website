import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import ProjectsOverview from "@/components/projects/ProjectsOverview";
import ResearchProjects from "@/components/projects/ResearchProjects";
import CybersecurityProjects from "@/components/projects/CybersecurityProjects";
import AIProjects from "@/components/projects/AIProjects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-12 gap-12">

          <aside className="col-span-12 lg:col-span-4 xl:col-span-3">
            <Sidebar />
          </aside>

          <div className="col-span-12 lg:col-span-8 xl:col-span-9">

            <ProjectsOverview />

            <ResearchProjects />

            <CybersecurityProjects />

            <AIProjects />

          </div>

        </div>

      </main>
    </>
  );
}