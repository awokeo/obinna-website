import SectionHeader from "@/components/SectionHeader";

export default function BookChapters() {
  return (
    <section className="mt-20">

      <SectionHeader title="Book Chapters" />

      <div className="space-y-8">

        {/* Chapter 1 */}
        <div className="border rounded-lg p-6">

          <p className="font-semibold">
            Awoke, O. J., Prasad, R., Godcares, N., & Saiyed, N. (2025)
          </p>

          <a
            href="https://doi.org/10.1201/9781032714813-4"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block font-medium hover:text-red-700 transition"
          >
            Fusion of Deep Architectures in Intent-Driven Networks for Intrusion Detection
          </a>

          <p className="text-gray-600 mt-2">
            In <em>Digital Defense: Harnessing the Power of Artificial Intelligence
            for Cybersecurity and Digital Forensics</em> (1st ed.). CRC Press.
          </p>

          <a
            href="https://doi.org/10.1201/9781032714813-4"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-red-700 hover:underline"
          >
            DOI: 10.1201/9781032714813-4
          </a>

        </div>

        {/* Chapter 2 */}
        <div className="border rounded-lg p-6">

          <p className="font-semibold">
            Ajaegbo, N. G., Prasad, R., Abdullahi, H. I., & Awoke, O. (2026)
          </p>

          <a
            href="https://doi.org/10.4018/979-8-3373-7946-3.ch004"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block font-medium hover:text-red-700 transition"
          >
            A Computational Framework for Inclusive Assessment and Predictive
            Student Retention Models in Higher Education
          </a>

          <p className="text-gray-600 mt-2">
            In R. Sam, M. Serey, & S. Em (Eds.),
            <em> Student Enrollment and Retention Strategies to Reduce
            Dropout in Higher Education</em> (pp. 95–134).
            IGI Global Scientific Publishing.
          </p>

          <a
            href="https://doi.org/10.4018/979-8-3373-7946-3.ch004"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-red-700 hover:underline"
          >
            DOI: 10.4018/979-8-3373-7946-3.ch004
          </a>

        </div>

      </div>

    </section>
  );
}