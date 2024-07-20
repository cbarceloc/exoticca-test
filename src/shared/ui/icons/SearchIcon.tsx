import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function SearchIcon({ className }: Props) {
  return <Icon className={`icon-[tdesign--search] ${className}`} />;
}
