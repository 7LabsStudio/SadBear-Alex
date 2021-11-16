import React, { useContext, useEffect } from 'react';
import { Context } from "../../Context";
import Chart from '../Components/Chart/Chart';

export const ChartPage = () => {
  const [, setContext] = useContext(Context);

  useEffect(() => {
    setContext("Jacks")
  })

  return (
    <>
      <main>
        <Chart></Chart>
      </main>
    </>
  )
}


export default ChartPage;
