import CircularLoader from '../../icons/CircularLoader';

export default function BackdropLoader() {
  return (
    <div className="flex absolute inset-0 backdrop-blur-sm  bg-white/30 items-center justify-center">
      <CircularLoader />
    </div>
  );
}
