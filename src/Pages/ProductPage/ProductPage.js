import React from 'react';
import "./ProductPage.scss"
import BearHeader from '../../Components/BearHeader/BearHeader';
import Product from '../../Components/Product/Product';


export const ProductPage = () => (
  <main className="product-page">
    <BearHeader />
    <Product />
  </main>
)


export default ProductPage;
