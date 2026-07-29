export default function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-3 font-serif text-xl font-bold text-white-bright sm:text-2xl">
        {title}
      </h2>
      <div className="space-y-3 text-base text-text sm:text-lg">
        {children}
      </div>
    </div>
  );
}
