import SectionHeader from "@/components/SectionHeader";

export default function ResearchAreas() {
  return (
    <section className="mt-16 md:mt-24">

      <SectionHeader title="Research Areas" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="border dark:border-gray-700 rounded-lg p-5 md:p-6 bg-white dark:bg-gray-900">
          <h3 className="text-lg md:text-xl font-semibold mb-3">
            AI-Driven Cybersecurity
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-7">
            Machine learning and deep learning approaches for intrusion
            detection, anomaly detection, and intelligent cyber defence.
          </p>
        </div>

        <div className="border dark:border-gray-700 rounded-lg p-5 md:p-6 bg-white dark:bg-gray-900">
          <h3 className="text-lg md:text-xl font-semibold mb-3">
            Explainable Artificial Intelligence
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-7">
            Developing transparent and trustworthy AI systems using SHAP,
            LIME, Anchors, and Integrated Gradients.
          </p>
        </div>

        <div className="border dark:border-gray-700 rounded-lg p-5 md:p-6 bg-white dark:bg-gray-900">
          <h3 className="text-lg md:text-xl font-semibold mb-3">
            Intelligent Network Systems
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-7">
            Research on scalable, adaptive, and secure network
            architectures for modern communication environments.
          </p>
        </div>

        <div className="border dark:border-gray-700 rounded-lg p-5 md:p-6 bg-white dark:bg-gray-900">
          <h3 className="text-lg md:text-xl font-semibold mb-3">
            Healthcare AI
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-7">
            Explainable anomaly detection and predictive modelling for
            healthcare applications.
          </p>
        </div>

      </div>

    </section>
  );
}