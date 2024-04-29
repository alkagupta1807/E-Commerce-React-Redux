import React, { useState } from "react";
import "./Finalproductdetail.css";

import { MdAddShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdBalance } from "react-icons/md";
import products from "../assets/data/products";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {toast} from "react-toastify";
import { cartActions } from "../Redux/cartSlice";

const Finalproductdetail = () => {
  const dispatch=useDispatch();
  const {id}=useParams();
  console.log(id,typeof(id))
  console.log(products);
  const product=products.find((item)=>
    // console.log(typeof(item.id));
    item.id===id
   
  );
 
  
  console.log(product);
    const {title,price,imgUrl,imgUrl1,quantity}=product;
    
    
  const images=[imgUrl,imgUrl1]
  const [selectedImg, setSelectedImg] = useState(1);
  const [quantity1,setQuantity1]=useState(1);
  
  const addToCart=()=>{
    dispatch(
        cartActions.addItem({
            // id,
            imgUrl:imgUrl,
            title,
            price,
            quantity
        })
    )
    toast.success("Product added successfully")
}
  return (
    <div className="single_pro">
      <div className="left_f">
        <div className="images_div_f">
          <img
            className="img_style_f"
            src={images[0]}
            alt=""
            onClick={(e) => setSelectedImg(0)}
          />
          <img
            className="img_style_f"
            src={images[1]}
            alt=""
            onClick={(e) => setSelectedImg(1)}
          />
          
        </div>
        <div className="mainImg">
          <img className="main_imgstyle" src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right_f">
         <h1>{title}</h1> 
        <span className="price_sty">Rs {price}</span>
        <p className="p_description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quisquam
          sit harum minima dolore repudiandae veritatis exercitationem
          reprehenderit id magnam?
        </p>
        <div className="final_quantity">
            <button className="f_btn" onClick={()=>setQuantity1((prev)=>prev===1?1:prev-1)}>-</button>
            {quantity1}
            <button  className="f_btn" onClick={()=>setQuantity1((prev)=>prev+1)}>+</button>
        </div>
        <button className="add_icon">
            <MdAddShoppingCart onClick={addToCart}/>ADD TO CART
        </button>
        <div className="final_links">
            <div className="f_item">
                <MdFavoriteBorder/>ADD TO WISHLIST
            </div>
            <div className="f_item">
                <MdBalance/>ADD TO COMPARE
            </div>
        </div>
        <div className="f_info">
            <span>Vendor: Aurelia</span>
            <span>Product Type: Kurta Set</span>
            <span>Tag: Ethnic,Women,Kurta</span>
        </div>
        {/* <hr className="hr_sty"/> */}
        <div className="f_details">
            <span>DESCRIPTION</span>
            <hr className="hr_sty_1"/>
            <span>ADDITIONAL INFORMATION</span>
            <hr className="hr_sty_1"/>
            <span>FAQ</span>
        </div>
        
      </div>
    </div>
  );
};

export default Finalproductdetail;
