export default function AuthHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="space-y-2 text-center">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h1>
      <p className="text-gray-500 dark:text-gray-400">{subtitle}</p>
    </div>
  );
}
