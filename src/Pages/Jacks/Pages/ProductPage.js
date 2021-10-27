import React, { useContext, useEffect } from 'react';
import { Context } from "../../../Context";
import Header from '../../../Components/Jacks/Header/Header';
import Product from '../../../Components/Jacks/Product/Product';


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
