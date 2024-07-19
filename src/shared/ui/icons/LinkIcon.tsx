import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function LinkIcon({ className }: Props) {
  return <Icon className={`icon-[akar-icons--link-out] ${className}`} />;
}
