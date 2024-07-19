import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function LightIcon({ className }: Props) {
  return <Icon className={`icon-[iconamoon--mode-light-duotone] ${className} `} />;
}
