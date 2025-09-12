import React, { useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Spinner, Alert, Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { fetchProductById } from "../../store/ProductSlice";

// Lazy load gallery for faster initial render
const ProductDetailGallery = React.lazy(() => import("./ProductDetailGallery"));
const ProductDetailSummary = React.lazy(() => import("./ProductDetailSummary"));

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.product);
  console.log(data);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (loading)
    return (
      <section aria-label="Loading Product Details">
        <Spinner animation="border" variant="primary" className="m-4" />
      </section>
    );

  if (error)
    return (
      <Alert variant="danger" aria-label="Error Loading Product">
        Error: {error}
      </Alert>
    );

  if (!data?.product)
    return (
      <Alert variant="warning" aria-label="No Product Found">
        No product data available.
      </Alert>
    );

  const product = data.product;

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.product_name,
    image: [product.image_url],
    description: product.description,
    sku: product.sku || product.id,
    offers: {
      "@type": "Offer",
      url: `https://myfezto.com/product/${product.id}`,
      priceCurrency: "INR",
      price: product.selling_price || product.price,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <main
      aria-labelledby="category-products-heading"
      className="res-header-top"
    >
      {/* SEO Meta Tags */}
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>
          {product.product_name} | SUSHA'S FOODS | Prakash Farm | Organic Food
        </title>
        <meta
          name="description"
          content={product.description?.slice(0, 150) || "Product detail page"}
        />
        <link
          rel="canonical"
          href={`https://myfezto.com/product/${product.id}`}
        />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content={product.product_name} />
        <meta
          property="og:description"
          content={product.description?.slice(0, 150)}
        />
        <meta property="og:image" content={product.image_url} />
        <meta
          property="og:url"
          content={`https://myfezto.com/product/${product.id}`}
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.product_name} />
        <meta
          name="twitter:description"
          content={product.description?.slice(0, 150)}
        />
        <meta name="twitter:image" content={product.image_url} />

        {/* Preload main product image */}
        <link rel="preload" as="image" href={product.image_url} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="padding-y mt-3 mt-lg-5">
        <div className="padding-top d-lg-block d-none"></div>
        <div className="padding-top"></div>
        <article aria-label="Product Details Section">
          <Row className="align-items-start">
            <Col md={5} as="section" aria-label="Product Gallery">
              <Suspense
                fallback={<Spinner animation="border" variant="primary" />}
              >
                <ProductDetailGallery product={product} />
              </Suspense>
            </Col>

            <Col md={7} as="section" aria-label="Product Summary">
              <Suspense
                fallback={<Spinner animation="border" variant="primary" />}
              >
                <ProductDetailSummary product={product} />
              </Suspense>
            </Col>
          </Row>
        </article>
      </div>
    </main>
  );
};

export default ProductDetail;
