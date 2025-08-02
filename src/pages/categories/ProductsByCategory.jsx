// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { api } from "../../utils/api";

// const imgURL = "https://ms.my.com/uploads/";

// const ProducstByCategory = () => {
//   const { id } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     console.log("Fetching category ID:", id);
//     api.get(`/categories/${id}/products`)
//       .then((res) => {
//         console.log("API Response:", res.data);
//         setProducts(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("API Fetch Error:", err);
//         setError("Failed to load products.");
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <p className="text-center my-5">Loading...</p>;
//   if (error) return <p className="text-danger text-center">{error}</p>;

//   return (
//     <>
//     <div className="padding-top"></div>
//     <div className="container my-5">
//       <h2 className="mb-4">Category {id}</h2>

//       {products.length > 0 ? (
//         <div className="row">
//           {products.map((product) => (
//             <div key={product.id} className="col-md-4 mb-3">
//               <div className="card h-100 shadow-sm">
//                 <img
//                   src={imgURL + product.image}
//                   alt={product.product_name}
//                   className="card-img-top"
//                   style={{ height: "200px", objectFit: "cover" }}
//                   />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.product_name}</h5>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-muted">No products found in this category.</p>
//       )}
//     </div>
//       </>
//   );
// };

// export default ProducstByCategory;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"; // To access the dynamic :id in the URL
// import { api } from "../../utils/api"; // Your custom Axios instance for API calls

// const imgURL = "https://ms.my.com/uploads/"; // Base URL for product images

// const ProductByCategory = () => {
//   // Extract the category ID from the route, e.g. /productsbycategory/:id
//   const { id } = useParams();

//   // Local state to hold the category name and its products
//   const [categoryName, setCategoryName] = useState("Category");
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // useEffect runs once on component mount or when id changes
//   useEffect(() => {
//     // 🔹 Fetch all categories (with products) to get the category name for this ID
//     api.get("/categories-with-products")
//       .then((res) => {
//         // Find the category object that matches the current ID
//         const matched = res.data.find((cat) => cat.id === parseInt(id));
//         if (matched) {
//           setCategoryName(matched.name); // Set the category name in local state
//         }
//       })
//       .catch(() => {
//         setCategoryName("Category"); // Fallback if fetching category name fails
//       });

//     // 🔹 Fetch products for the selected category by ID
//     api.get(`/categories/${id}/products`)
//       .then((res) => {
//         setProducts(res.data || []); // Store product list or empty array
//         setLoading(false); // Set loading to false after data is received
//       })
//       .catch((err) => {
//         console.error("Failed to fetch:", err);
//         setLoading(false); // Stop loading even on error
//       });
//   }, [id]); // Effect runs again if the `id` param changes

//   // 🟡 Show loading text while API is fetching
//   if (loading) return <p className="text-center my-5">Loading...</p>;

//   return (
//     <>
//       <div className="padding-top"></div>
//       <div className="container my-5">
//         {/* 🟢 Dynamic category name displayed here */}
//         <h2 className="mb-4">{categoryName}</h2>

//         {/* ✅ If products exist, display them in a grid */}
//         {products.length > 0 ? (
//           <div className="row">
//             {products.map((product) => (
//               <div key={product.id} className="col-md-4 mb-3">
//                 <div className="card h-100 shadow-sm">
//                   <img
//                     src={imgURL + product.image}
//                     alt={product.product_name}
//                     className="card-img-top"
//                     style={{ height: "200px", objectFit: "cover" }}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{product.product_name}</h5>

//                     {/* 🔸 Display price, fallback to selling_price or show N/A */}
//                     <p className="card-text">
//                       ₹{product.price ?? product.selling_price ?? "N/A"}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           // 🔻 If no products are returned
//           <p className="text-muted">No products found in this category.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default ProductByCategory;




import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Added Link for navigation
import { api } from "../../utils/api";

const imgURL = "https://ms.my.com/uploads/";

const ProductByCategory = () => {
  const { id } = useParams();

  const [categoryName, setCategoryName] = useState("Category");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch category name
    api.get("/categories-with-products")
      .then((res) => {
        const matched = res.data.find((cat) => cat.id === parseInt(id));
        if (matched) {
          setCategoryName(matched.name);
        }
      })
      .catch(() => {
        setCategoryName("Category");
      });

    // Fetch category products
    api.get(`/categories/${id}/products`)
      .then((res) => {
        setProducts(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center my-5">Loading...</p>;

  return (
    <>
      <div className="padding-top"></div>
      <div className="container my-5">
        <h2 className="mb-4">{categoryName}</h2>

        {products.length > 0 ? (
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-4 mb-3">
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="card h-100 shadow-sm">
                    <img
                      src={imgURL + product.image}
                      alt={product.product_name}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.product_name}</h5>
                      <p className="card-text">
                        ₹{product.price ?? product.selling_price ?? "N/A"}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted">No products found in this category.</p>
        )}
      </div>
    </>
  );
};

export default ProductByCategory;
