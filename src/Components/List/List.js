import React from 'react'
import "./List.css";
 import products from '../../assets/data/products';
import Card from '../Card/Card';


const List = () => {

  return (
    <div className="list">{products?.map((item)=>{
      console.log(item);
        return(
            <Card key={item.id} item={item} />
        )
    })}</div>
  )
}

export default List