import { CustomChoiceItem, NormalizedData, Order } from '../../../../config/types';

export const createSubTitleForOrder = (
  normalizedCustomChoiceItems: NormalizedData<CustomChoiceItem>,
  order: Order
): string | undefined => {
  const { customChoiceItems, wish } = order;
  if (customChoiceItems.length > 0) {
    const subTitle = customChoiceItems.reduce((acc, uuid, index, arr) => {
      const item = normalizedCustomChoiceItems[uuid];
      if (item) {
        acc += item.name;
      }
      acc += index < arr.length - 1 || wish ? '\n' + wish : '';
      return acc;
    }, '');
    if (!!subTitle) {
      return subTitle;
    }
  } else if (wish) {
    return '\n' + wish;
  }
  return undefined;
};
