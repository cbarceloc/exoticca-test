import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function ChevronLeftIcon({ className }: Props) {
  return <Icon className={`icon-[jam--chevron-left] ${className}`} />;
}
