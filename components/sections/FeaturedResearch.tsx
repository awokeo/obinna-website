import SectionHeader from "@/components/SectionHeader";

export default function FeaturedResearch() {
  return (
    <section className="mt-24">

      <SectionHeader title="Featured Research" />

      <div className="space-y-8">

        <div className="border rounded-lg p-8">
          <h3 className="text-2xl font-serif mb-4">
            Explainable Anomaly Detection in Healthcare Systems
          </h3>

          <p className="leading-8 text-gray-700">
            Investigating interpretable deep learning models for
            cardiovascular disease prediction using SHAP, LIME,
            Anchors, Integrated Gradients, and LLM-based explanations.
          </p>
        </div>

        <div className="border rounded-lg p-8">
          <h3 className="text-2xl font-serif mb-4">
            Intrusion Detection in Intent-Driven Networks
          </h3>

          <p className="leading-8 text-gray-700">
            Fusion of CNN, LSTM, and hybrid deep-learning
            architectures for real-time intrusion detection
            using CIC-IDS2017 datasets.
          </p>
        </div>

        <div className="border rounded-lg p-8">
          <h3 className="text-2xl font-serif mb-4">
            Zero-Day Attack Detection Using Transformer Embeddings
          </h3>

          <p className="leading-8 text-gray-700">
            Exploring transformer-based representations and
            explainable AI for advanced threat detection
            in modern network environments.
          </p>
        </div>

      </div>

    </section>
  );
}