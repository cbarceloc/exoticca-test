type Props = {
  title: string;
  introduction?: string;
  description: string;
  photoUrl: string;
  actions?: React.ReactNode;
};

export default function TripListItem({
  title,
  introduction,
  description,
  photoUrl,
  actions,
}: Props) {
  return (
    <div className="flex flex-row w-full border-gray-200 border space-x-3 rounded-xl overflow-hidden ">
      <div className="flex-1 flex h-full overflow-hidden">
        <img src={photoUrl} alt={title} className=" object-cove w-full" />
      </div>
      <div className="flex-1 space-y-3 p-3">
        <h2 className="text-xl">{title}</h2>
        <div className=" line-clamp-3	 ">{introduction || description}</div>
        <div className="flex justify-end">{actions}</div>
      </div>
    </div>
  );
}
