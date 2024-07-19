import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function SendIcon({ className }: Props) {
  return <Icon className={`icon-[carbon--send-alt]  ${className}`} />;
}
