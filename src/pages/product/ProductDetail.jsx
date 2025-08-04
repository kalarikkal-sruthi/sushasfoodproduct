import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { Helmet } from "react-helmet-async"; 
import ProductDetailGallery from "./ProductDetailGallery";
import ProductDetailSummary from "./ProductDetailSummary";
import { fetchProductById } from "../../store/ProductSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.product);

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

  if (!data || !data.product)
    return (
      <Alert variant="warning" aria-label="No Product Found">
        No product data available.
      </Alert>
    );

  const product = data.product;

  return (
    <main>
      <Helmet>
        <title>{product.product_name} | MyFezto</title>
        <meta name="description" content={product.description?.slice(0, 150) || "Product detail page"} />
        <link rel="canonical" href={`https://myfezto.com/product/${product.id}`} />
      </Helmet>

      <div className="padding-top" />

      <Container className="my-5" as="section" aria-label="Product Details Section">
        <Row className="align-items-start">
          <Col md={6} as="section" aria-label="Product Gallery">
            <ProductDetailGallery product={product} />
          </Col>

          <Col md={6} as="section" aria-label="Product Summary">
            <ProductDetailSummary product={product} />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ProductDetail;
