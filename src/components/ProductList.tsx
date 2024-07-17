import React, { useState, useEffect, Key } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CircularProgress,
  Alert,
  CardMedia,
  Pagination,
} from '@mui/material';
import { Product } from '../types';

// TODO: Import fetchProducts function and useCartDispatch hook
import { fetchProducts } from '../services/productApi';
import { useCartDispatch } from '../contexts/CardContext';

export const ProductList: React.FC = React.memo(() => {
  // TODO: Implement state for products, loading, and error
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // TODO: Implement useCartDispatch hook
  const dispatch = useCartDispatch();

  useEffect(() => {
    // TODO: Implement loadProducts function to fetch products
    const loadProducts = async () => {
      try {
        const productList = await fetchProducts();
        setProducts(productList);
      } catch (err) {
        setError(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // TODO: Implement addToCart function
  const addProductToCart = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  // TODO: Implement loading state UI
  if (loading) {
    return <CircularProgress />;
  }

  // TODO: Implement error state UI
  if (error) {
    return <Alert severity="error">Error loading products</Alert>;
  }

  return (
    <Grid container spacing={4}>
      {
        /* TODO: Map through products and render product cards */
        products.length > 0 ? (
          products.map((product: Product, index: Key) => (
            <Grid item key={index} xs={6} md={3}>
              <Card variant="outlined">
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                />
                <img src={product.image} alt="" width="100" />
                <CardContent>
                  <Typography>{product.name}</Typography>
                  <Typography>{`$${product.price.toFixed(2)}`}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => addProductToCart(product)}
                  >
                    add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>ยังไม่มี product</Typography>
        )
      }
      <Pagination count={10} variant="outlined" />
    </Grid>
  );
});

// Requirements for live coding interview:
// 1. Implement state management for products, loading, and error states
// 2. Fetch products from an API using the fetchProducts function
// 3. Handle loading and error states with appropriate UI components
// 4. Implement the addToCart function to dispatch the ADD_ITEM action
// 5. Create a grid of product cards using Material-UI components
// 6. Display product information (name, price, image) on each card
// 7. Add an "Add to Cart" button for each product
// 8. Ensure the component is memoized for performance optimization
// 9. Implement proper error handling for API requests
// 10. Bonus: Add pagination or infinite scrolling for large product lists
