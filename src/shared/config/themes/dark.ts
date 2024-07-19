import { extend } from 'src/shared/lib/services/theme/ThemeProvider';
import { ITheme } from 'src/shared/lib/services/theme/types';
import base from './base';

const dark: ITheme = extend(base, {});

export default dark;
