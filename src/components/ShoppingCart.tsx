import React, { Key, useCallback, useState } from 'react';
import { Box, Typography, Button, List } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// TODO: Import CartItem component and necessary hooks
import { useCartDispatch, useCartState } from '../contexts/CardContext';
import { CartItem } from './CartItem';
import { CartItem as CartItemType } from '../types';
import { ModalBuy } from './ModalBuy';

export const ShoppingCart: React.FC = () => {
  // TODO: Implement hooks to access cart state and dispatch
  const [open, setOpen] = useState(false);
  const dispatch = useCartDispatch();
  const carts = useCartState();

  // TODO: Implement removeItem function
  const handleRemoveItem = useCallback(
    (productId: number) => {
      dispatch({ type: 'REMOVE_ITEM', payload: productId });
    },
    [dispatch]
  );

  // TODO: Implement updateQuantity function
  function handleUpdateQuantity(productId: number, newQuantity: number) {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: productId, quantity: newQuantity },
    });
  }

  // TODO: Implement clearCart function
  function handleClearItem() {
    dispatch({ type: 'CLEAR_CART' });
  }

  // TODO: Calculate total price
  function handleCalculatePrice() {
    let totalPrice = 0;
    carts.items.map((item: CartItemType) => {
      totalPrice = totalPrice + item.price * item.quantity;
    });
    return <Typography>{`total price: $${totalPrice.toFixed(2)}`}</Typography>;
  }

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Box>
      <ModalBuy
        items={carts.items}
        open={open}
        handleClose={handleCloseModal}
      />
      <Typography variant="h5" gutterBottom>
        <ShoppingCartIcon sx={{ mr: 2 }} />
        Shopping Cart
      </Typography>
      <List>
        {
          /* TODO: Render cart items */
          carts.items.length > 0 ? (
            carts.items.map((product: CartItemType, index: Key) => {
              return (
                <CartItem
                  key={index}
                  item={product}
                  updateQuantity={handleUpdateQuantity}
                  removeItem={handleRemoveItem}
                />
              );
            })
          ) : (
            <Typography>ยังไม่มีสินค้า</Typography>
          )
        }
      </List>
      <Box sx={{ mt: 2 }}>
        {
          /* TODO: Display total price */
          handleCalculatePrice()
        }
      </Box>
      <Box display="grid" gridTemplateColumns="max-content max-content" gap={5}>
        <Box sx={{ mt: 2 }}>
          {
            /* TODO: Implement Clear Cart button */
            <Button
              disabled={carts.items.length == 0}
              onClick={handleClearItem}
            >
              clear
            </Button>
          }
        </Box>
        <Box sx={{ mt: 2 }}>
          {
            /* TODO: Implement Clear Cart button */
            <Button
              disabled={carts.items.length == 0}
              variant="contained"
              onClick={handleOpenModal}
            >
              buy
            </Button>
          }
        </Box>
      </Box>
    </Box>
  );
};

// Requirements for live coding interview:
// 1. Import and use the necessary hooks from the CartContext
// 2. Implement functions to remove items, update quantities, and clear the cart
// 3. Calculate the total price of items in the cart
// 4. Render the list of cart items using the CartItem component
// 5. Display the total price
// 6. Implement the Clear Cart button functionality
// 7. Ensure proper typing for all functions and variables
// 8. Handle edge cases, such as an empty cart
// 9. Bonus: Add a checkout button and implement basic checkout logic
