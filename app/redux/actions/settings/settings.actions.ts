import { createAction } from 'typesafe-actions';
import { TOGGLE_SETTINGS } from '../../../config/constants/actionUtils';

export const toggle = createAction(TOGGLE_SETTINGS, resolve => {
  return (setting: string) => resolve(setting);
});
