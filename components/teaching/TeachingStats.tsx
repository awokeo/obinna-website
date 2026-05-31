export default function TeachingStats() {
  return (
    <section className="mt-12">

      <div className="grid gap-6 md:grid-cols-4">

        <div className="border rounded-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-red-700">
            7+
          </h3>

          <p className="mt-2 text-gray-600">
            Years of Teaching Experience
          </p>
        </div>

        <div className="border rounded-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-red-700">
            4
          </h3>

          <p className="mt-2 text-gray-600">
            Courses Taught
          </p>
        </div>

        <div className="border rounded-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-red-700">
            2
          </h3>

          <p className="mt-2 text-gray-600">
            Universities Served
          </p>
        </div>

        <div className="border rounded-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-red-700">
            100+
          </h3>

          <p className="mt-2 text-gray-600">
            Students Mentored
          </p>
        </div>

      </div>

    </section>
  );
}