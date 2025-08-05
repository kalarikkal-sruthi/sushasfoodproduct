import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../../utils/api";

import { productURL } from "../../utils/api";

const ProductByCategory = () => {
  const { id } = useParams();

  const [categoryName, setCategoryName] = useState("Category");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch category name
    api
      .get("/categories-with-products")
      .then((res) => {
        const matched = res.data.find((cat) => cat.id === parseInt(id));
        if (matched) {
          setCategoryName(matched.name);
        }
      })
      .catch(() => {
        setCategoryName("Category");
      });

    // Fetch products by category
    api
      .get(`/categories/${id}/products`)
      .then((res) => {
        setProducts(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center my-5">Loading...</p>;
  }

  return (
    <main className="padding-horizontal" aria-labelledby="category-heading">
      <div className="padding-top"></div>
      <div className="padding-top"></div>
      <div className="heading-main">
        {" "}
        <h1>{categoryName}</h1>
      </div>

      {products.length > 0 ? (
        <section className="row" aria-label={`Products in ${categoryName}`}>
          {products.map((product) => (
            <article
              key={product.id}
              className="col-12 col-md-3 mb-4"
              aria-labelledby={`product-${product.id}-title`}
            >
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
                aria-label={`View details of ${product.product_name}`}
              >
                <article
                  className="product-collection-image"
                  aria-labelledby={`product-${product.id}-name`}
                >
                  <img
                    src={`${productURL}${product.image}`}
                    alt={product.product_name}
                    className="img-fluid"
                    loading="lazy"
                  />
                  <h2 id={`product-${product.id}-name`}>
                    {product.product_name}
                  </h2>
                  <p>
                    <strong>Price:</strong> ₹
                    {product.baseprices[0]?.original_price}
                  </p>
                  <button className="btn">Shop Now</button>
                </article>
                {/* <div className="card h-100 shadow-sm">
                  <img
                    src={`${productURL}${product.image}`}
                    alt={product.product_name}
                    className="card-img-top"
                    loading="lazy"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h2
                      id={`product-${product.id}-title`}
                      className="card-title h5"
                    >
                      {product.product_name}
                    </h2>
                  
                  </div>
                </div> */}
              </Link>
            </article>
          ))}
        </section>
      ) : (
        <p className="text-muted" role="note">
          No products found in this category.
        </p>
      )}
    </main>
  );
};

export default ProductByCategory;
