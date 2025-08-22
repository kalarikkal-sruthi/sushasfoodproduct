// import React, { useState } from "react";
// import { Form, FormControl, Button, InputGroup, Container, Row, Col } from "react-bootstrap";
// import { Search } from "react-bootstrap-icons";
// import search from "../../assets/header/search.png";

// function Searchbar({ onSearch }) {
//   const [query, setQuery] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (onSearch) {
//       onSearch(query);
//     }
//   };

//   return (
    
//           <Form onSubmit={handleSubmit}>
//             <InputGroup>
//               <FormControl className="box-shadow-none"
//                 type="text"
//                 placeholder="Search products, categories..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//               />
//               <Button type="submit" variant="primary"  style={{background:'#5caf47',border:'1px solid #5caf47'}}>
//                   <img src={search} alt="susha's food product" />
//               </Button>
//             </InputGroup>
//           </Form>
      
//   );
// }

// export default Searchbar;


// import { useDispatch, useSelector } from "react-redux";
// import { setSearchQuery } from "../../store/categoryProductSlice";
// //  import { Form, FormControl, Button, InputGroup, Container, Row, Col } from "react-bootstrap";
// // import { setSearchQuery, clearSearch } from "../store/categoryProductSlice";

// function Searchbar() {
//   const dispatch = useDispatch();
//   const { searchQuery, searchResults } = useSelector(
//     (state) => state.categoryProducts
//   );

//   const handleChange = (e) => {
//     dispatch(setSearchQuery(e.target.value));
//   };

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Search products, categories..."
//         value={searchQuery}
//         onChange={handleChange}
//       />

//       {/* Search dropdown */}
//       {searchQuery && searchResults.length > 0 && (
//         <ul className="list-group">
//           {searchResults.map((item) => (
//             <li key={item.id} className="list-group-item">
//               {item.product_name}{" "}
//               <small className="text-muted">({item.categoryName})</small>
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// }

// export default Searchbar;

// 📌 Searchbar.jsx (Sid: 21 Aug 2025 - Updated )

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, selectFilteredProducts } from "../../store/categoryProductSlice";
import { Form, FormControl, Button, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import search from "../../assets/header/search.png";

function Searchbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchQuery = useSelector((state) => state.categoryProducts.searchQuery);
  const searchResults = useSelector(selectFilteredProducts(searchQuery));

  const handleChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSelectProduct = (productId) => {
    // navigate to product details page
    navigate(`/product/${productId}`);
    dispatch(setSearchQuery("")); // clear search after selection
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // optional: could navigate to a search results page
  };

  return (
    <div className="position-relative">
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <FormControl
           className="box-shadow-none search-input"
            type="text"
            placeholder="Search products, categories..."
            value={searchQuery}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="primary"
            style={{ background: "#5caf47", border: "1px solid #5caf47" }}
          >
            <img src={search} alt="susha's food product" />
          </Button>
        </InputGroup>
      </Form>

      {/* 🔍 Search Results Dropdown */}
      {searchQuery && searchResults.length > 0 && (
        <ul
          className="list-group position-absolute w-100 mt-1"
          style={{ zIndex: 1000 }}
        >
          {searchResults.map((item) => (
            <li
              key={item.id}
              className="list-group-item list-group-item-action"
              style={{ cursor: "pointer" }}
              onClick={() => handleSelectProduct(item.id)}
            >
              {item.product_name}{" "}
              <small className="text-muted">({item.categoryName})</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Searchbar;
