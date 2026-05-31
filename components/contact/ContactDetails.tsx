import SectionHeader from "@/components/SectionHeader";

export default function ContactDetails() {
  return (
    <section className="mt-24">

      <SectionHeader title="Contact Information" />

      <div className="space-y-8">

        <div>
          <h3 className="font-semibold text-lg">
            Email
          </h3>

          <p className="text-gray-700">
            obinna.awoke@gmail.com
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">
            Location
          </h3>

          <p className="text-gray-700">
            Paris, France
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">
            Research Areas
          </h3>

          <p className="text-gray-700">
            Cybersecurity, Explainable AI, Machine Learning,
            Intelligent Network Systems, Healthcare AI
          </p>
        </div>

      </div>

    </section>
  );
}