import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function BookIcon({ className }: Props) {
  return <Icon className={`icon-[ph--book-open] ${className}`} />;
}
