import SectionHeader from "@/components/SectionHeader";

export default function TeachingExperience() {
  return (
    <section className="mt-24">

      <SectionHeader title="Teaching Experience" />

      <div className="space-y-10">

        {/* Graduate Assistant */}
        <div className="border-l-4 border-red-700 pl-6">
          <h3 className="text-xl font-semibold">
            Graduate Assistant
          </h3>

          <p className="text-gray-600">
            Miva Open University, Abuja, Nigeria
          </p>

          <p className="text-gray-500">
            Jan 2024 – Present
          </p>

          <p className="mt-3 text-gray-700 leading-7 text-justify">
            Support teaching and learning activities within the School of
            Computing, facilitate tutorials and practical sessions, assist
            with student assessments, and provide academic guidance to
            undergraduate students.
          </p>
        </div>

        {/* Academic Advisor */}
        <div className="border-l-4 border-red-700 pl-6">
          <h3 className="text-xl font-semibold">
            Academic Advisor
          </h3>

          <p className="text-gray-600">
            Miva Open University, Abuja, Nigeria
          </p>

          <p className="text-gray-500">
            Sept 2023 – Dec 2023
          </p>

          <p className="mt-3 text-gray-700 leading-7 text-justify">
            Provided academic and career guidance to students, monitored
            academic progress, supported course planning, and assisted
            learners in achieving their educational objectives.
          </p>
        </div>

        {/* Associate Lecturer */}
        <div className="border-l-4 border-red-700 pl-6">
          <h3 className="text-xl font-semibold">
            Associate Lecturer
          </h3>

          <p className="text-gray-600">
            Federal University of Lafia, Nigeria
          </p>

          <p className="text-gray-500">
            Oct 2018 – Jan 2020
          </p>

          <p className="mt-3 text-gray-700 leading-7 text-justify">
            Delivered lectures in Computer Science courses, developed
            instructional materials, supervised laboratory sessions,
            assessed student performance, and mentored undergraduate
            students in academic and project work.
          </p>
        </div>

        {/* Graduate Assistant Intern */}
        <div className="border-l-4 border-red-700 pl-6">
          <h3 className="text-xl font-semibold">
            Graduate Assistant Intern
          </h3>

          <p className="text-gray-600">
            Federal University of Lafia, Nigeria
          </p>

          <p className="text-gray-500">
            Jan 2018 – Oct 2018
          </p>

          <p className="mt-3 text-gray-700 leading-7 text-justify">
            Assisted academic staff in teaching, grading assignments,
            facilitating tutorials, supporting practical sessions, and
            providing learning support to undergraduate students.
          </p>
        </div>

      </div>

    </section>
  );
}