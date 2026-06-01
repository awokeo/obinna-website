export default function Hero() {
  return (
    <section>
      <p className="italic text-2xl text-gray-600">
        AI Security • Explainable AI • Cybersecurity • Intelligent Network Systems
      </p>

      <div className="mt-6">
        <h1 className="text-5xl font-serif leading-tight">
          Building Intelligent and Trustworthy AI Systems
          <br />
          for Cybersecurity and Network Defense
        </h1>
      </div>

      <div className="mt-10 space-y-8 text-lg leading-9 text-gray-800 text-justify">
        <p>
          I am a researcher in Artificial Intelligence and Cybersecurity,
          currently pursuing a Master of Engineering in Digital Security and
          Networks at Institut Supérieur d'Électronique de Paris (ISEP),
          France. My research focuses on developing intelligent, scalable,
          and explainable machine learning systems for intrusion detection,
          anomaly detection, and network security.
        </p>

        <p>
          My work integrates machine learning, deep learning,
          explainable artificial intelligence (XAI), and network analytics
          to address emerging cybersecurity challenges in real-world
          environments. I am particularly interested in trustworthy AI,
          adaptive network defense, and intelligent security systems capable
          of operating effectively in dynamic and large-scale infrastructures.
        </p>

        <p>
          I currently contribute to research on explainable anomaly detection
          in healthcare systems at LISITE, ISEP, where I investigate
          interpretable deep learning models for disease prediction and
          clinician-oriented AI explanations. My previous research explored
          the fusion of deep learning architectures in Intent-Driven Networks
          for real-time intrusion detection using the CIC-IDS2017 benchmark.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="/Obinna_Awoke_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border px-6 py-3 rounded hover:bg-black hover:text-white transition"
        >
          Download CV
        </a>

        <a
          href="/research"
          className="border px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          View Research
        </a>
      </div>
    </section>
  );
}