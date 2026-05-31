import SectionHeader from "@/components/SectionHeader";

export default function NewsSection() {
  return (
    <section className="mt-24">

      <SectionHeader title="Latest News" />

      <div className="space-y-6">

        <div>
          <p className="text-red-700 font-semibold">
            Apr 2026
          </p>

          <p>
            Paper accepted at ICICT 2026 on Explainable AI
            for Cardiovascular Disease Prediction.
          </p>
        </div>

        <div>
          <p className="text-red-700 font-semibold">
            Jan 2026
          </p>

          <p>
            Started XAI-AD Research Project at LISITE, ISEP.
          </p>
        </div>

      </div>

    </section>
  );
}