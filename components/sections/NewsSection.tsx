import SectionHeader from "@/components/SectionHeader";

export default function NewsSection() {
  return (
    <section className="mt-24">

      <SectionHeader title="Latest News" />

      <div className="space-y-6">

        <div>
          <p className="text-red-700 font-semibold">
            May 2026
          </p>

          <p>
            Published a book chapter titled
            <span className="italic">
              {" "}
              "A Computational Framework for Inclusive Assessment and Predictive Student Retention Models in Higher Education"
            </span>
            {" "}in IGI Global Scientific Publishing.
          </p>
        </div>

        <div>
          <p className="text-red-700 font-semibold">
            Mar 2026
          </p>

          <p>
            Paper presented at ICICT 2026 on Explainable AI
            for Cardiovascular Disease Prediction.
          </p>
        </div>

      </div>

    </section>
  );
}