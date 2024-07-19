import { twMerge } from 'tailwind-merge';

export function classNames(...classes: (string | undefined)[]) {
  return twMerge(classes.filter(Boolean).join(' '));
}
