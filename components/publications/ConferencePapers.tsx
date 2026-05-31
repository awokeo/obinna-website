import SectionHeader from "@/components/SectionHeader";

export default function ConferencePapers() {
  return (
    <section className="mt-20">

      <SectionHeader title="Conference Papers" />

      <div className="border rounded-lg p-6">

        <p className="font-semibold">
          Awoke, O. J., Osunde, A. A., Muhammed, I. M., & Faluyi, S. G.
        </p>

        <p className="mt-2">
          A Multi-tier Explainable AI Architecture for the Prediction of Cardiovascular Diseases.
        </p>

        <p className="text-gray-600 mt-2">
          International Conference on Information and Computer Technologies (ICICT 2026).
        </p>

      </div>

    </section>
  );
}