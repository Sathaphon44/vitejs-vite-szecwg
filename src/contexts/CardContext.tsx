import React, { createContext, useReducer, useContext, useState } from 'react';
import { Product, CartItem, CartAction } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

type CartState = {
  items: CartItem[];
};

// TODO: Define CartAction type

type CartDispatch = React.Dispatch<CartAction>;

const CartStateContext = createContext<CartState | undefined>(undefined);
const CartDispatchContext = createContext<CartDispatch | undefined>(undefined);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      // TODO: Implement add item logic
      let oldItem = state.items.find(
        (item: CartItem) => item.id == action.payload.id
      );
      if (!oldItem) {
        return {
          items: [
            ...state.items,
            {
              ...action.payload,
              quantity: 1,
            },
          ],
        };
      } else {
        return state;
      }
    }
    case 'REMOVE_ITEM':
      // TODO: Implement remove item logic
      let newItems: CartItem[] = [];
      state.items.map((item: CartItem) => {
        if (item.id != action.payload) {
          newItems.push(item);
        }
      });
      return { items: newItems };
    case 'UPDATE_QUANTITY':
      // TODO: Implement update quantity logic
      let oldItem = state.items.map((item: CartItem) => {
        if (item.id == action.payload.id) {
          return { ...item, quantity: action.payload.quantity };
        } else {
          return item;
        }
      });
      return { items: oldItem };
    case 'CLEAR_CART':
      // TODO: Implement clear cart logic
      return { items: [] };
    default:
      return state;
  }
}

const initialState: CartState = {
  items: [],
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  // TODO: Implement CartProvider
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

// TODO: Implement useCartState hook
export function useCartState() {
  const context = useContext(CartStateContext);
  if (context === undefined) {
    throw new Error('useCartState must be used within a CartProvider');
  }
  return context;
}

// TODO: Implement useCartDispatch hook
export function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error('useCartDispatch must be used within a CartProvider');
  }
  return context;
}

// Requirements for live coding interview:
// 1. Complete the CartAction type definition
// 2. Implement the logic for each action in the cartReducer function
// 3. Create the CartProvider component using useReducer
// 4. Implement the useCartState and useCartDispatch custom hooks
// 5. Ensure proper type safety throughout the implementation
// 6. Handle edge cases, such as trying to remove a non-existent item
// 7. Implement error checking in the custom hooks
// 8. Bonus: Add a new action type for applying a discount to the cart
