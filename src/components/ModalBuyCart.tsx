import { Alert, Backdrop, Box, Button, CircularProgress, Modal, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { CartItem } from "../types";

interface ModalBuyCartProps {
    open: boolean;
    items: CartItem[];
    handleClose: () => void;
    handlePayment: () => Promise<boolean>;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

interface MessageType {
    type: "" | "success" | "error";
    text: string;
}

export const ModalBuyCart: React.FC<ModalBuyCartProps> = React.memo(({ items, open, handleClose, handlePayment }) => {

    const [closeButton, setCloseButton] = React.useState<boolean>(false);
    const [message, setMessage] = React.useState<MessageType>({ type: "", text: "" });

    const handleCalculatePrice = useCallback(() => {
        let totalPrice = 0;
        items.map((item: CartItem) => {
            totalPrice = totalPrice + item.price * item.quantity;
        });
        return <Typography sx={{ mt: 2 }}>{`total price: $${totalPrice.toFixed(2)}`}</Typography>;
    }, [items]);

    const handleConfirmButton = useCallback(async () => {
        setCloseButton(true);
        handlePayment()
            .then((status: any) => {
                setMessage({ type: "success", text: "Payment successful." });
                setTimeout(() => {
                    handleClose();
                    setCloseButton(false);
                    setMessage({ type: "", text: "" });
                }, 2000)
            })
            .catch((error: any) => {
                setMessage({ type: "error", text: "Payment unsuccessful." });
                setTimeout(() => {
                    setCloseButton(false);
                    setMessage({ type: "", text: "" });
                }, 2000)
            })
    }, []);

    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {
                message.text !== '' && message.type !== '' ? (
                    <Box sx={style}>
                        <Alert severity={message.type} id="modal-modal-title">{message.text}</Alert>
                    </Box>
                ) : (
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Cart summary
                        </Typography>
                        <Box
                            display={'grid'}
                            gridTemplateColumns={"1fr 1fr 1fr"}
                            justifyContent={'space-between'}
                        >
                            <Typography sx={{ mt: 2 }}>
                                product name
                            </Typography>
                            <Typography sx={{ mt: 2, textAlign: 'center' }}>
                                quantity
                            </Typography>
                            <Typography sx={{ mt: 2, textAlign: 'center' }}>
                                price
                            </Typography>
                        </Box>
                        {
                            items.map((product: CartItem, index: React.Key) => (
                                <Box
                                    key={index}
                                    display={'grid'}
                                    gridTemplateColumns={"1fr 1fr 1fr"}
                                    justifyContent={'space-between'}
                                >
                                    <Typography sx={{ mt: 2 }}>
                                        {product.name}
                                    </Typography>
                                    <Typography sx={{ mt: 2, textAlign: 'center' }}>
                                        {product.quantity}
                                    </Typography>
                                    <Typography sx={{ mt: 2, textAlign: 'center' }}>
                                        {`$${(product.price * product.quantity).toFixed(2)}`}
                                    </Typography>
                                </Box>
                            ))
                        }
                        {handleCalculatePrice()}
                        <Box sx={{ width: "100%", display: 'flex', justifyContent: "end", gap: 2 }}>
                            <Button
                                sx={{ mt: 3 }}
                                variant="outlined"
                                color="error"
                                disabled={closeButton}
                                onClick={handleClose}
                            >close</Button>
                            <Button
                                sx={{ mt: 3 }}
                                variant="contained"
                                disabled={closeButton}
                                startIcon={
                                    closeButton && <CircularProgress size={20} />
                                }
                                onClick={handleConfirmButton}
                            >confirm</Button>
                        </Box>
                    </Box>
                )
            }
        </Modal>
    );

});