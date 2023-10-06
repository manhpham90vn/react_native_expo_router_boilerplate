import Colors, { ColorName } from '!/colors';
import useDarkMode from '@/hooks/useDarkMode';

const useTheme = (colorName: ColorName | undefined) => {
  const mode = useDarkMode();
  if (colorName) {
    return Colors[mode][colorName];
  }
  return undefined;
};

export default useTheme;
