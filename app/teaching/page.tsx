import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import TeachingPhilosophy from "@/components/teaching/TeachingPhilosophy";
import TeachingExperience from "@/components/teaching/TeachingExperience";
import CoursesTaught from "@/components/teaching/CoursesTaught";
import StudentMentorship from "@/components/teaching/StudentMentorship";
import TeachingStats from "@/components/teaching/TeachingStats";

export default function TeachingPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-12 gap-12">

          <aside className="col-span-12 lg:col-span-4 xl:col-span-3">
            <Sidebar />
          </aside>

          <div className="col-span-12 lg:col-span-8 xl:col-span-9">

            <TeachingPhilosophy />

            <TeachingExperience />

            <CoursesTaught />

            <StudentMentorship />

          </div>

        </div>

      </main>
    </>
  );
}