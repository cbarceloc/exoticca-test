import { format } from 'date-fns';

// ----------------------------------------------------------------------

type InputValue = Date | string | number | null;

export function formatTime(date: InputValue) {
  const fm = 'HH:mm';
  return date ? format(new Date(date), fm) : '';
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
