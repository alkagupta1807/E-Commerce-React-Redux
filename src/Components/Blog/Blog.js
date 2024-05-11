import React,{useState} from 'react'
import "./Blog.css";

const Blog = () => {
    const [visibleBlogs,setVisibleBlogs]=useState(3);
    const blogsPerPage=3;
    const handleLoadMore=()=>{
        setVisibleBlogs(prevVisibleBlogs=>prevVisibleBlogs+blogsPerPage);
    }

  return (
   <>
    
    <section id = "offers" className = "py-5">
        <div className = "container">
            <div className = "row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start">
                <div className = "offers-content">
                    <span className = "text-white">Discount Up To 40%</span>
                    <h2 className = "mt-2 mb-4 text-white">Grand Sale Offer!</h2>
                    <button className="btn btn-secondary" style={{padding:"0.5px",
                       backgroundColor:"black", outline:"none", border:"none" }}>
                        <a href = "#" className = "btn">Buy Now</a></button>
                </div>
            </div>
        </div>
    </section>
    

   
    <section id = "blogs" className = "py-5">
        <div className = "container">
            <div className = "title text-center py-5">
                <h2 className = "position-relative d-inline-block">Our Latest Blog</h2>
            </div>

            <div className = "row g-3">
                {[...Array(visibleBlogs)].map((_,index)=>{return( <>
                <div key={index} className = "card border-0 col-md-6 col-lg-4 bg-transparent my-3">
               
                    <img src = {`images/blog_${index+1}.jpg`} alt = "pic"/>
                    <div className = "card-body px-0">
                        <h4 className = "card-title">Lorem ipsum, dolor sit amet consectetur adipisicing</h4>
                        <p className = "card-text mt-3 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.</p>
                        <p className = "card-text">
                            <small className = "text-muted">
                                <span className = "fw-bold">Author: </span>John Doe
                            </small>
                        </p>
                       <button className="btn btn-secondary" style={{padding:"0.5px",
                       backgroundColor:"pink",color:"white",outline:"none",border:"none" }}> <a href = "#" className = "btn">Read More</a></button>
                    </div>
                </div>
                </>
                )})}


            </div>
            {visibleBlogs < 6 && ( 
          <div className="text-center">
            <button className="btn btn-primary" onClick={handleLoadMore}>Load More</button>
          </div>
        )}
        </div>
    </section>
   </>
  )
}

export default Blog;