import SectionHeader from "@/components/SectionHeader";
import FeaturedProject from "./FeaturedProject";

export default function ResearchProjects() {
  return (
    <section className="mt-24">

      <SectionHeader title="Research Projects" />

      <div className="space-y-8">

        <FeaturedProject
          title="Explainable Anomaly Detection in Healthcare Systems"
          description="Development of interpretable deep learning models for cardiovascular disease prediction using explainable AI techniques."
          technologies={[
            "Python",
            "TensorFlow",
            "SHAP",
            "LIME",
            "Integrated Gradients",
          ]}
        />

        <FeaturedProject
          title="Intrusion Detection in Intent-Driven Networks"
          description="Research project investigating CNN, LSTM, and hybrid deep learning architectures for intelligent intrusion detection."
          technologies={[
            "Python",
            "TensorFlow",
            "CNN",
            "LSTM",
            "CIC-IDS2017",
          ]}
        />

      </div>

    </section>
  );
}