import { Context, useContext } from 'react';

export const useProtectedContext = <TState>(Context: Context<TState>, contextName: string) => {
  const context = useContext(Context);

  if (!context) {
    throw new Error(`use${contextName}Context must be used inside the ${contextName}Provider`);
  }

  return context;
};
