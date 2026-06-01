import SectionHeader from "@/components/SectionHeader";

export default function EducationSection() {
  return (
    <section className="mt-24 mb-20">

      <SectionHeader title="Education" />

      <div className="space-y-10">

        <div>
          <h3 className="text-2xl font-serif">
            Master of Engineering (Diplôme d'Ingénieur)
          </h3>

          <p className="font-medium">
            Digital Security & Networks
          </p>

          <p className="text-gray-600">
            Institut Supérieur d'Électronique de Paris (ISEP), France
          </p>

          <p className="text-gray-500">
            2024 – 2026
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-serif">
            Master of Science
          </h3>

          <p className="font-medium">
            Computer Science (Distinction)
          </p>

          <p className="text-gray-600">
            African University of Science and Technology, Abuja - Nigeria
          </p>

          <p className="text-gray-500">
            2022 – 2024
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-serif">
            Bachelor of Science
          </h3>

          <p className="font-medium">
            Computer Science (First Class Honours)
          </p>

          <p className="text-gray-600">
            Ebonyi State University, Nigeria
          </p>

          <p className="text-gray-500">
            2012 – 2016
          </p>
        </div>

      </div>

    </section>
  );
}