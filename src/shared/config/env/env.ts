export type Environment = {
  useTransitions?: boolean;
  apiUrl: string;
};

const productionEnvironment: Environment = {
  apiUrl: 'https://my-json-server.typicode.com/mariosanz92/dream-travels-data',
};
const developmentEnvironment: Environment = {
  apiUrl: 'https://my-json-server.typicode.com/mariosanz92/dream-travels-data',
};

const localEnvironment: Environment = {
  useTransitions: false,
  apiUrl: 'https://my-json-server.typicode.com/mariosanz92/dream-travels-data',
};
const defaultEnvValues: Partial<Environment> = {
  useTransitions: true,
};

enum EnvironmentName {
  Development = 'development',
  Local = 'local',
  Production = 'production',
  Test = 'test',
}
export const buildEnvironment = (): Environment => {
  let envValues;
  switch (import.meta.env.VITE_ENV) {
    case EnvironmentName.Test:
    case EnvironmentName.Local:
      envValues = localEnvironment;
      break;
    case EnvironmentName.Development:
      envValues = developmentEnvironment;
      break;
    default:
      envValues = productionEnvironment;
  }
  return { ...defaultEnvValues, ...envValues };
};
export const env: Environment = buildEnvironment();
