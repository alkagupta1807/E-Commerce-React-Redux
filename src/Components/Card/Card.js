import React from 'react'
import "./Card.css";
import { Link } from 'react-router-dom';

const Card = ({item}) => {
  
  return (
    <Link className="link_card" to={`/myproduct/${item.id}`}>
    <div className="  card_pro col-lg-4 col-md-6 col-sm-12 mb-4">
        <div className="image_div">
          {item.isNew && <span className="span_style">New Season</span>}
            <img 
            src={item.imgUrl} alt="" className="mainImg   position-absolute"/>
            {/* <img 
             src={item.imgUrl1} alt="" className="secondImg  position-absolute"/> */}
        </div>
        <h2 className="head_style">{item.title}</h2>
        <div className="prices">
          <h3 className="price_2">Rs {item.price}</h3>
          <h6 style={{color:"coral"}}>(12% Off)</h6>
            <h3 className="price_1">Rs {item.oldPrice}</h3>
           
        </div>
    </div>
    </Link>
  )
}

export default Card