import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategoriesWithProducts } from "../../store/categoryProductSlice";

const imgURL = "https://ms.my.com/uploads/";

const CategoryProductList = () => {
  const dispatch = useDispatch();

  const { data: categoriesWithProducts, loading, error } = useSelector(
    (state) => state.categoryProducts
  );

  useEffect(() => {
    dispatch(fetchCategoriesWithProducts());
  }, [dispatch]);

  return (
    <>
      <div className="padding-top"></div>
      <div className="container my-5">
        <h2 className="text-center mb-4">All Categories & Products</h2>

        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">Error: {error}</p>}

        {categoriesWithProducts.map((cat) => (
          <div key={cat.id} className="mb-5">
            <h4>
              <Link to={`/category/${cat.id}`} className="text-decoration-none">
                {cat.name}
              </Link>
            </h4>

            <div className="row">
              {cat.products && cat.products.length > 0 ? (
                cat.products.map((product) => (
                  <div key={product.id} className="col-md-4 mb-3">
                    <div className="card h-100 shadow-sm">
                      <img
                        src={imgURL + product.image}
                        alt={product.product_name}
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{product.product_name}</h5>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted">No products in this category.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryProductList;
