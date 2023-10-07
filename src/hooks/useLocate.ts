import { translations } from '@assets/localization/locate.json';
import { locale } from 'expo-localization';
import { I18n } from 'i18n-js';
import { useState } from 'react';

export const useTranslations = () => {
  const [locateState] = useState(locale);
  const i18n = new I18n(translations);
  i18n.enableFallback = true;
  i18n.defaultLocale = 'en';
  i18n.locale = locateState;
  return i18n;
};

export const useLocate = () => {
  const translation = useTranslations();
  return {
    login: translation.t('login'),
    register: translation.t('register'),
    email: translation.t('email'),
    password: translation.t('password'),
    confirm_password: translation.t('confirm_password'),
    forgot: translation.t('forgot'),
    dont_have_account: translation.t('dont_have_account'),
    send_mail: translation.t('send_mail'),
    logout: translation.t('logout'),
    reload: translation.t('reload'),
    changeTheme: translation.t('changeTheme'),
    total: (total: string) => translation.t('total', { total }),
  };
};
