import { ButtonHTMLAttributes, ComponentType } from 'react';
import { classNames } from 'src/shared/lib/utils/styleUtils';
import AnimatedLoader from '../../icons/AnimatedLoader';

type variant = 'text' | 'outlined' | 'contained' | 'soft';
type Props = {
  className?: string;
  onClick?: () => void;
  label?: string;
  StartIcon?: ComponentType<{ className: string }>;
  endIcon?: React.ReactElement;
  variant?: 'text' | 'outlined' | 'contained' | 'soft';
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  children?: React.ReactNode;
  isLoading?: boolean;
  isEnabled?: boolean;
};

const iconVariantClassNames: Record<variant, string> = {
  text: 'text-primary-500',
  outlined: 'text-primary-500',
  contained: 'text-white',
  soft: 'text-primary-700 group-hover:text-white ',
};

export default function Button({
  label,
  onClick,
  StartIcon,
  children,
  endIcon,
  className,
  isEnabled = true,
  variant = 'contained',
  type = 'button',
  isLoading,
}: Props) {
  const variantClassNames: Record<variant, string> = {
    text: 'text-primary-500 hover:opacity-60 shadow-none font-medium underline',
    outlined:
      'text-primary-500 border border-primary-500  hover:bg-primary-100 dark:border-primary-300 dark:hover:bg-primary-300/10 dark:text-primary-300 shadow-sm',
    contained: 'bg-primary-500 text-white hover:bg-primary-300 hover:text-white shadow-sm ',
    soft: 'text-primary-700 dark:text-white bg-primary-100 hover:bg-primary-500/80 hover:text-white shadow-sm ',
  };
  return (
    <button
      type={type}
      disabled={!isEnabled}
      onClick={onClick}
      className={classNames(
        `group whitespace-nowrap  inline-flex items-center gap-x-1.5 px-2.5 py-2.5 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 justify-center rounded-full`,
        variantClassNames[variant],
        isEnabled ? 'opacity-100' : 'opacity-30 cursor-not-allowed',
        className
      )}
    >
      {isLoading ? (
        <AnimatedLoader />
      ) : (
        <>
          {StartIcon && <StartIcon className={iconVariantClassNames[variant]} />}
          {label}
          {children && children}
          {endIcon && endIcon}
        </>
      )}
    </button>
  );
}
