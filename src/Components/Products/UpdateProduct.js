import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import { editProduct,editList } from "../../Redux/productSlice";
import {useNavigate, useParams} from "react-router-dom";
import { productUploadURL } from '../../Helper/Helper';
import "./UpdateProduct.css";

const UpdateProduct = () => {
  const {id}=useParams();
  console.log(id,typeof(id));
  const dispatch=useDispatch();
  const navigate=useNavigate();
  useEffect(()=>{
    dispatch(editList(id))
  },[id])
  const {researchDetailsData}=useSelector((state)=>state?.productdetails);
  const [product,setProduct]=useState({
    title:"",
    description:""
  })
  const [img,setImage]=useState(null);
  const handleChange=(e)=>{
  const {name,value}=e.target;
  setProduct({...product,[name]:value})
  }
  const handleImageChange=(e)=>{
     setImage(e.target.files[0]);
  }
  const handleSubmit=(e)=>{
   e.preventDefault();
  let formData=new FormData();
   formData.append("id",id);
   formData.append("title",product?.title);
   formData.append("description",product?.description);
   formData.append("image",img);
   
  // let data={
  //   id:id,
  //  title:product?.title,
  //   description:product?.description,
  //   image:img,
    

  // }
   dispatch(editProduct(formData)).then(()=>
   navigate("/createdProduct")
  
 )}
  useEffect(()=>{
if(researchDetailsData!==null){
  setProduct({
     title:researchDetailsData.title,
    description:researchDetailsData.description,
    //  image:researchDetailsData.image
  })
}
  },[researchDetailsData])
  return (
   <>
   <div className="product">
    <form className="submit_form" onSubmit={handleSubmit}>
        <h1 className="header_style">Update</h1>
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
             <div>
             {
              img!==null && img!==undefined && img!==""?
              (<img style={{ width: "100px",
              height: "100px",}} src={URL.createObjectURL(img)} alt="product"/>):(
                <>
                {img===""?(<img src="images/247support.png" alt="error"/>):
                (<img  style={{ width: "100px",
                height: "100px",}}src={productUploadURL(researchDetailsData?.image)} alt="img"/>)}
                </>
              )
             }
             </div>
        <button className="submit_button">Submit</button>
    </form>
   </div>
    
   </>
  )
}

export default UpdateProduct
