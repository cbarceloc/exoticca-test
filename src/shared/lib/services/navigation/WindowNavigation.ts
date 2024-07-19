import { Navigation } from './NavigationProvider';

export const WindowNavigation: Navigation = {
  navigateToURL(url: string) {
    window.open(url, '_blank', 'noreferrer');
  },
  currentURL: window.location.href,
};
