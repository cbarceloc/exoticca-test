import { Tab as HTab, TabGroup, TabList, TabPanel, TabPanels, TabProps } from '@headlessui/react';

function Tab(props: TabProps) {
  return (
    <HTab
      className="rounded-full py-1 px-3 focus:outline-none data-[selected]:bg-gray-200 data-[hover]:bg-gray-100 data-[selected]:data-[hover]:bg-gray-300 data-[focus]:outline-1 data-[focus]:outline-black text-md border border-gray-300 mr-2 "
      {...props}
    />
  );
}
export { Tab, TabGroup, TabList, TabPanel, TabPanels };
