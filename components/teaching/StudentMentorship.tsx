import SectionHeader from "@/components/SectionHeader";

export default function StudentMentorship() {
  return (
    <section className="mt-24 mb-20">

      <SectionHeader title="Student Mentorship" />

      <p className="leading-8 text-gray-700 text-justify">
        Beyond classroom instruction, I actively mentor students
        in academic development, research methodology, project
        design, software development, cybersecurity, and career
        planning. My mentorship philosophy focuses on nurturing
        critical thinking, problem-solving abilities, and lifelong
        learning while preparing students for graduate studies,
        research careers, and industry opportunities.
      </p>

      <div className="mt-8 border-l-4 border-red-700 pl-6">

        <p className="italic text-gray-600 text-justify">
          "Education is not simply the transfer of knowledge,
          but the development of analytical thinking,
          creativity, and the confidence to solve real-world problems."
        </p>

      </div>

    </section>
  );
}