const Colors = {
  light: {
    primary: '#5C8374',
    text: 'black',
    button: 'white',
  },
  dark: {
    primary: '#B9B4C7',
    text: 'white',
    button: '#202124',
  },
};

export type ColorName = keyof typeof Colors.light & keyof typeof Colors.dark;

export default Colors;
