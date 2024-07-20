import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, useTranslation } from 'react-i18next';
// es
import esCommon from '../../../locales/es/common.json';

// en
import enCommon from '../../../locales/en/common.json';

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
      en: { common: enCommon },
      es: { common: esCommon },
    },
    load: 'languageOnly',
    fallbackLng: 'en',
    debug: false,
    ns: ['login', 'common', 'sources'],
    defaultNS: 'common',
  });

export type SupportedLanguage = 'en' | 'es';
export { i18next };
