import { HTMLInputTypeAttribute } from 'react';
import { classNames } from 'src/shared/lib/utils/styleUtils';

type Props = {
  id: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasError: boolean;
  className?: string;
};

export default function Input({
  id,
  type,
  name,
  placeholder,
  value,
  onChange,
  hasError,
  className,
}: Props) {
  return (
    <input
      id={id}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      className={classNames(
        `block w-full border-0 rounded-full py-1.5  shadow-sm ring-1 dark:ring-gray-500 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white`,
        hasError ? 'text-red-500 ring-red-500 dark:text-red-900 dark:ring-red-900' : '',
        className
      )}
      placeholder={placeholder}
    />
  );
}
