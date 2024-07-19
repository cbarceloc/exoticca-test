import { SupportedLanguage } from '../lib/services/i18n/i18n';
import { Environment, env } from './env/env';

type Config = Environment & {
  defaultLanguage: SupportedLanguage;
};

export const config: Config = {
  defaultLanguage: 'en',
  ...env,
};
