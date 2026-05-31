interface FeaturedProjectProps {
  title: string;
  description: string;
  technologies: string[];
}

export default function FeaturedProject({
  title,
  description,
  technologies,
}: FeaturedProjectProps) {
  return (
    <div className="border rounded-lg p-8">

      <h3 className="text-2xl font-serif mb-4">
        {title}
      </h3>

      <p className="leading-8 text-gray-700 mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="border px-3 py-1 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

    </div>
  );
}