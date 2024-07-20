import { HTMLInputTypeAttribute } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Input from '../elements/Input';
import FormError from './FormError';
import { FormLabel } from './FormLabel';

type Props = {
  id: string;
  className?: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
};

export default function FormInput({ label, type, name, className, placeholder, id }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className={`w-full ${className}`}>
          <div className="flex justify-between ">
            {label && <FormLabel label={label} htmlFor={id} />}
          </div>
          <div className="relative">
            <div
              className={` pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 `}
            />
            <Input
              id={id}
              type={type}
              name={name}
              onChange={field.onChange}
              value={field.value}
              hasError={!!fieldState.error}
              placeholder={placeholder}
            />
            <FormError error={fieldState.error?.message} />
          </div>
        </div>
      )}
    />
  );
}
