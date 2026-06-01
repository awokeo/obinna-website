import {
  FaLinkedin,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";

import { SiOrcid } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Left */}
          <div>
            <h3 className="font-serif text-2xl">
              Obinna Awoke
            </h3>

            <p className="text-gray-600 mt-2">
              AI Security Researcher
            </p>

            <p className="text-gray-600">
              MEng Digital Security & Networks
            </p>

            <p className="text-gray-600">
              Institut Supérieur d'Électronique de Paris (ISEP)
            </p>
          </div>

          {/* Right */}
          <div>
            <h4 className="font-semibold mb-4">
              Connect
            </h4>

            <div className="space-y-3">

              <a
                href="mailto:obinna.awoke@gmail.com"
                className="flex items-center gap-3 text-gray-600 hover:text-red-700 transition"
              >
                <MdEmail size={20} />
                <span>obinna.awoke@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/obinnakev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-red-700 transition"
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/awokeo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-red-700 transition"
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>

              <a
                href="https://scholar.google.com/citations?user=I-Ewzb4AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-red-700 transition"
              >
                <FaGoogle size={20} />
                <span>Google Scholar</span>
              </a>

              <a
                href="https://orcid.org/0009-0004-6632-2384"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-red-700 transition"
              >
                <SiOrcid size={20} />
                <span>ORCID</span>
              </a>

            </div>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t text-sm text-gray-500">
          © {new Date().getFullYear()} Obinna Awoke. All rights reserved.
        </div>

      </div>
    </footer>
  );
}