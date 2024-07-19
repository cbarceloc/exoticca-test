import { createStore as createStoreLib, StoreApi, useStore } from 'zustand';

function createStore<TStore>(
  store: (set: (state: Partial<TStore>) => void, get: () => TStore) => TStore
) {
  return createStoreLib<TStore>(store);
}

export { createStore, useStore };
export type { StoreApi };
