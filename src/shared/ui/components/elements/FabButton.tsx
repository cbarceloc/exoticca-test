import React from 'react';
import AddIcon from 'src/shared/ui/icons/AddIcon';

type Props = {
  Icon?: React.ReactElement;
  className?: string;
  onClick: () => void;
  ariaLabel: string;
};

export default function FabButton({ Icon: IconProp, className, onClick, ariaLabel }: Props) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`transition-transform rounded-full  text-white hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-14 h-14 items-center justify-center  flex  shadow-md shadow-neutral-400 hover:scale-110  ${className} bg-primary-500`}
    >
      {IconProp ? IconProp : <AddIcon />}
    </button>
  );
}
