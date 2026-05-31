import SectionHeader from "@/components/SectionHeader";

export default function ScholarProfile() {
  return (
    <section>

      <SectionHeader title="Publications" />

      <p className="text-lg leading-8 text-gray-700">
        My research spans AI-driven cybersecurity,
        explainable artificial intelligence,
        intrusion detection systems,
        intelligent network architectures,
        healthcare AI, and educational data analytics.
      </p>

      <div className="mt-8 flex gap-4">

        <a
          href="#"
          className="border px-5 py-3 rounded"
        >
          Google Scholar
        </a>

        <a
          href="#"
          className="border px-5 py-3 rounded"
        >
          ORCID
        </a>

      </div>

    </section>
  );
}