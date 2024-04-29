
import React, { useEffect, useState } from 'react';
import { productListDetails,deleteProduct } from "../../Redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { productUploadURL } from '../../Helper/Helper';
import { Pagination } from '@mui/material';
//import Pagination from '@mui/material/Pagination';
import SweetAlertComponent from '../SweetAlert/SweetAlert';
import "./ProductDetails.css";
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productList, totalNoOfPage } = useSelector((state) => state?.productdetails);
    const {id}=useParams();
    console.log(id,typeof(id));
  const [delete_id,setDelete_id]=useState({id});
  const [isDelete,setIsDelete]=useState(false);
    const [totalRecords,setPage] = useState();
    const dispatch = useDispatch();
   
    useEffect(()=>{
        dispatch(productListDetails())
         },[]);
  const handleChange = (item,pageno) => {
         setPage(pageno);
         let data={
            page:pageno,
            perpage:10
         }
         dispatch(productListDetails(data));
            
               
 };
 

    const delete_func=(id)=>{
        if(delete_id!==""){
            dispatch(deleteProduct(delete_id)).then(()=>{
                dispatch(productListDetails());
            })
        }
        setDelete_id("");
        setIsDelete(false);
    }

    return (
        <> <div id="allproducts" className="section-p_1">
            <div className="all_products_title"><h3>All Customised Products</h3></div>
            <div className="prod-details">
                {productList?.map((item,index) =>{
                    return(
                    
                <div key={index} className="prod-card">
                    
                 <h3 className="prod-title">{item?.title}</h3>
                 <h2 className="prod-text">{item?.description}</h2>
                 {/* <img style={{width:"200px",height:"200px",borderRadius:"50px"}}  */}
               <img  src={item?.image?productUploadURL(item?.image) : "default"}
                  alt="productimage"/>
                 <Link to={`/product/detail/${item?._id}`} className="btn_11 btn-primary_11">Edit</Link>
                 <Link to="" className="btn_11 btn-danger_11" 
                 onClick={()=>{setDelete_id(`${item?._id}`) ;setIsDelete(true)}}>Delete</Link>
             </div>
                )})}               
                 
            
                   {isDelete && (<SweetAlertComponent confirm={delete_func}
                cancel={()=>{setIsDelete(false)}} 
                title="Are you Sure?" subtitle="You will not be able to recover!">

                </SweetAlertComponent>)}
                </div>
                </div>
                <div style={{textAlign:"center", display: "flex", justifyContent: "center", alignItems: "center"}}>
           <Pagination count={totalNoOfPage} 
                 onChange={handleChange} totalRecords={totalRecords} color="secondary"/> 
                   </div> 
           </>    
    );
};



export default ProductDetails;
