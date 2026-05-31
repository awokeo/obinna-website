interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({
  title,
}: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <h2 className="text-4xl font-serif">
        {title}
      </h2>

      <div className="w-24 h-[2px] bg-red-700 mt-3" />
    </div>
  );
}