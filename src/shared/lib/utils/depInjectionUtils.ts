export function createDependencies<Deps>(defaultDeps: Deps, deps?: Partial<Deps>): Deps {
  return {
    ...defaultDeps,
    ...deps,
  };
}
