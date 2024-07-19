import { Menu as MenuComp, Transition } from '@headlessui/react';
import { Fragment } from 'react';

type MenuProps = {
  children: React.ReactNode;
  className?: string;
};

function Menu({ children, className }: MenuProps) {
  return (
    <MenuComp as="div" className={`relative inline-block text-left ${className} w-full`}>
      {children}
    </MenuComp>
  );
}
type MenuButtonProps = {
  children: React.ReactNode;
  className?: string;
};
function MenuButton({ children, className }: MenuButtonProps) {
  return (
    <MenuComp.Button
      className={`inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 ${className} items-center`}
    >
      {children}
    </MenuComp.Button>
  );
}
type MenuItemsProps = {
  children: React.ReactNode;
};
function MenuItems({ children }: MenuItemsProps) {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <MenuComp.Items className="absolute bottom-8 mt-2 w-56 origin-bottom-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
        <div className="px-1 py-1 ">{children}</div>
      </MenuComp.Items>
    </Transition>
  );
}

type MenuItemProps = {
  name: string;
  Icon?: React.ComponentType<{ className: string }>;
  onClick: () => void;
};
function MenuItem({ name, Icon, onClick }: MenuItemProps) {
  return (
    <MenuComp.Item key={name}>
      {({ active }) => (
        <button
          onClick={onClick}
          className={`${
            active ? 'bg-primary-500 text-white' : 'text-gray-900'
          } group flex w-full items-center rounded-md px-2 py-2 text-base`}
        >
          {Icon && (
            <Icon
              className="mr-2 h-6 w-6 bg-primary-700 group-hover:bg-primary-100"
              aria-hidden="true"
            />
          )}
          {name}
        </button>
      )}
    </MenuComp.Item>
  );
}

Menu.Button = MenuButton;
Menu.Items = MenuItems;
Menu.Item = MenuItem;

export { Menu };
