import Link from "next/link";

import {
  FaLinkedin,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";

import { SiOrcid } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t mt-20 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* About */}
          <div>
            <h3 className="font-serif text-2xl">
              Obinna Awoke
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-300">
              AI Security Researcher
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              MEng Digital Security & Networks
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              Institut Supérieur d&apos;Électronique de Paris (ISEP)
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              Paris, France
            </p>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 leading-6">
              Researching Trustworthy Artificial Intelligence,
              Explainable AI, Cybersecurity, Healthcare AI,
              and Intelligent Network Systems.
            </p>

            <a
              href="/Obinna_Awoke_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                mt-5
                px-4
                py-2
                border
                rounded-md
                font-medium
                transition
                hover:bg-red-700
                hover:text-white
              "
            >
              📄 Download CV
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">
              Navigation
            </h4>

            <div className="flex flex-col gap-3">

              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-red-700 transition"
              >
                Home
              </Link>

              <Link
                href="/research"
                className="text-gray-600 dark:text-gray-300 hover:text-red-700 transition"
              >
                Research
              </Link>

              <Link
                href="/publications"
                className="text-gray-600 dark:text-gray-300 hover:text-red-700 transition"
              >
                Publications
              </Link>

              <Link
                href="/teaching"
                className="text-gray-600 dark:text-gray-300 hover:text-red-700 transition"
              >
                Teaching
              </Link>

              <Link
                href="/projects"
                className="text-gray-600 dark:text-gray-300 hover:text-red-700 transition"
              >
                Projects
              </Link>

              <Link
                href="/contact"
                className="text-gray-600 dark:text-gray-300 hover:text-red-700 transition"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">
              Connect
            </h4>

            <a
              href="mailto:obinna@obinnaawoke.com"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-red-700 transition mb-6 break-all"
            >
              <MdEmail size={20} />
              <span>obinna@obinnaawoke.com</span>
            </a>

            <div className="flex gap-5 text-2xl">

              <a
                href="https://www.linkedin.com/in/obinnakev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-red-700 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/awokeo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-red-700 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://scholar.google.com/citations?user=I-Ewzb4AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar"
                className="hover:text-red-700 transition"
              >
                <FaGoogle />
              </a>

              <a
                href="https://orcid.org/0009-0004-6632-2384"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ORCID"
                className="hover:text-red-700 transition"
              >
                <SiOrcid />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} Obinna Awoke · Academic Portfolio · All Rights Reserved
        </div>

      </div>
    </footer>
  );
}