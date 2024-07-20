import Button from 'src/shared/ui/components/elements/Button';
import Input from 'src/shared/ui/components/elements/Input';

type Props = {
  onChangeText: (text: string) => void;
  value: string;
};

export default function SearchInput({ onChangeText, value }: Props) {
  return (
    <div className="flex relative">
      <Input
        placeholder="Search trips"
        onChange={(e) => onChangeText(e.target.value)}
        value={value}
        hasError={false}
        id="search"
        name="search"
        className="w-80 h-12"
      />
      <Button
        label="search"
        className="bg-black absolute right-0 top-0 bottom-0 py-3  px-8 hover:bg-gray-500"
      />
    </div>
  );
}
