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
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-12">

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

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Researching Trustworthy AI, Explainable AI,
              Cybersecurity, and Intelligent Network Systems.
            </p>

            <a
              href="/Obinna_Awoke_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 px-4 py-2 border rounded-md hover:bg-red-700 hover:text-white transition"
            >
              Download CV
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3 text-gray-600 dark:text-gray-300">

              <Link href="/">Home</Link>
              <Link href="/research">Research</Link>
              <Link href="/publications">Publications</Link>
              <Link href="/teaching">Teaching</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>

            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">
              Connect
            </h4>

            <a
              href="mailto:obinna.awoke@gmail.com"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-red-700 transition mb-4"
            >
              <MdEmail size={20} />
              <span>Email</span>
            </a>

            <div className="flex gap-5 text-2xl">

              <a
                href="https://www.linkedin.com/in/obinnakev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-700 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/awokeo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-700 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://scholar.google.com/citations?user=I-Ewzb4AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-700 transition"
              >
                <FaGoogle />
              </a>

              <a
                href="https://orcid.org/0009-0004-6632-2384"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-700 transition"
              >
                <SiOrcid />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} Obinna Awoke • Academic Portfolio
        </div>

      </div>
    </footer>
  );
}