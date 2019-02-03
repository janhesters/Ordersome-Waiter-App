import { createStandardAction } from 'typesafe-actions';
import { CLEAR } from '../../../config/constants/actionUtils';

export const clear = createStandardAction(CLEAR)();
