import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";

import FeaturedResearch from "@/components/sections/FeaturedResearch";
import NewsSection from "@/components/sections/NewsSection";
import AwardsSection from "@/components/sections/AwardsSection";
import EducationSection from "@/components/sections/EducationSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Sidebar */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <section className="lg:col-span-8 xl:col-span-9">

            <Hero />

            <FeaturedResearch />

            <NewsSection />

            <AwardsSection />

            <EducationSection />

          </section>

        </div>
      </main>
    </>
  );
}