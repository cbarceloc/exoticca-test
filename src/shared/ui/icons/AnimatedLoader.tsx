import Icon from '../components/elements/Icon';

type Props = {
  className?: string;
};

export default function AnimatedLoader({ className }: Props) {
  return (
    <Icon aria-label="loading" className={`icon-[eos-icons--three-dots-loading] ${className}`} />
  );
}
