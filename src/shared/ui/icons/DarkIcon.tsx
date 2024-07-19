import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function DarkIcon({ className }: Props) {
  return <Icon className={`icon-[iconamoon--mode-dark-duotone] ${className}`} />;
}
