// Requirements for live coding interview:
// 1. Create a CartContext and CartProvider to manage the shopping cart state
// 2. Implement the ProductList component:
//    - Fetch product data from an API or use mock data
//    - Display products in a grid or list format
//    - Each product should have an "Add to Cart" button
// 3. Implement the ShoppingCart component:
//    - Display items added to the cart
//    - Show the total price
//    - Allow users to remove items or change quantities
// 4. Use Material-UI components for styling and layout
// 5. Implement proper state management using React hooks and context
// 6. Ensure the application is responsive and works well on different screen sizes
// 7. Bonus: Add error handling and loading states for data fetching
// 8. Bonus: Implement a checkout process or order summary

import { ShoppingCart } from './components/ShoppingCart';
import { ProductList } from './components/ProductList';
import {
  CssBaseline,
  ThemeProvider,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { theme } from './theme';
import { CartProvider } from './contexts/CardContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* TODO: Implement CartProvider */}
      <CartProvider>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom sx={{ my: 4 }}>
            Our Store
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h5" gutterBottom>
                Products
              </Typography>
              {/* TODO: Implement ProductList component */}
              <ProductList />
            </Grid>
            <Grid item xs={12} md={4}>
              {/* TODO: Implement ShoppingCart component */}
              <ShoppingCart />
            </Grid>
          </Grid>
        </Container>
      </CartProvider>
      {/* TODO: Close CartProvider */}
    </ThemeProvider>
  );
}

export default App;
