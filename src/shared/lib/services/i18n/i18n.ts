import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, useTranslation } from 'react-i18next';
// es
import esCommon from '../../../locales/es/common.json';
import esLogin from '../../../locales/es/login.json';
import esSearch from '../../../locales/es/search.json';
import esSources from '../../../locales/es/sources.json';
// en
import enCommon from '../../../locales/en/common.json';
import enLogin from '../../../locales/en/login.json';
import enSearch from '../../../locales/en/search.json';
import enSources from '../../../locales/en/sources.json';

export interface i18n {
  translate: (text: string, interpolations?: Record<string, string>) => string;
  currentLanguage: string;
}

export { useTranslation };

i18next
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    detection: {
      order: [
        'htmlTag',
        'querystring',
        'path',
        'navigator',
        'subdomain',
        'cookie',
        'localStorage',
        'sessionStorage',
      ],
    },
    missingKeyHandler: (key) => {
      throw new Error(`Missing translation key: ${key}`);
    },
    resources: {
      en: { common: enCommon, login: enLogin, sources: enSources, search: enSearch },
      es: { common: esCommon, login: esLogin, sources: esSources, search: esSearch },
    },
    load: 'languageOnly',
    fallbackLng: 'en',
    debug: false,
    ns: ['login', 'common', 'sources'],
    defaultNS: 'common',
  });

export type SupportedLanguage = 'en' | 'es';
export { i18next };
