import { createDependencies } from 'src/shared/lib/utils/depInjectionUtils';
import { AppProviders } from './AppProviders';
import { StylesInjector } from './StylesInjector';
import { AppDeps, appDeps } from './dependencyInjection';

type AppProviderProps = {
  children: React.ReactNode;
  deps?: Partial<AppDeps>;
};

const AppProvidersWithStyle = ({ children, deps }: AppProviderProps) => {
  return (
    <AppProviders {...createDependencies<AppDeps>(appDeps, deps)}>
      <StylesInjector />
      {children}
    </AppProviders>
  );
};

export default AppProvidersWithStyle;
