import { translations } from '@assets/localization/locate.json';
import { locale } from 'expo-localization';
import { I18n } from 'i18n-js';

const I18N = (): I18n => {
  const i18n = new I18n(translations);
  i18n.enableFallback = true;
  i18n.defaultLocale = 'en';
  i18n.locale = locale;
  return i18n;
};

const i18n = I18N();

export default i18n;
