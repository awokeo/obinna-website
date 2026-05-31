import SectionHeader from "@/components/SectionHeader";

export default function ResearchMethodology() {
  return (
    <section className="mt-24 mb-20">

      <SectionHeader title="Research Methodology" />

      <div className="grid md:grid-cols-3 gap-6">

        <div className="border rounded-lg p-6">
          <h3 className="font-semibold mb-2">
            Data Collection
          </h3>

          <p>
            Large-scale cybersecurity and healthcare datasets.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="font-semibold mb-2">
            AI Modelling
          </h3>

          <p>
            Deep learning, machine learning, and transformer models.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="font-semibold mb-2">
            Explainability
          </h3>

          <p>
            SHAP, LIME, Anchors, and interpretable AI frameworks.
          </p>
        </div>

      </div>

    </section>
  );
}