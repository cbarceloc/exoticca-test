import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function CloseIcon({ className }: Props) {
  return <Icon className={`icon-[mi--close] ${className}`} />;
}
