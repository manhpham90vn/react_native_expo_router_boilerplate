import Text from '@src/components/common/text';
import TouchableOpacity from '@src/components/common/touchableopacity';
import { StyleProp, ViewStyle } from 'react-native';

type PrimaryButtonProps = {
  style?: StyleProp<ViewStyle>;
  text?: string;
  onPress?: () => void;
};

const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <TouchableOpacity
      backgroundColor='button'
      style={props.style}
      onPress={props.onPress}
    >
      <Text color='text' fontFamily='MontserratBold'>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
