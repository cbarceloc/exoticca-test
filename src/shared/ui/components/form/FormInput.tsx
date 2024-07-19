import { HTMLInputTypeAttribute } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormError from './FormError';
import { FormLabel } from './FormLabel';

type Props = {
  className?: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
};

export default function FormInput({ label, type, name, className, placeholder }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className={`w-full ${className}`}>
          <div className="flex justify-between ">{label && <FormLabel label={label} />}</div>
          <div className="relative">
            <div
              className={` pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 `}
            />
            <input
              type={type}
              name={name}
              onChange={field.onChange}
              value={field.value}
              className={` block w-full 
              border-0 rounded-full py-1.5  shadow-sm ring-1 dark:ring-gray-500 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white ${
                !!fieldState.error &&
                'text-red-500 ring-red-500 dark:text-red-900 dark:ring-red-900'
              }`}
              placeholder={placeholder}
              aria-describedby="email-optional"
            />
            <FormError error={fieldState.error?.message} />
          </div>
        </div>
      )}
    />
  );
}
