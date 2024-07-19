import { Transition } from '@headlessui/react';

import { useState } from 'react';
import { classNames } from 'src/shared/lib/utils/styleUtils';
import ChevronLeftIcon from '../../icons/ChevronLeftIcon';
import ChevronRightIcon from '../../icons/ChevronRightIcon';
import { Divider } from './Divider';

type Props = {
  title: string;
  children: React.ReactNode;
  Icon: React.ElementType<{ className: string }>;
};

function SidePanel({ title, children, Icon }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex relative ">
      <Transition
        show={!isOpen}
        enter="transition-opacity delay-100 duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-0"
        leaveFrom="opacity-0"
        leaveTo="opacity-0"
      >
        <div>
          <button
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className={`flex transform duration-1000  p-4  bg-white h-fit shadow-md rounded-l-lg mt-4  hover:bg-gray-50`}
          >
            <Icon className="w-5 h-5 " />
            <ChevronLeftIcon className={classNames('w-5 h-5  ', isOpen ? 'rotate-180' : '')} />
          </button>
        </div>
      </Transition>
      <Transition
        show={isOpen}
        enter="transition ease-in-out duration-340 transform"
        enterFrom={`translate-x-[400px]`}
        enterTo="translate-x-0"
        leave="transition  duration-340 transform"
        leaveFrom="translate-x-0"
        leaveTo={`translate-x-[400px]`}
      >
        <div className="flex md:hidden fixed inset-0 backdrop-blur-sm " />
        <div
          className={`shadow-md flex h-full w-[400px] bg-white  flex-col fixed top-0 right-0  md:static`}
        >
          <button
            className="justify-between flex w-full items-center py-3 px-5 h-fit hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex space-x-2 items-center">
              <Icon className="h-5 w-5" />
              <div className="font-medium">{title}</div>
            </div>
            <ChevronRightIcon className="h-5 w-5" />
          </button>
          <Divider />
          {children}
        </div>
      </Transition>
    </div>
  );
}

const SidePanelContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 overflow-auto space-y-8  h-full">{children}</div>;
};

SidePanel.Content = SidePanelContent;
export { SidePanel };
