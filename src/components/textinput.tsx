import { CustomProps } from '@src/components/customprops';
import useTheme from '@src/hooks/useTheme';
import { TextInput as DefaultTextInput } from 'react-native';

const TextInput = ({
  style,
  color,
  backgroundColor,
  borderColor,
  fontFamily = 'MontserratRegular',
  fontSize,
  ...props
}: DefaultTextInput['props'] & CustomProps) => {
  const _color = useTheme(color);
  const _backgroundColor = useTheme(backgroundColor);
  const _borderColor = useTheme(borderColor);
  return (
    <DefaultTextInput
      {...props}
      placeholderTextColor={_color}
      style={[
        {
          color: _color,
          backgroundColor: _backgroundColor,
          borderColor: _borderColor,
          fontFamily,
          fontSize,
        },
        style,
      ]}
    />
  );
};

export default TextInput;
