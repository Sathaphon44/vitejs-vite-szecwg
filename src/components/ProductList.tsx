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
  const [page, setPage] = useState<number>(0);
  const [amountContent] = useState<number>(8)
  const [minContent, setMinContent] = useState<number>(0);
  const [maxContent, setMaxContent] = useState<number>(amountContent);
  const [totalPage, setTotalPage] = useState<number>(0);

  // TODO: Implement useCartDispatch hook
  const dispatch = useCartDispatch();

  useEffect(() => {
    // TODO: Implement loadProducts function to fetch products
    const loadProducts = async () => {
      try {
        setLoading(true)
        const productList = await fetchProducts(minContent, maxContent);
        setTotalPage(productList.amount_all)
        setProducts(productList.products);
      } catch (err) {
        setError(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [page]);
  
  
  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setMinContent((value - 1) * amountContent)
    setMaxContent(value * amountContent)
    setPage(value);
  };


  // TODO: Implement addToCart function
  const addProductToCart = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };  


  // TODO: Implement loading state UI
  if (loading) {
    return <CircularProgress/>;
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
            <Grid item key={index} xs={6} md={3} >
              <Card variant="outlined">
                <CardMedia
                  sx={{ p: 3, display: 'flex', justifyContent: "center", alignContent: "center" }}
                  component={"img"}
                  src={product.image}
                  alt={product.name}
                />
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
      <Pagination
        sx={{ width: "100%", pt: 1, display: 'flex', justifyContent: "center" }}
        count={Math.ceil(totalPage / amountContent)}
        variant="outlined"
        onChange={handleChangePage}
        page={page}
        defaultPage={1}
      />
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
