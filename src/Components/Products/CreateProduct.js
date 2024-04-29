import React, { useEffect } from 'react'
import "./CreateProduct.css"
import {useState} from "react";
import { createProduct } from "../../Redux/productSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const CreateProduct = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();

const [product,setProduct]=useState ({
    title:"",
    description:""
})
const [image,setImage]=useState(null);
const handleChange=(e)=>{
    const {name,value}=e.target;
    setProduct({...product,[name]:value});

}
const handleImageChange=(e)=>{
setImage(e.target.files[0]);
}
const handleSubmit=(e)=>{
e.preventDefault();
let formData=new FormData();
formData.append("title",product?.title);
formData.append("description",product?.description);
formData.append("image",image);

// let data={
//     title:product.title,  
//     description:product.description,
//     image:image
//    }    

dispatch(createProduct(formData)).then(()=>{
    navigate("/createdProduct")

});

}
// const navigateUser=()=>{
//     let createProductPage=window.location.pathname.toLowerCase()==="/products"
//     createProductPage && navigate("/createdProduct")
//    }
//    useEffect(()=>{
//     navigateUser()
//    },[])

  return (
    <>
   <div className="product">
    <form className="submit_form" >
        <h1 className="header_style">Create </h1>
        <div className="formInput_1">
            <label className="label_1">Title</label>
            <input className="input_field" type="text" name="title" value={product?.title}
            onChange={handleChange}/>
        </div>
        <div className="formInput_1">
            <label className="label_1" >Description</label>
            <input className="input_field" type="text" name="description" value={product?.description}
            onChange={handleChange}/>
        </div>
        <div className="formInput_1">
            <label className="label_1">Image:</label>
            <input className="input_field" type="file" name="image" accept="image/*"
            
             onChange={handleImageChange}/>
             </div>
        <button className="submit_button" onClick={handleSubmit}>Submit</button>
    </form>
   </div>
    
    </>
  )
}

export default CreateProduct