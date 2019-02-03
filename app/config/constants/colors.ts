import { Platform } from 'react-native';

/**
 * OrderSome colors
 */
// Primary
export const primaryDarkColor = '#D32D25';
export const primaryColor = '#D73E1F';
export const primaryLightColor = '#DC4F19';

// Secondary
export const secondaryDarkColor = '#E4710C';
export const secondaryColor = '#E98206';
export const secondaryLightColor = '#ED9300';

// Miscellaneous
export const companyBlack = '#282828';
export const companyGray = '#a0a0a0';

/**
 * Generic
 * Palette generated via https://coolors.co/.
 */
// Miscellaneous
export const backgroundWhite = '#fff';
export const borderGrey = '#A7A7AA';
export const appBarWhite = '#FEFDFD';
export const facebookBlue = '#4267B2';

// Platform
export const platformBlue = Platform.select({
  android: '#2196f3', // rgb(33, 150, 243)
  ios: '#007aff' // rgb(0, 122, 255)
});
export const platformGreen = Platform.select({
  android: '#4caf50',
  ios: '#4cd964'
});
export const platformRed = Platform.select({
  android: '#f44336',
  ios: '#ff3b30'
});
export const platformYellow = Platform.select({
  android: '#ffeb3b',
  ios: '#ffcc00'
});
