import { Controller, useFormContext } from 'react-hook-form';
import { FormLabel } from './FormLabel';

type Props = {
  label?: string;
  name: string;
  options: { value: string; label: string }[];
  className?: string;
};

export default function FormSelect({ label, options, name, className }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex flex-col">
          {!!label && <FormLabel label={label} />}
          <select
            id={label}
            value={field.value}
            onChange={field.onChange}
            name={label}
            className={`rounded-full  block w-full border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className} `}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}
    />
  );
}
