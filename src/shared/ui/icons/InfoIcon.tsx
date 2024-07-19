import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function InfoIcon({ className }: Props) {
  return <Icon className={`icon-[gridicons--info] ${className}`} />;
}
