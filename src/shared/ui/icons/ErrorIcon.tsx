import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function ErrorIcon({ className }: Props) {
  return <Icon className={`icon-[ic--baseline-error] ${className} `} />;
}
