// src/services/api.ts

import { Product, ProductAll } from '../types';

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Pan',
    price: 10.99,
    image:
      'https://cdn.shopify.com/s/files/1/0045/7093/9481/products/UKFRYINGPAN11RVT01.jpg',
  },
  {
    id: 2,
    name: 'Guitar',
    price: 100,
    image:
      'https://rguitars.co.uk/cdn/shop/files/electric-acoustic-guitars-vintage-historic-series-orchestra-electro-acoustic-guitar-vintage-sunburst-1.jpg',
  },
  {
    id: 3,
    name: 'Shoe',
    price: 7.99,
    image:
      'https://i5.walmartimages.com/seo/Eashery-Shoes-for-Men-Sport-Workout-Sneakers-Comfortable-Men-Shoes-Black-10_aa500205-ba8a-4b5b-83b3-6fbeef678ddc.480f707bdd92c6873286f95a0e4d324a.jpeg',
  },
  {
    id: 4,
    name: 'Washing Machine',
    price: 2000,
    image:
      'https://www.lg.com/ph/images/washing-machines/md07556668/gallery1/D-2.jpg',
  },
  {
    id: 5,
    name: 'Pan2',
    price: 10.99,
    image:
      'https://cdn.shopify.com/s/files/1/0045/7093/9481/products/UKFRYINGPAN11RVT01.jpg',
  },
  {
    id: 6,
    name: 'Guitar2',
    price: 100,
    image:
      'https://rguitars.co.uk/cdn/shop/files/electric-acoustic-guitars-vintage-historic-series-orchestra-electro-acoustic-guitar-vintage-sunburst-1.jpg',
  },
  {
    id: 7,
    name: 'Shoe2',
    price: 7.99,
    image:
      'https://i5.walmartimages.com/seo/Eashery-Shoes-for-Men-Sport-Workout-Sneakers-Comfortable-Men-Shoes-Black-10_aa500205-ba8a-4b5b-83b3-6fbeef678ddc.480f707bdd92c6873286f95a0e4d324a.jpeg',
  },
  {
    id: 8,
    name: 'Washing Machine2',
    price: 2000,
    image:
      'https://www.lg.com/ph/images/washing-machines/md07556668/gallery1/D-2.jpg',
  },
  {
    id: 9,
    name: 'Pan3',
    price: 10.99,
    image:
      'https://cdn.shopify.com/s/files/1/0045/7093/9481/products/UKFRYINGPAN11RVT01.jpg',
  },
  {
    id: 10,
    name: 'Guitar3',
    price: 100,
    image:
      'https://rguitars.co.uk/cdn/shop/files/electric-acoustic-guitars-vintage-historic-series-orchestra-electro-acoustic-guitar-vintage-sunburst-1.jpg',
  },
  {
    id: 11,
    name: 'Shoe3',
    price: 7.99,
    image:
      'https://i5.walmartimages.com/seo/Eashery-Shoes-for-Men-Sport-Workout-Sneakers-Comfortable-Men-Shoes-Black-10_aa500205-ba8a-4b5b-83b3-6fbeef678ddc.480f707bdd92c6873286f95a0e4d324a.jpeg',
  },
  {
    id: 12,
    name: 'Washing Machine3',
    price: 2000,
    image:
      'https://www.lg.com/ph/images/washing-machines/md07556668/gallery1/D-2.jpg',
  },
  {
    id: 13,
    name: 'Pan4',
    price: 10.99,
    image:
      'https://cdn.shopify.com/s/files/1/0045/7093/9481/products/UKFRYINGPAN11RVT01.jpg',
  },
  {
    id: 14,
    name: 'Guitar4',
    price: 100,
    image:
      'https://rguitars.co.uk/cdn/shop/files/electric-acoustic-guitars-vintage-historic-series-orchestra-electro-acoustic-guitar-vintage-sunburst-1.jpg',
  },
  {
    id: 15,
    name: 'Shoe4',
    price: 7.99,
    image:
      'https://i5.walmartimages.com/seo/Eashery-Shoes-for-Men-Sport-Workout-Sneakers-Comfortable-Men-Shoes-Black-10_aa500205-ba8a-4b5b-83b3-6fbeef678ddc.480f707bdd92c6873286f95a0e4d324a.jpeg',
  },
  {
    id: 16,
    name: 'Washing Machine4',
    price: 2000,
    image:
      'https://www.lg.com/ph/images/washing-machines/md07556668/gallery1/D-2.jpg',
  },
  {
    id: 17,
    name: 'Washing Machine4',
    price: 2000,
    image:
      'https://www.lg.com/ph/images/washing-machines/md07556668/gallery1/D-2.jpg',
  },
];

export const fetchProducts = (minPage: number, maxPage: number): Promise<ProductAll> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let response = { products: mockProducts.slice(minPage, maxPage),  amount_all: mockProducts.length };
      resolve(response);
    }, 1000); // Simulate network delay
  });
};
