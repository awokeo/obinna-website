import ResearchCard from "@/components/ResearchCard";
import SectionHeader from "@/components/SectionHeader";

export default function ResearchInterests() {
  return (
    <section className="mt-20">

      <SectionHeader title="Research Interests" />

      <div className="grid gap-6 md:grid-cols-2">

        <ResearchCard
          title="AI-Driven Cybersecurity"
          description="Machine learning and deep learning approaches for intrusion detection, anomaly detection, and intelligent cyber defence."
        />

        <ResearchCard
          title="Explainable Artificial Intelligence"
          description="Developing transparent and trustworthy AI systems using SHAP, LIME, Anchors, and Integrated Gradients."
        />

        <ResearchCard
          title="Intelligent Network Systems"
          description="Research on scalable, adaptive, and secure network architectures for modern communication environments."
        />

        <ResearchCard
          title="Healthcare AI"
          description="Explainable anomaly detection and predictive modelling for healthcare applications."
        />

      </div>

    </section>
  );
}