import SectionHeader from "@/components/SectionHeader";

export default function BookChapters() {
  return (
    <section className="mt-20">

      <SectionHeader title="Book Chapters" />

      <div className="space-y-8">

        <div className="border rounded-lg p-6">

          <p className="font-semibold">
            Awoke, O. J., Prasad, R., Godcares, N., & Saiyed, N. (2025)
          </p>

          <p className="mt-2">
            Fusion of Deep Architectures in Intent-Driven Networks for Intrusion Detection.
          </p>

          <p className="text-gray-600 mt-2">
            Digital Defense: Harnessing the Power of Artificial Intelligence for Cybersecurity and Digital Forensics.
          </p>

        </div>

        <div className="border rounded-lg p-6">

          <p className="font-semibold">
            Ajaegbo, N. G., Prasad, R., Abdullahi, H. I., & Awoke, O. (2026)
          </p>

          <p className="mt-2">
            A Computational Framework for Inclusive Assessment and Predictive Student Retention Models.
          </p>

          <p className="text-gray-600 mt-2">
            IGI Global Scientific Publishing.
          </p>

        </div>

      </div>

    </section>
  );
}