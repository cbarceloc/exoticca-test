import React, { createContext } from 'react';
import { useProtectedContext } from '../hooks/useProtectedContext';

// context

export function createRepositoryContext<TRepository>() {
  return createContext<TRepository | null>(null);
}
type ContextType<TRepository> = ReturnType<typeof createRepositoryContext<TRepository>>;

// provider

export function createRepositoryProvider<TRepository>(
  Context: ContextType<TRepository>
): (props: React.PropsWithChildren & { repository: TRepository }) => React.ReactNode {
  return function RepositoryProvider({
    children,
    repository,
  }: React.PropsWithChildren & { repository: TRepository }): React.ReactNode {
    const repositoryRef = React.useRef(repository);
    return <Context.Provider value={repositoryRef.current}>{children}</Context.Provider>;
  };
}
// hook

export function createUseRepository<TRepository>(
  context: ContextType<TRepository>,
  contextName: string
) {
  return function useRepository() {
    const repository = useProtectedContext(context, contextName);
    return repository;
  };
}

// Provider and hook

export function createRepositoryProviderAndHook<TRepository>(contextName: string) {
  const Context = createRepositoryContext<TRepository>();
  return [
    createRepositoryProvider<TRepository>(Context),
    createUseRepository<TRepository>(Context, contextName),
  ] as const;
}
