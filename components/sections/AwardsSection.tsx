import SectionHeader from "@/components/SectionHeader";

export default function AwardsSection() {
  return (
    <section className="mt-24">

      <SectionHeader title="Awards & Recognition" />

      <div className="space-y-6">

        <div className="border-l-4 border-red-700 pl-6">
          <h3 className="text-xl font-semibold">
            Best Graduating Student in Computer Science
          </h3>

          <p className="text-gray-600">
            African University of Science and Technology, Abuja | Jan 2025
          </p>
        </div>

        <div className="border-l-4 border-red-700 pl-6">
          <h3 className="text-xl font-semibold">
            Professor Charles Ejike Chidume Best Graduating Student Award
          </h3>

          <p className="text-gray-600">
            African University of Science and Technology, Abuja | Jan 2025
          </p>
        </div>

        <div className="border-l-4 border-red-700 pl-6">
          <h3 className="text-xl font-semibold">
            PTDF Overseas Scholarship
          </h3>

          <p className="text-gray-600">
            Fully Funded International Scholarship | Sept 2023
          </p>
        </div>

      </div>

    </section>
  );
}