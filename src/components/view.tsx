import { View as DefaultView } from 'react-native';

import useTheme from '../hooks/useTheme';

import { CustomProps } from '@/components/customprops';

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
