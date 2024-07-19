import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function CiruclarLoader({ className }: Props) {
  return (
    <Icon
      aria-label="loading"
      className={`icon-[line-md--loading-twotone-loop] ${className} h-16 w-16 bg-slate-500`}
    />
  );
}
