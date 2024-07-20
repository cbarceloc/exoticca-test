import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';
import CloseIcon from '../../icons/CloseIcon';
import IconButton from './IconButton';

type Props = {
  open: boolean;
  onClose: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
};
function Modal({ open, onClose, children, className }: Props) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 " initialFocus={cancelButtonRef} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
type HeaderProps = {
  title: string;
  onClose: () => void;
  className?: string;
};
function Header({ title, onClose, className }: HeaderProps) {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <Dialog.Title className={'mb-4 text-3xl font-semibold'}>{title}</Dialog.Title>
      <IconButton
        ariaLabel="Close"
        onClick={onClose}
        className="h-6 w-6  bg-black p-0"
        aria-hidden="true"
        Icon={<CloseIcon className="bg-white  p-0" />}
      />
    </div>
  );
}

Modal.Header = Header;

export { Modal };
