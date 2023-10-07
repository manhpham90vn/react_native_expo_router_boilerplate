import { CustomProps } from '@src/components/common/customprops';
import useTheme from '@src/hooks/useTheme';
import { Text as DefaultText, TextProps } from 'react-native';

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
