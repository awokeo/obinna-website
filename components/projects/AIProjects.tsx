import SectionHeader from "@/components/SectionHeader";
import FeaturedProject from "./FeaturedProject";

export default function AIProjects() {
  return (
    <section className="mt-24 mb-20">

      <SectionHeader title="AI & Data Science Projects" />

      <div className="space-y-8">

        <FeaturedProject
          title="Student Retention Prediction Framework"
          description="Development of predictive models for student retention and inclusive assessment in higher education."
          technologies={[
            "Machine Learning",
            "Python",
            "Educational Data Mining",
          ]}
        />

        <FeaturedProject
          title="IoT Smart Irrigation System"
          description="IoT-enabled irrigation platform using NodeMCU and soil moisture sensors for intelligent agricultural automation."
          technologies={[
            "IoT",
            "NodeMCU",
            "Sensors",
            "Embedded Systems",
          ]}
        />

      </div>

    </section>
  );
}