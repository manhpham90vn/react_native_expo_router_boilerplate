import { CustomProps } from '@src/components/customprops';
import useTheme from '@src/hooks/useTheme';
import { View as DefaultView } from 'react-native';

const View = ({
  style,
  backgroundColor,
  ...props
}: DefaultView['props'] & CustomProps) => {
  const _backgroundColor = useTheme(backgroundColor);
  return (
    <DefaultView
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

export default View;
