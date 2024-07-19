import React, { Context, createContext } from 'react';
import { useProtectedContext } from '../hooks/useProtectedContext';
import { StoreApi, useStore as useStoreLib } from '../services/store/Store';

// context

function createStoreContext<TState>() {
  return createContext<StoreApi<TState> | null>(null);
}
type ContextType<TState> = Context<StoreApi<TState> | null>;

// provider

function createStoreProvider<TState>(Context: ContextType<TState>) {
  return function StoreProvider({
    children,
    store,
  }: React.PropsWithChildren & { store: StoreApi<TState> }): React.ReactNode {
    const storeRef = React.useRef(store);
    return <Context.Provider value={storeRef.current}>{children}</Context.Provider>;
  };
}
// hook

function createStoreHook<TState>(context: ContextType<TState>, contextName: string) {
  return function useStore() {
    const store = useProtectedContext(context, contextName);
    return useStoreLib(store);
  };
}

// Provider and hook
export function createStoreProviderAndHook<TState>(contextName: string) {
  const Context = createStoreContext<TState>();
  return [
    createStoreProvider<TState>(Context),
    createStoreHook<TState>(Context, contextName),
  ] as const;
}
