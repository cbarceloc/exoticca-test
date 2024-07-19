import { createContext, useMemo } from 'react';
import { useProtectedContext } from '../../hooks/useProtectedContext';

export type Navigation = {
  navigateToURL: (url: string) => void;
  currentURL: string;
};

const NavigationContext = createContext<Navigation | null>(null);
export function NavigationProvider({
  navigation,
  children,
}: {
  navigation: Navigation;
  children: React.ReactNode;
}) {
  const navigationValue = useMemo(() => navigation, [navigation]);

  return (
    <NavigationContext.Provider value={navigationValue}>{children}</NavigationContext.Provider>
  );
}

export function useNavigation() {
  const navigation = useProtectedContext(NavigationContext, 'Navigation');
  return navigation;
}
