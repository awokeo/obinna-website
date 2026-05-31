import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";

import ResearchInterests from "@/components/sections/ResearchInterests";
import FeaturedResearch from "@/components/sections/FeaturedResearch";
import NewsSection from "@/components/sections/NewsSection";
import AwardsSection from "@/components/sections/AwardsSection";
import EducationSection from "@/components/sections/EducationSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-12 gap-12">

          {/* Left Sidebar */}
          <aside className="col-span-12 lg:col-span-4 xl:col-span-3">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8 xl:col-span-9">

            <Hero />

            <ResearchInterests />

            <FeaturedResearch />

            <NewsSection />

            <AwardsSection />

            <EducationSection />

          </div>

        </div>
      </main>
    </>
  );
}