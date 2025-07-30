import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function WhatWeDoCard({ image, title, icon, slug }) {
  return (
    <>
     {/* <Link to={`/categories/${slug}`} className="card-link"> */}
      <div className="card-main">
        <img src={image} alt={title} />
        <div className="card-overlay">
          <div className="card-overlay-main">
            <div className="card-overlay-head">
              <h1>{title}</h1>
            </div>
            <div className="card-overlay-icon">
              <img src={icon} alt={`${title} icon`} />
            </div>
          </div>
        </div>
      </div>
      <div className="card-name">
        <h1>{title}</h1>
      </div>
     {/* </Link> */}
    </>
  );
}

WhatWeDoCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default WhatWeDoCard;
