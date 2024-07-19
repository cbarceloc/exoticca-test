import toast, { Toaster } from 'react-hot-toast';

const notifyError = (error: string) => toast.error(error, { position: 'top-right' });

const NotificationsContainer = Toaster;
export { NotificationsContainer, notifyError };
