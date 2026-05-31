import Image from "next/image";
import { FaLinkedin, FaGithub, FaOrcid } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

export default function Sidebar() {
  return (
    <div>

      {/* Profile Photo */}
      <Image
        src="/obinna.jpeg"
        width={300}
        height={350}
        alt="Obinna Awoke"
        className="rounded-md w-full object-cover"
      />

      {/* Name & Title */}
      <h1 className="text-4xl font-serif mt-6 leading-tight">
        Obinna Awoke
      </h1>

      <h2 className="text-red-700 text-xl mt-3">
        AI Security Researcher
      </h2>

      {/* Institution */}
      <div className="mt-6 text-gray-600 space-y-2">
        <p>Institut Supérieur d'Électronique de Paris (ISEP)</p>
        <p>MEng Digital Security & Networks</p>
        <p>Paris, France</p>
      </div>

      {/* Contact & Academic Profiles */}
      <div className="mt-8 space-y-4">

        <a
          href="mailto:obinna.awoke@gmail.com"
          className="flex items-center gap-3 hover:text-red-700 transition"
        >
          <span>📧</span>
          <span>obinna.awoke@gmail.com</span>
        </a>

        <a
          href="https://linkedin.com/in/obinnakev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-red-700 transition"
        >
          <FaLinkedin size={20} />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/awokeo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-red-700 transition"
        >
          <FaGithub size={20} />
          <span>GitHub</span>
        </a>

        <a
          href="https://scholar.google.com/citations?user=I-Ewzb4AAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-red-700 transition"
        >
          <SiGooglescholar size={20} />
          <span>Google Scholar</span>
        </a>

        <a
          href="https://orcid.org/0009-0004-6632-2384"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-red-700 transition"
        >
          <FaOrcid size={20} />
          <span>ORCID</span>
        </a>

      </div>

      {/* Academic Highlights */}
      <section className="mt-10">

        <h3 className="font-semibold text-lg mb-4">
          Academic Highlights
        </h3>

        <div className="border rounded-lg p-5 space-y-4 bg-gray-50">

          <p>🏆 Best Graduating Student</p>

          <p>🎓 MSc Computer Science (Distinction)</p>

          <p>🎓 BSc Computer Science (First Class Honours)</p>

          <p>📚 Published Author & Researcher</p>

          <p>🌍 PTDF Overseas Scholar</p>

        </div>

      </section>

      {/* Research Interests */}
      <section className="mt-10">

        <h3 className="font-semibold text-lg mb-4">
          Research Interests
        </h3>

        <div className="flex flex-wrap gap-2">

          <span className="border px-3 py-1 rounded text-sm">
            Cybersecurity
          </span>

          <span className="border px-3 py-1 rounded text-sm">
            Explainable AI
          </span>

          <span className="border px-3 py-1 rounded text-sm">
            Machine Learning
          </span>

          <span className="border px-3 py-1 rounded text-sm">
            Healthcare AI
          </span>

          <span className="border px-3 py-1 rounded text-sm">
            Network Security
          </span>

        </div>

      </section>

      {/* CV Download */}
      <section className="mt-10">

        <a
          href="/Obinna_Awoke_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center border rounded-lg p-4 hover:bg-black hover:text-white transition"
        >
          📄 Download CV
        </a>

      </section>

    </div>
  );
}