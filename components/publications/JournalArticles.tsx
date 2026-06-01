import SectionHeader from "@/components/SectionHeader";

export default function JournalArticles() {
  return (
    <section className="mt-20 mb-20">

      <SectionHeader title="Journal Articles" />

      <div className="border rounded-lg p-6">

        <p className="font-semibold">
          Esther, C. C., Ursula, E., Chukwuemeka, A., & Awoke, O. (2025)
        </p>

        <a
          href="https://doi.org/10.33564/IJEAST.2025.v10i03.002"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block font-medium hover:text-red-700 transition"
        >
          IoT Based Smart Irrigation System Using Node MCU 8266 and Soil Moisture Sensor
        </a>

        <p className="text-gray-600 mt-2">
          <em>International Journal of Engineering Applied Sciences and Technology</em>,
          10(3), 5–10.
        </p>

        <a
          href="https://doi.org/10.33564/IJEAST.2025.v10i03.002"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-red-700 hover:underline"
        >
          DOI: 10.33564/IJEAST.2025.v10i03.002
        </a>

      </div>

    </section>
  );
}