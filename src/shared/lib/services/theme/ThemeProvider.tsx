import React, { useEffect } from 'react';
import base from 'src/shared/config/themes/base';
import { hexToRgb } from '../../utils/colorUtils';
import { ITheme, TailwindITheme, TailwindThemeColor } from './types';

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  //apply theme on load
  useEffect(() => {
    applyTheme();
  }, []);
  return <>{children}</>;
}
export const mapThemeToTwTheme: (theme: ITheme) => TailwindITheme = (theme: ITheme) => {
  const twThemeObject: TailwindITheme = {
    '--color-primary-100': theme['primary-100'],
    '--color-primary-300': theme['primary-300'],
    '--color-primary-500': theme['primary-500'],
    '--color-primary-700': theme['primary-700'],
    '--color-primary-900': theme['primary-900'],
    '--color-secondary-100': theme['secondary-100'],
    '--color-secondary-300': theme['secondary-300'],
    '--color-secondary-500': theme['secondary-500'],
    '--color-secondary-700': theme['secondary-700'],
    '--color-secondary-900': theme['secondary-900'],
  };

  return twThemeObject;
};

export const extend: (extending: ITheme, newTheme: Partial<ITheme>) => ITheme = (
  extending,
  newTheme
) => {
  return { ...extending, ...newTheme };
};

export const applyFullTheme = (theme: ITheme): void => {
  const twThemeObject: TailwindITheme = mapThemeToTwTheme(theme);
  if (!twThemeObject) return;
  const root = document.documentElement;

  Object.keys(twThemeObject).forEach((property) => {
    if (property === 'name') {
      return;
    }

    root.style.setProperty(property, hexToRgb(twThemeObject[property as TailwindThemeColor]));
  });
};

export const applyPartialTheme = (themeColor: Partial<ITheme>): void => {
  const themeObject: ITheme = extend(base, themeColor);
  const twThemeObject = mapThemeToTwTheme(themeObject);

  if (!twThemeObject) return;
  const root = document.documentElement;

  Object.keys(twThemeObject).forEach((property) => {
    if (property === 'name') {
      return;
    }
    root.style.setProperty(property, hexToRgb(twThemeObject[property as TailwindThemeColor]));
  });
};

export function applyTheme(theme?: Partial<ITheme>) {
  if (theme) {
    applyPartialTheme(theme);
  } else {
    applyFullTheme(base);
  }
}
