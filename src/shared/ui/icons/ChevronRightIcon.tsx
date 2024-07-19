import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function ChevronRightIcon({ className }: Props) {
  return <Icon className={`icon-[jam--chevron-right] ${className}`} />;
}
