export enum ThemeColor {
  'primary-100' = 'primary-100',
  'primary-300' = 'primary-300',
  'primary-500' = 'primary-500',
  'primary-700' = 'primary-700',
  'primary-900' = 'primary-900',
  'secondary-100' = 'secondary-100',
  'secondary-300' = 'secondary-300',
  'secondary-500' = 'secondary-500',
  'secondary-700' = 'secondary-700',
  'secondary-900' = 'secondary-900',
}

export enum TailwindThemeColor {
  'primary-100' = '--color-primary-100',
  'primary-300' = '--color-primary-300',
  'primary-500' = '--color-primary-500',
  'primary-700' = '--color-primary-700',
  'primary-900' = '--color-primary-900',
  'secondary-100' = '--color-secondary-100',
  'secondary-300' = '--color-secondary-300',
  'secondary-500' = '--color-secondary-500',
  'secondary-700' = '--color-secondary-700',
  'secondary-900' = '--color-secondary-900',
}

export type ITheme = {
  [key in ThemeColor]: string;
};

export type TailwindITheme = {
  [value in TailwindThemeColor]: string;
};

export interface IThemes {
  [key: string]: ITheme;
}
