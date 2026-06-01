import Image from "next/image";
import { FaLinkedin, FaGithub, FaOrcid } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="space-y-10">

      {/* Profile */}
      <section>

        <Image
          src="/obinna.jpeg"
          width={400}
          height={500}
          alt="Obinna Awoke"
          priority
          className="rounded-lg w-full object-cover shadow-sm"
        />

        <h1 className="text-3xl md:text-4xl font-serif mt-6 leading-tight">
          Obinna Awoke
        </h1>

        <h2 className="text-red-700 text-lg md:text-xl mt-2">
          AI Security Researcher
        </h2>

        <div className="mt-5 text-gray-600 dark:text-gray-400 space-y-1 text-sm md:text-base">
          <p>MEng Digital Security & Networks</p>
          <p>Institut Supérieur d&apos;Électronique de Paris (ISEP)</p>
          <p>Paris, France</p>
        </div>

      </section>

      {/* Contact */}
      <section>

        <h3 className="font-semibold text-lg mb-4">
          Contact
        </h3>

        <div className="space-y-3">

          <a
            href="mailto:obinna.awoke@gmail.com"
            className="flex items-center gap-3 hover:text-red-700 transition"
          >
            <MdEmail size={20} />
            <span className="break-all">
              obinna.awoke@gmail.com
            </span>
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

      </section>

      {/* Academic Highlights */}
      <section>

        <h3 className="font-semibold text-lg mb-4">
          Academic Highlights
        </h3>

        <div className="border dark:border-gray-700 rounded-lg p-5 bg-gray-50 dark:bg-gray-900">

          <ul className="space-y-3 text-sm md:text-base">
            <li>🏆 Best Graduating Student</li>
            <li>🎓 MSc Computer Science (Distinction)</li>
            <li>🎓 BSc Computer Science (First Class Honours)</li>
            <li>📚 Published Author & Researcher</li>
            <li>🌍 PTDF Overseas Scholar</li>
          </ul>

        </div>

      </section>

      {/* Research Interests */}
      <section>

        <h3 className="font-semibold text-lg mb-4">
          Research Interests
        </h3>

        <div className="flex flex-wrap gap-2">

          {[
            "Cybersecurity",
            "Explainable AI",
            "Machine Learning",
            "Healthcare AI",
            "Network Security",
          ].map((item) => (
            <span
              key={item}
              className="border dark:border-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}

        </div>

      </section>

      {/* CV Download */}
      <section>

        <a
          href="/Obinna_Awoke_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            block
            text-center
            rounded-lg
            border
            dark:border-gray-700
            p-4
            font-medium
            transition
            hover:bg-black
            hover:text-white
            dark:hover:bg-white
            dark:hover:text-black
          "
        >
          📄 Download CV
        </a>

      </section>

    </div>
  );
}