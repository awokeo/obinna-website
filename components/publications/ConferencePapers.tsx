import SectionHeader from "@/components/SectionHeader";

export default function ConferencePapers() {
  return (
    <section className="mt-20">

      <SectionHeader title="Conference Papers" />

      <div className="space-y-8">

        <p className="border rounded-lg p-6">
          Awoke, O. J., Osunde, A. A., Muhammed, I. M., & Faluyi, S. G.
        </p>

        <p className="font-semibold">
          <a
            href="https://doi.org/10.1145/3803291.3803309"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block font-medium hover:text-red-700 transition"
          >
            A Multi-tier Explainable AI Architecture for the Prediction of
            Cardiovascular Diseases
          </a>
        </p>

        <p className="text-gray-600 mt-2">
          9th International Conference on Information and Computer Technologies (ICICT 2026).
        </p>

        <p className="text-gray-600 mt-2">
          DOI:{" "}
          <a
            href="https://doi.org/10.1145/3803291.3803309"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-red-700 hover:underline"
          >
            10.1145/3803291.3803309
          </a>
        </p>

      </div>

    </section>
  );
}