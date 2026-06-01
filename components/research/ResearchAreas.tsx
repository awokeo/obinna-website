import SectionHeader from "@/components/SectionHeader";

export default function ResearchAreas() {
  return (
    <section className="mt-24">

      <SectionHeader title="Research Areas" />

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            AI-Driven Cybersecurity
          </h3>

          <p>
            Machine learning and deep learning approaches for intrusion detection, 
            anomaly detection, and intelligent cyber defence.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            Explainable Artificial Intelligence
          </h3>

          <p>
            Developing transparent and trustworthy AI systems using SHAP, LIME, 
            Anchors, and Integrated Gradients.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            Intelligent Network Systems
          </h3>

          <p>
            Research on scalable, adaptive, and secure network architectures for 
            modern communication environments.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            Healthcare AI
          </h3>

          <p>
            Explainable anomaly detection and predictive modelling for healthcare applications.
          </p>
        </div>

      </div>

    </section>
  );
}