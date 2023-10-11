import i18n from '@src/hooks/i18n';
import { object, string } from 'yup';

const loginValidationSchema = object().shape({
  email: string()
    .email(i18n.t('email_valid'))
    .required(i18n.t('email_required')),
  password: string()
    .min(8, ({ min }) => i18n.t('password_min', { min }))
    .required(i18n.t('password_required')),
});

export default loginValidationSchema;
