import React from 'react'
import "./Cart.css";
import productImg01 from "../../assets/images/featured_1.1.png";
import productImg02 from "../../assets/images/featured_1.2.png";
import productImg03 from "../../assets/images/featured_2.2.png";
import { MdOutlineDelete } from "react-icons/md";

import productImg04 from "../../assets/images/featured_2.1.png";
import { cartActions } from '../../Redux/cartSlice';
import { useSelector,useDispatch } from 'react-redux';
const Cart = () => {
const dispatch=useDispatch();
const cartItems=useSelector(state=>state?.cart.cartItems);
const totalAmount=useSelector(state=>state?.cart.totalAmount);

  return (
    
    <div className="cart_sty">
        <h1 className="h1_cart">Products in your Cart</h1>
        {cartItems.length===0?(<h2>No item added to the cart</h2>):(
          
        <>
        {cartItems?.map((item)=>{
            return(
           
        <Comp item={item} key={item.id}/>
                
              
            )
        })}
        </>)}
       
     <div className="subtotal">
        <span>SUBTOTAL</span>
        <span className="exact_price">Rs {totalAmount}</span>
        </div>   
        <button className="proceed_btn">PROCEED TO CHECKOUT</button>
        <span className="reset">Continue Shopping</span>
    </div>
    
  )
}
const Comp=({item})=>{
  const dispatch=useDispatch();
  const deleteProduct=()=>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return(
<>
<div className="item_cart" key={item.id}>
         <img  className="item_cart_img" src={item.imgUrl} alt=""/>
         <div className="details_cart">
            <h1 className="detail_h1">{item.title}</h1>
           
            {/* <p className="detail_p">{item.description.substring(0,100)}</p> */}
            <div className="price_cart">{item.quantity}*Rs{item.price}</div>
               </div>
               <MdOutlineDelete onClick={deleteProduct} className="delete_icon" />
                </div>
</>
  )
} 

export default Cart