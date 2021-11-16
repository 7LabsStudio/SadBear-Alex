import React, { useContext, useEffect } from 'react';
import { Context } from "../../Context";
import Header from '../Components/Header/Header';
import Product from '../Components/Product/Product';


export const ProductPage = () => {
  const [, setContext] = useContext(Context);

  useEffect(() => {
    setContext("Jacks")
  })

  return (
    <>
      <Header />
      <main>
        <Product />
      </main>
    </>
  )
}

export default ProductPage;
