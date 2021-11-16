import React, { useContext, useEffect } from 'react';
import { Context } from "../../../Context";
import Chart from '../../Components/Chart/Chart';

export const BearChartPage = () => {
  const [, setContext] = useContext(Context);

  useEffect(() => {
    setContext("SadBear")
  })

  return (
    <>
      <main>
        <Chart></Chart>
      </main>
    </>
  )
}


export default BearChartPage;
