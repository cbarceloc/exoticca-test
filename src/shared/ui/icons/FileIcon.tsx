import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function FileIcon({ className }: Props) {
  return <Icon className={`icon-[ph--file]  ${className}`} />;
}
