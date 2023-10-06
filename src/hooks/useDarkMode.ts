import { useColorScheme as _useColorScheme } from 'react-native';

import { useAppSelector } from '@/redux/hooks';
import { Theme, themeSelector } from '@/redux/slices/appSlice';

const useDarkMode = () => {
  const fallback: Theme = 'dark';
  const theme = useAppSelector(themeSelector);
  const colorScheme = _useColorScheme() ?? fallback;
  return theme === 'auto' ? colorScheme : theme ?? fallback;
};

export default useDarkMode;
