import 'styled-components';
import { type Theme } from './common/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
