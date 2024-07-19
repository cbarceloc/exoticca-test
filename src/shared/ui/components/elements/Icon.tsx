export type IconProps = {
  className?: string;
};

export default function Icon({ className }: IconProps) {
  return <span className={`text-gray-900 ${className} dark:text-white`} />;
}
