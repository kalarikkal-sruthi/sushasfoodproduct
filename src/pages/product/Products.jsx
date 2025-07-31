// src/pages/ProductList.jsx

import React from "react";
import { Link } from "react-router-dom";

const dummyProducts = [
  { id: 1, name: "Hair Care Oil" },
  { id: 2, name: "Skin Care Oil" },
  { id: 3, name: "Herbal Combo Pack" },
  { id: 4, name: "Hair & Skin Combo" },
];

function Products() {
  return (
    <>
   <div className="padding-top"></div>
    <div style={{ padding: "20px" }}>
      <h2>Our Products</h2>
      <ul>
        {dummyProducts.map((product) => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
     </>
  );
}

export default Products;
