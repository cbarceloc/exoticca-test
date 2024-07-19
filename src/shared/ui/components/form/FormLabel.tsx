type Props = {
  htmlFor?: string;
  description?: string;
  label: string;
};

export function FormLabel({ label, htmlFor, description }: Props) {
  return (
    <div className="mb-2">
      <label htmlFor={htmlFor} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  );
}
