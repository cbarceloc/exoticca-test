import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function DoubleCheckIcon({ className }: Props) {
  return <Icon className={`icon-[ri--check-double-fill] ${className}`} />;
}
