import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartItem as CartItemType } from '../types';

interface CartItemProps {
  item: CartItemType;
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
}

export const CartItem: React.FC<CartItemProps> = React.memo(
  ({ item, updateQuantity, removeItem }) => {
    const handleQuantityChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const newQuantity = parseInt(event.target.value, 10);
      if (newQuantity > 0) {
        updateQuantity(item.id, newQuantity);
      }
    };

    return (
      <ListItem>
        <ListItemText
          primary={item.name}
          secondary={`$${item.price.toFixed(2)}`}
        />
        <TextField
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          inputProps={{ min: 1 }}
          sx={{ width: 70, mx: 2 }}
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => removeItem(item.id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
);
