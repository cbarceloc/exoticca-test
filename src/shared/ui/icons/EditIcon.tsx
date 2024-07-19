import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function EditIcon({ className }: Props) {
  return <Icon className={`icon-[material-symbols--edit] ${className}`} />;
}
