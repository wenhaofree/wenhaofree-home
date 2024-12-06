import {routing} from './routing';

type Locale = 'en' | 'zh';

export default async function getRequestConfig({locale}: {locale: Locale}) {
  // This typically corresponds to the `[locale]` segment
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale as Locale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
}