export type ThemeMode = 'light' | 'dark';

const lightColors = {
  /* Brand */
  primary: '#1b1a20',
  secondary: '#eabf00',

  /* Page */
  background: '#fff',
  text: '#000',
  textMuted: '#9c9b9b',

  /* Content placed on top of primary / secondary surfaces */
  onPrimary: '#ececec',
  onPrimaryMuted: '#5b5a5e',
  onSecondary: '#0c0b10',
  buttonText: '#fff',

  /* Darker shades used inside the cart panel */
  primaryDark: '#0c0b10',
  primaryDarker: '#000',
  quantityText: '#b7b7b7',
  divider: 'rgba(0, 0, 0, 0.2)',

  /* Filter chips */
  chipBackground: '#ececec',
  chipText: '#1b1a20',
  chipActiveBackground: '#1b1a20',
  chipActiveText: '#ececec',
  chipHoverBorder: '#1b1a20',

  /* Cards and misc surfaces */
  surface: '#fff',
  border: '#eee',
  link: '#000',
  imagePlaceholder: '#eee',
  loaderBackground: '#000',
  loaderRing: '#fff',
  cornerFill: '#151513',
  cornerIcon: '#fff',
};

type Colors = { [key in keyof typeof lightColors]: string };

const darkColors: Colors = {
  primary: '#2b2a33',
  secondary: '#eabf00',

  background: '#121214',
  text: '#ececec',
  textMuted: '#a3a3a8',

  onPrimary: '#ececec',
  onPrimaryMuted: '#a3a3a8',
  onSecondary: '#0c0b10',
  buttonText: '#fff',

  primaryDark: '#0c0b10',
  primaryDarker: '#000',
  quantityText: '#b7b7b7',
  divider: 'rgba(0, 0, 0, 0.4)',

  chipBackground: '#2b2a33',
  chipText: '#ececec',
  chipActiveBackground: '#eabf00',
  chipActiveText: '#0c0b10',
  chipHoverBorder: '#ececec',

  surface: '#1e1d24',
  border: '#33323b',
  link: '#ececec',
  /* Product photos have light backgrounds, so the backing stays light */
  imagePlaceholder: '#eee',
  loaderBackground: '#000',
  loaderRing: '#fff',
  cornerFill: '#ececec',
  cornerIcon: '#121214',
};

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1025px',
};

export interface StyleClosetTheme {
  mode: ThemeMode;
  colors: Colors;
  breakpoints: { [key in keyof typeof breakpoints]: string };
}

const lightTheme: StyleClosetTheme = {
  mode: 'light',
  colors: lightColors,
  breakpoints,
};

const darkTheme: StyleClosetTheme = {
  mode: 'dark',
  colors: darkColors,
  breakpoints,
};

const themes: { [key in ThemeMode]: StyleClosetTheme } = {
  light: lightTheme,
  dark: darkTheme,
};

/* `theme` is kept as the default (light) theme for existing imports */
const theme = lightTheme;

export { theme, lightTheme, darkTheme, themes };
