import { Text as DefaultText, TextProps } from 'react-native';

import useTheme from '../hooks/useTheme';

import { CustomProps } from '@/components/customprops';

const Text = ({
  style,
  color,
  fontFamily = 'MontserratRegular',
  fontSize,
  ...props
}: TextProps & CustomProps) => {
  const _color = useTheme(color);
  return (
    <DefaultText
      {...props}
      style={[{ color: _color, fontFamily, fontSize }, style]}
    />
  );
};

export default Text;
