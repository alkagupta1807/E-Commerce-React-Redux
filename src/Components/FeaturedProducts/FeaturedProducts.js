import React from "react";
import "./FeaturedProducts.css";
import products from "../../assets/data/products";

import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {

  return (
    <div className="featuredProducts">
      <div className="top_fp">
        <h1 className="h_fp" data-aos="fade-right">{type} products</h1>
        <p className="p_fp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          doloremque laudantium debitis totam et iste non accusamus cum enim
          aperiam placeat quaerat id tempora quis nulla reprehenderit blanditiis
          nobis quos, nostrum impedit, quidem at vel inventore. Unde incidunt
          molestias hic, iusto dicta velit minima perspiciatis soluta enim
          quidem blanditiis officia! At alias aliquid voluptates sit ipsum
          corporis culpa saepe nobis.
        </p>
      </div>
      <div className="bottom_fp">
        {products.map((item)=>{
            return(
                <Card item={item} key={item.id}/>
            )
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
