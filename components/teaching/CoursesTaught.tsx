import SectionHeader from "@/components/SectionHeader";

export default function CoursesTaught() {
  return (
    <section className="mt-24">

      <SectionHeader title="Courses Taught" />

      <div className="mb-8">
        <a
          href="https://miva.university"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold text-red-700 hover:underline"
        >
          Miva Open University
        </a>

        <p className="text-gray-500 mt-2">
          Abuja, Nigeria
        </p>
      </div>

      <div className="border-t">

        <div className="grid grid-cols-12 gap-4 py-6 border-b">
          <div className="col-span-12 md:col-span-3 font-semibold text-red-700">
            MTH 101
          </div>

          <div className="col-span-12 md:col-span-5">
            Elementary Mathematics I (Algebra & Trigonometry)
          </div>

          <div className="col-span-12 md:col-span-4 text-gray-500 md:text-right">
            Spring 2024 • Autumn 2024
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 py-6 border-b">
          <div className="col-span-12 md:col-span-3 font-semibold text-red-700">
            MTH 102
          </div>

          <div className="col-span-12 md:col-span-5">
            Elementary Mathematics II (Calculus)
          </div>

          <div className="col-span-12 md:col-span-4 text-gray-500 md:text-right">
            Spring 2024 • Autumn 2024
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 py-6 border-b">
          <div className="col-span-12 md:col-span-3 font-semibold text-red-700">
            PHY 211
          </div>

          <div className="col-span-12 md:col-span-5">
            Linear Algebra I
          </div>

          <div className="col-span-12 md:col-span-4 text-gray-500 md:text-right">
            Spring 2024
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 py-6 border-b">
          <div className="col-span-12 md:col-span-3 font-semibold text-red-700">
            IFT 112
          </div>

          <div className="col-span-12 md:col-span-5">
            Introduction to Information Technology
          </div>

          <div className="col-span-12 md:col-span-4 text-gray-500 md:text-right">
            Spring 2024
          </div>
        </div>

      </div>

    </section>
  );
}