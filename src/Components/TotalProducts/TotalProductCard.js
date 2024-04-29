import React from "react";
import { IoMdAdd } from "react-icons/io";

import "./TotalProductCard.css";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";
import {ToastContainer,toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {cartActions} from "../../Redux/cartSlice"
import { MdAddShoppingCart } from "react-icons/md";

const TotalProductCard = ({item}) => {
  const dispatch=useDispatch();
  const addToCart=()=>{
    dispatch(cartActions.addItem({
      id:item.id,
      title:item.title,
      price:item.price,
      imgUrl:item.imgUrl
    }))
    toast.success("Product added successfully")
  }
  return (
    <div className="col-lg-3 md-4 mb-2">
      <div className="product_item">
        <div className="product_img">
          <motion.img  whileHover={{scale:0.9}}src={item.imgUrl} alt="" />
        </div>
        <div className="p-2 product_info">
          <h3 className="product_name"><Link  to={`/shop/${item.id}`}>{item.title}</Link> </h3>
          <span className=""> {item.category}</span>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-4">
         
          <span className="price">Rs {item.price}</span>
          <span className="" style={{textDecoration:"line-through"}}>Rs {item.oldPrice}</span>
          <span style={{color:"coral"}}>(10% OFF)</span>
          <motion.span whileTap={{scale:1.2}} onClick={addToCart}>
            <MdAddShoppingCart
              style={{
                fontSize: "1.8rem",
                padding: "5px",
                background: "black",
                color: "white",
                borderRadius: "50px",
              }}
            />
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default TotalProductCard;
