// import type { Theme } from '../context/theme/themeContext';

type Theme = 'light' | 'dark';

export const Class = (
  classes: Record<string, string>,
  className: string,
  theme: Theme
): string => {
  return classes[`${className}-${theme}`] || '';
};
