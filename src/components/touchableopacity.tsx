import { CustomProps } from '@src/components/customprops';
import useTheme from '@src/hooks/useTheme';
import { TouchableOpacity as DefaultTouchableOpacity } from 'react-native';

const TouchableOpacity = ({
  style,
  backgroundColor,
  ...props
}: DefaultTouchableOpacity['props'] & CustomProps) => {
  const _backgroundColor = useTheme(backgroundColor);
  return (
    <DefaultTouchableOpacity
      {...props}
      style={[
        {
          backgroundColor: _backgroundColor,
        },
        style,
      ]}
    />
  );
};

export default TouchableOpacity;
