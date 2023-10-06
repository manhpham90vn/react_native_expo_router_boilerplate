import { TouchableOpacity as DefaultTouchableOpacity } from 'react-native';

import useTheme from '../hooks/useTheme';

import { CustomProps } from '@/components/customprops';

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
