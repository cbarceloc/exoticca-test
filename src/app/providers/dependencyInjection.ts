import { Navigation } from 'src/shared/lib/services/navigation/NavigationProvider';
import { WindowNavigation } from 'src/shared/lib/services/navigation/WindowNavigation';

export type AppDeps = {
  navigation: Navigation;
};

export const appDeps: AppDeps = {
  navigation: WindowNavigation,
};
