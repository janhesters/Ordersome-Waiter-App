import { state } from '../../../../config/fixtures';
import { Order } from '../../../../config/types';
import { createSubTitleForOrder } from './createSubTitleForOrder';

const orderWithOnlyCustomChoice: Order = { ...state.orders['order-abc'], wish: '' };
const orderWithoutAnything: Order = { ...state.orders['order-def'], wish: '' };

describe('createSubTitleForOrder', () => {
  describe('with custom choice items', () => {
    describe('without wish', () => {
      expect(createSubTitleForOrder(state.customChoiceItems, orderWithOnlyCustomChoice)).toEqual(
        'Extra Fries'
      );
    });
    describe('with wish', () => [
      it('should return the custom choice item and the wish', () => {
        expect(createSubTitleForOrder(state.customChoiceItems, state.orders['order-abc'])).toEqual(
          'Extra Fries\nExtra Ketchup, please.'
        );
      })
    ]);
  });

  describe('with wish', () => {
    it('should return the wish', () => {
      expect(createSubTitleForOrder(state.customChoiceItems, state.orders['order-def'])).toEqual(
        '\nWithout gas.'
      );
    });
  });

  describe('without anything', () => {
    describe('when no custom choice item matches e.g. failure with loading', () => {
      it('should return undefined', () => {
        expect(createSubTitleForOrder({}, orderWithOnlyCustomChoice)).toBe(undefined);
      });
    });

    it('should return undefined', () => {
      expect(createSubTitleForOrder(state.customChoiceItems, orderWithoutAnything)).toBe(undefined);
    });
  });
});
