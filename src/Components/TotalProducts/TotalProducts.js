import React, { useState } from "react";

import { CiSearch } from "react-icons/ci";
import "./TotalProducts.css";
import categoriesProducts from "../../assets/data/categoriesProducts";

import TotalProductList from "./TotalProductList";

const TotalProducts = () => {
  const [productsData, setProductsData] = useState(categoriesProducts);
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "kurta") {
      const filteredProducts = categoriesProducts.filter(
        (item) => item.category === "kurta"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "saree") {
      const filteredProducts = categoriesProducts.filter(
        (item) => item.category === "saree"
      );
      setProductsData(filteredProducts);
    }
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = categoriesProducts.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts)
  };
  return (
    <>
     
      <section>
        <div className="container">
          <div className="row">
            <div className="col lg-3 md-6">
              <div className="filter_widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="kurta">Kurta</option>
                  <option value="saree">Saree</option>
                </select>
              </div>
            </div>
            <div className="col lg-3 md-6 text-end">
              <div className="filter_widget">
                <select>
                  <option>Sort By </option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </div>
            <div className="col lg-6 md-12">
              <div className="search_box">
                <input type="text" placeholder="Search..." onChange={(e)=>handleSearch(e)} />
                <span>
                  <CiSearch />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            {productsData.length === 0 ? (
              <h1>No Products are found!</h1>
            ) : (
              <TotalProductList data={productsData} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TotalProducts;


