import TextInput from '@src/components/common/textinput';
import { StyleProp, ViewStyle } from 'react-native';
import { KeyboardTypeOptions } from 'react-native/Libraries/Components/TextInput/TextInput';

type PrimaryEditTextProps = {
  style?: StyleProp<ViewStyle>;
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
};

const PrimaryEditText = (props: PrimaryEditTextProps) => {
  return (
    <TextInput
      backgroundColor='button'
      color='text'
      fontFamily='MontserratRegular'
      style={props.style}
      value={props.value}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
    />
  );
};

export default PrimaryEditText;
