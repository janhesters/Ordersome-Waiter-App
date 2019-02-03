import { Platform } from 'react-native';

export const getIconName = (icon: string): string =>
  `${Platform.select({ android: 'md', ios: 'ios' })}-${icon}`;
