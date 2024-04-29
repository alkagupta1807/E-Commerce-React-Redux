import React from 'react'
import TotalProductCard from './TotalProductCard'


const TotalProductList = ({data}) => {
  return (
    <>
    {data?.map((item,index)=>(
        <TotalProductCard item={item} key={index}/>
    ))}

</>
    
  )
}

export default TotalProductList