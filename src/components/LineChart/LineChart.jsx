import React, { useEffect } from 'react'
import Chart from 'react-google-charts'
const LineChart = ({historicaldata}) => {

    const [data,setdata] = useState([["Date","Prices"]])
    

    useEffect(()=>{
        let copy = ["Data","Prices"];
        if(historicaldata.prices){
            historicaldata.prices.map((item)=>{
                copy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
            })
            setdata(copy);
        }
    },[historicaldata])

  return (
    <Chart 
    chartType='LineChart'
    data={data}
    height="100%"
    legendToggle
    />
  )
}

export default LineChart
