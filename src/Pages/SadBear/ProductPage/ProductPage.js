import React, { useContext, useEffect } from 'react';
import { Context } from "../../../Context";
import "./ProductPage.scss"
import BearHeader from '../../../Components/Bear/BearHeader/BearHeader';
import Product from '../../../Components/Bear/Product/Product';


export const ProductPage = () => {
  const [, setContext] = useContext(Context);

  useEffect(() => {
    setContext("SadBear")
  })

  return (
    <main className="product-page">
      <BearHeader />
      <Product />
    </main>
  )
}


export default ProductPage;
