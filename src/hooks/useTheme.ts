import Colors, { ColorName } from '@constants/colors';
import useDarkMode from '@src/hooks/useDarkMode';

const useTheme = (colorName: ColorName | undefined) => {
  const mode = useDarkMode();
  if (colorName) {
    return Colors[mode][colorName];
  }
  return undefined;
};

export default useTheme;
