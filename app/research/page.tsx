import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import ResearchOverview from "@/components/research/ResearchOverview";
import ResearchAreas from "@/components/research/ResearchAreas";
import CurrentProjects from "@/components/research/CurrentProjects";
import ResearchMethodology from "@/components/research/ResearchMethodology";

export default function ResearchPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-12 gap-12">

          <aside className="col-span-12 lg:col-span-4 xl:col-span-3">
            <Sidebar />
          </aside>

          <div className="col-span-12 lg:col-span-8 xl:col-span-9">

            <ResearchOverview />

            <ResearchAreas />

            <CurrentProjects />

            <ResearchMethodology />

          </div>

        </div>
      </main>
    </>
  );
}