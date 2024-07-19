import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function SourceIcon({ className }: Props) {
  return <Icon className={`icon-[ph--database-bold]  ${className}`} />;
}
