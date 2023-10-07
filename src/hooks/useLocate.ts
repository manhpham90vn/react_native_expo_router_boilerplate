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

export const useLocate = () => {
  return {
    login: i18n.t('login'),
    register: i18n.t('register'),
    email: i18n.t('email'),
    password: i18n.t('password'),
    confirm_password: i18n.t('confirm_password'),
    forgot: i18n.t('forgot'),
    dont_have_account: i18n.t('dont_have_account'),
    send_mail: i18n.t('send_mail'),
    logout: i18n.t('logout'),
    reload: i18n.t('reload'),
    changeTheme: i18n.t('changeTheme'),
    total: (total: string) => i18n.t('total', { total }),
  };
};
