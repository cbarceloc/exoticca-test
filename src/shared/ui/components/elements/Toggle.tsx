import { Switch } from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type Props = {
  isEnabled: boolean;
  label?: string;
  onChange: (isEnabled: boolean) => void;
};

export default function Toggle({ isEnabled, onChange, label }: Props) {
  return (
    <div className="flex items-center space-x-1">
      <Switch
        checked={isEnabled}
        onChange={onChange}
        className={classNames(
          isEnabled ? 'bg-green-500' : 'bg-gray-200',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 mr-2'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            isEnabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
      {label && <span className=" text-black">{label}</span>}
    </div>
  );
}
