import { useAppSelector } from '@src/redux/hooks';
import { Theme, themeSelector } from '@src/redux/slices/appSlice';
import { useColorScheme as _useColorScheme } from 'react-native';

const useDarkMode = () => {
  const fallback: Theme = 'dark';
  const theme = useAppSelector(themeSelector);
  const colorScheme = _useColorScheme() ?? fallback;
  return theme === 'auto' ? colorScheme : theme ?? fallback;
};

export default useDarkMode;
