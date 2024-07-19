import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function AddIcon({ className }: Props) {
  return <Icon className={`icon-[heroicons-solid--plus] ${className}`} />;
}
