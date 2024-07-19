import React from 'react';
import AddIcon from 'src/shared/ui/icons/AddIcon';

type Props = {
  Icon?: React.ReactElement;
  ariaLabel: string;
  className?: string;
  enabled?: boolean;
  onClick: () => void;
};

export default function IconButton({
  Icon: IconProp,
  ariaLabel,
  className,
  onClick,
  enabled = true,
}: Props) {
  function handleClick() {
    if (enabled) {
      onClick();
    }
  }
  return (
    <button
      aria-label={ariaLabel}
      type="button"
      onClick={handleClick}
      className={`transition-transform rounded-full   ${
        enabled ? 'hover:opacity-70 text-white' : 'text-white/40'
      } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 p-1 items-center justify-center  flex ${className}`}
    >
      {IconProp ? IconProp : <AddIcon />}
    </button>
  );
}
