import { CartItem, CartAction } from '../types';

export const cartReducer = (
  state: CartItem[],
  action: CartAction
): CartItem[] => {
  switch (action.type) {
    case 'ADD_ITEM':
      // TODO: Implement adding an item to the cart

      return state;
    case 'REMOVE_ITEM':
      // TODO: Implement removing an item from the cart
      return state;
    case 'UPDATE_QUANTITY':
      // TODO: Implement updating the quantity of an item in the cart
      return state;
    case 'CLEAR_CART':
      // TODO: Implement clearing the cart
      return [];
    default:
      return state;
  }
};
