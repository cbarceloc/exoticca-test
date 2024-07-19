import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function LogoutIcon({ className }: Props) {
  return <Icon className={`icon-[solar--logout-2-bold-duotone] ${className}`} />;
}
