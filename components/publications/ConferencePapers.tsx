import SectionHeader from "@/components/SectionHeader";

export default function ConferencePapers() {
  return (
    <section className="mt-20">
      <SectionHeader title="Conference Papers" />

      <div className="border rounded-lg p-6 hover:shadow-md transition">

        <p className="font-semibold text-gray-900">
          Awoke, O. J., Osunde, A. A., Muhammed, I. M., & Faluyi, S. G.
        </p>

        <a
          href="https://doi.org/10.1145/3803291.3803309"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block text-xl font-semibold hover:text-red-700 transition"
        >
          A Multi-tier Explainable AI Architecture for the Prediction of
          Cardiovascular Diseases
        </a>

        <p className="mt-3 text-gray-600">
          9th International Conference on Information and Computer Technologies
          (ICICT 2026)
        </p>

        <p className="mt-3 text-sm text-gray-500">
          DOI:{" "}
          <a
            href="https://doi.org/10.1145/3803291.3803309"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-700 hover:underline"
          >
            10.1145/3803291.3803309
          </a>
        </p>

      </div>
    </section>
  );
}