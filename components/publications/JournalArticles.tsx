import SectionHeader from "@/components/SectionHeader";

export default function JournalArticles() {
  return (
    <section className="mt-20 mb-20">

      <SectionHeader title="Journal Articles" />

      <div className="border rounded-lg p-6">

        <p className="font-semibold">
          Esther, C. C., Ursula, E., Chukwuemeka, A., & Awoke, O. (2025)
        </p>

        <p className="mt-2">
          IoT Based Smart Irrigation System Using Node MCU 8266 and Soil Moisture Sensor.
        </p>

        <p className="text-gray-600 mt-2">
          International Journal of Engineering Applied Sciences and Technology.
        </p>

      </div>

    </section>
  );
}