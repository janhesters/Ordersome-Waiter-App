import { RootState } from '../../reducers';

export const getAllCustomChoiceItemsNormalizedSelector = (state: RootState) =>
  state.customChoiceItems;
