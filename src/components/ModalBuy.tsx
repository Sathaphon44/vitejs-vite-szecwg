import {
  Box,
  Button,
  ListItem,
  ListItemButton,
  Typography,
} from '@mui/material';
import Modal from '@mui/material/Modal';
import { CartItem } from '../types';
import ListItemText from '@mui/material/ListItemText/ListItemText';

interface ModalBuyProps {
  items: CartItem[];
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const ModalBuy: React.FC<ModalBuyProps> = ({
  items,
  open,
  handleClose,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {items.map((product: CartItem) => {
          return (
            <ListItem>
              <ListItemText>{product.name}</ListItemText>
              <ListItemText>{product.price}</ListItemText>
            </ListItem>
          );
        })}
        <Button variant="contained">confirm</Button>
      </Box>
    </Modal>
  );
};
