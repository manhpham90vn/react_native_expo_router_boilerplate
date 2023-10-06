const Fonts = {
  MontserratRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
  MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
};

export type FontFamily = keyof typeof Fonts;

export default Fonts;
