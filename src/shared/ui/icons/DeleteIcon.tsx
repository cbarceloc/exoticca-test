import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function DeleteIcon({ className }: Props) {
  return <Icon className={`icon-[mi--delete] ${className}`} />;
}
