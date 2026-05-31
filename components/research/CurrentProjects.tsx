import SectionHeader from "@/components/SectionHeader";

export default function CurrentProjects() {
  return (
    <section className="mt-24">

      <SectionHeader title="Current Research Projects" />

      <div className="space-y-8">

        <div className="border rounded-lg p-8">
          <h3 className="text-2xl font-serif mb-4">
            Explainable Anomaly Detection in Healthcare Systems
          </h3>

          <p>
            Development of interpretable machine learning
            models for cardiovascular disease prediction
            using SHAP, LIME, Anchors, and Integrated Gradients.
          </p>
        </div>

        <div className="border rounded-lg p-8">
          <h3 className="text-2xl font-serif mb-4">
            Intelligent Intrusion Detection in Intent-Driven Networks
          </h3>

          <p>
            Deep-learning-based intrusion detection systems
            leveraging CNN and LSTM architectures for real-time
            cyber threat detection.
          </p>
        </div>

      </div>

    </section>
  );
}