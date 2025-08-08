import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { whatinfarmsURL } from "../utils/api";

function Categories({ data }) {
  const navigate = useNavigate();

  return (
    <section
      id="farm-categories"
      className="categories padding-horizontal"
      aria-labelledby="categories-heading"
    >
      <header className="header-bar">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="heading-main-div heading-main">
            <h1>
              <Link
                to="/whatinfarm"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                What We Do On the Farm
              </Link>
            </h1>
          </Col>
          <Col xs={12} md={6} className="text-md-end mt-3 mt-md-0">
            <div className="view-all-button">
              <button
                onClick={() => navigate("/whatinfarm")}
                aria-label="View all farm categories"
              >
                View All
              </button>
            </div>
          </Col>
        </Row>
      </header>
      <Row as="section" aria-label="Farm categories">
        {data.map((item, index) => (
          <Col xs={6} md={3} key={index}>
            <Link to={`/whatinfarm/${item.id}`}>
              {" "}
              <article
                className="card-main"
                aria-label={`Category: ${item.name}`}
              >
                <img
                  src={
                    item?.image
                      ? `${whatinfarmsURL}${item.image}`
                      : "/images/fallback.jpg"
                  }
                  alt={`Image of ${item.name}`}
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
                        alt="View category details"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </Link>

            <div className="card-name  mt-2">
              <h3>{item.name}</h3>
              <p>{item.description?.slice(0, 100)}...</p>
              {/* <Link>Read More</Link> */}
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Categories;
