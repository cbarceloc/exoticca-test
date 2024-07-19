type Props = {
  error?: string;
};

export default function FormError({ error }: Props) {
  return !!error && <small className="text-red-800">{error}</small>;
}
