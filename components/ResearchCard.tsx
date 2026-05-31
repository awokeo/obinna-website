interface Props {
  title: string;
  description: string;
}

export default function ResearchCard({
  title,
  description,
}: Props) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition">

      <h3 className="text-2xl font-serif mb-3">
        {title}
      </h3>

      <p className="text-gray-700 leading-7">
        {description}
      </p>

    </div>
  );
}