import SectionHeader from "@/components/SectionHeader";

export default function CoursesTaught() {
  return (
    <section className="mt-24">

      <SectionHeader title="Courses Taught" />

      <div className="grid gap-6">

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold">
            MTH 101 – Elementary Mathematics I
          </h3>

          <p className="text-gray-600 mt-2">
            Algebra and Trigonometry
          </p>

          <p className="text-gray-500 mt-2">
            Autumn 2024 • Spring 2024
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold">
            MTH 102 – Elementary Mathematics II
          </h3>

          <p className="text-gray-600 mt-2">
            Calculus
          </p>

          <p className="text-gray-500 mt-2">
            Autumn 2024 • Spring 2024
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold">
            PHY 211 – Linear Algebra I
          </h3>

          <p className="text-gray-500 mt-2">
            Spring 2024
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold">
            IFT 112 – Introduction to Information Technology
          </h3>

          <p className="text-gray-500 mt-2">
            2024
          </p>
        </div>

      </div>

    </section>
  );
}