import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchWhatWillData } from "../store/whatwillDataSlice";
import { Row, Col } from "react-bootstrap";
import productimg from "../assets/whatwedo/1.png";

const WhatInFarmList = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.whatwillData);

  useEffect(() => {
    dispatch(fetchWhatWillData());
  }, [dispatch]);

  if (loading) return <p>Loading content...</p>;
  if (error) return <p>Error loading farm activities: {error}</p>;

  return (
    <section
      id="farm-categories"
      className="categories padding-horizontal"
      aria-labelledby="categories-heading"
    >
      <div className="padding-top"></div>
      <header className="header-bar">
        <Row className="align-items-center">
          <Col xs={12} md={12} className="heading-main-div heading-main">
            <Link
              to="/whatwedo"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h1 className="scroll-section text-start">
                What We Do on the Farm
              </h1>
            </Link>
          </Col>
        </Row>
      </header>

      <Row as="section" aria-label="Farm categories">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => (
            <Col xs={6} md={3} key={item.id || index}>
              <article
                className="card-main"
                aria-label={`Category: ${item.name}`}
              >
                <img
                  src={productimg}
                  alt={item.name || "Farm activity"}
                  className="w-100"
                  loading="lazy"
                />

                <div className="card-overlay" aria-hidden="true">
                  <div className="card-overlay-main">
                    <div className="card-overlay-head">
                      <h2>{item.name}</h2>
                    </div>
                    <div className="card-overlay-icon">
                      <img
                        src="/icons/Arrow up-right-white.png"
                        alt="Arrow indicating link"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </article>

              <div className="card-name mt-2">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <Link
                  to={`/whatinfarm/${item.id}`}
                  aria-label={`Read more about ${item.name}`}
                >
                  Read More
                </Link>
              </div>
            </Col>
          ))
        ) : (
          <p>No farm activities found.</p>
        )}
      </Row>
    </section>
  );
};

export default WhatInFarmList;
