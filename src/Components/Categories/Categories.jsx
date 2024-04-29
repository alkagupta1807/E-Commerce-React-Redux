import React from 'react'
import "./Categories.css"
import { Link, useParams } from 'react-router-dom';
import categoriesProducts from '../../assets/data/categoriesProducts';

const Categories = () => {
    
  return (<>
    <div style={{textAlign:"center",marginBottom:"50px"}}><h1 data-aos="zoom-out">Store To Explore</h1></div>
    <div className="categories">
       
        <div className="col_1">
 <div className="row_1">
    <img src="images/linen-category.jpg" className="img_style_c" alt=""/>
    <button className="button_style_c">
        <Link to={`/totalproducts/1`} className="link_style" >Linen Shirt</Link>
    </button>
 </div>
 <div className="row_1">
    <img src="images/saree-category.jpg" className="img_style_c" alt=""/>
    <button className="button_style_c">
        <Link className="link_style" to="/totalproducts/1" >Saree</Link>
    </button>
 </div>
        </div>
        <div className="col_1">
            <div className="row_1">
            <img src="images/newformal.jpg" className="img_style_c" alt=""/>
    <button className="button_style_c">
        <Link to="/totalproducts/1" className="link_style">Formals</Link>
    </button>
            </div>
        </div>
        <div className="col_1 col-l_1">
            <div className="row_1">
                <div className="col_1">
                    <div className="row_1">
                    <img src="images/kurta-category.jpg" className="img_style_c" alt=""/>
    <button className="button_style_c">
        <Link className="link_style" to="/totalproducts/1" >Kurta Set</Link>
    </button>
                    </div>
                </div>
                <div className="col_1">
                    <div className="row_1">
                    <img src="images/floraldress-category.jpg" className="img_style_c" alt=""/>
    <button className="button_style_c">
        <Link className="link_style" to="/totalproducts/1" >Floral Dress</Link>
    </button>
                    </div>
                </div>
            </div>
            <div className="row_1">
            <img src="images/only_1.png" className="img_style_c" alt=""/>
    <button className="button_style_c">
        <Link className="link_style" to="/totalproducts/1" >Top Notch Tops</Link>
    </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Categories