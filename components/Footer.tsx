export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between gap-8">

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
            <h4 className="font-semibold mb-3">
              Connect
            </h4>

            <div className="space-y-2 text-gray-600">

              <p>
                📧 obinna.awoke@gmail.com
              </p>

              <a
                href="https://www.linkedin.com/in/obinnakev"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-red-700"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/awokeo"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-red-700"
              >
                GitHub
              </a>

              <a
                href="https://scholar.google.com/citations?user=I-Ewzb4AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-red-700"
              >
                Google Scholar
              </a>

              <a
                href="https://orcid.org/0009-0004-6632-2384"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-red-700"
              >
                ORCID
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