import Button from 'src/shared/ui/components/elements/Button';

type Props = {
  onClick: () => void;
};
export default function ShowTripButton({ onClick }: Props) {
  return (
    <>
      <Button
        label="See trip details"
        onClick={onClick}
        variant="text"
        className="bg-white text-black px-4 py-2 mr-auto"
      />
    </>
  );
}
