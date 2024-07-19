import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function LightbulbIcon({ className }: Props) {
  return <Icon className={`icon-[ph--lightbulb-duotone] ${className} `} />;
}
