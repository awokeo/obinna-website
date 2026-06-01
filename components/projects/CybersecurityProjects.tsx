import SectionHeader from "@/components/SectionHeader";
import FeaturedProject from "./FeaturedProject";

export default function CybersecurityProjects() {
  return (
    <section className="mt-24">

      <SectionHeader title="Cybersecurity Projects" />

      <div className="space-y-8 text-justify">

        <FeaturedProject
          title="Android Banking Malware Analysis"
          description="Static and dynamic malware analysis using Frida and Ghidra to investigate malicious Android banking applications."
          technologies={[
            "Frida",
            "Ghidra",
            "Android",
            "Reverse Engineering",
          ]}
        />

        <FeaturedProject
          title="Packet Anomaly Detection System"
          description="Python-based network anomaly detection system for identifying suspicious network behaviour in packet captures."
          technologies={[
            "Python",
            "Wireshark",
            "PCAP",
            "Cybersecurity",
          ]}
        />

      </div>

    </section>
  );
}