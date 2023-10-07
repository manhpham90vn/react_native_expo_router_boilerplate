import { ColorName } from '@constants/colors';
import { FontFamily } from '@constants/fonts';

export type CustomProps = {
  color?: ColorName;
  backgroundColor?: ColorName;
  borderColor?: ColorName;
  fontFamily?: FontFamily;
  fontSize?: number;
};
