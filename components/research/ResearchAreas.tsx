import SectionHeader from "@/components/SectionHeader";

export default function ResearchAreas() {
  return (
    <section className="mt-24">

      <SectionHeader title="Research Areas" />

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            Explainable Artificial Intelligence
          </h3>

          <p>
            Interpretable machine learning models for transparent
            and trustworthy AI systems.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            Cybersecurity Analytics
          </h3>

          <p>
            AI-driven threat detection, intrusion detection,
            and cyber defence systems.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            Intelligent Network Systems
          </h3>

          <p>
            Secure and adaptive communication infrastructures.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            Healthcare AI
          </h3>

          <p>
            Explainable disease prediction and anomaly detection.
          </p>
        </div>

      </div>

    </section>
  );
}