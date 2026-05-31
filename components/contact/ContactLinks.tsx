import SectionHeader from "@/components/SectionHeader";

export default function ContactLinks() {
  return (
    <section className="mt-24 mb-20">

      <SectionHeader title="Professional Profiles" />

      <div className="grid md:grid-cols-2 gap-6">

        <a
          href="https://github.com/awokeo"
          target="_blank"
          className="border rounded-lg p-6 hover:shadow-md transition"
        >
          <h3 className="font-semibold text-lg">
            GitHub
          </h3>

          <p className="text-gray-600 mt-2">
            View projects, code repositories, and technical work.
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/obinnakev"
          target="_blank"
          className="border rounded-lg p-6 hover:shadow-md transition"
        >
          <h3 className="font-semibold text-lg">
            LinkedIn
          </h3>

          <p className="text-gray-600 mt-2">
            Connect professionally and view career updates.
          </p>
        </a>

        <a
          href="https://scholar.google.com/citations?user=I-Ewzb4AAAAJ&hl=en"
          target="_blank"
          className="border rounded-lg p-6 hover:shadow-md transition"
        >
          <h3 className="font-semibold text-lg">
            Google Scholar
          </h3>

          <p className="text-gray-600 mt-2">
            Explore publications, citations, and research impact.
          </p>
        </a>

        <a
          href="https://orcid.org/0009-0004-6632-2384"
          target="_blank"
          className="border rounded-lg p-6 hover:shadow-md transition"
        >
          <h3 className="font-semibold text-lg">
            ORCID
          </h3>

          <p className="text-gray-600 mt-2">
            View academic profile and research identifiers.
          </p>
        </a>

      </div>

    </section>
  );
}