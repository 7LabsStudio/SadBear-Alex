import React, { useContext, useEffect } from 'react';
import { Context } from "../../../Context";
import "./ProductPage.scss"
import Header from '../../Components/Header/Header';
import Product from '../../Components/Product/Product';


export const ProductPage = () => {
  const [, setContext] = useContext(Context);

  useEffect(() => {
    setContext("SadBear")
  })

  return (
    <main className="product-page">
      <Header />
      <Product />
    </main>
  )
}


export default ProductPage;
