import React from "react";
import { aboutURL } from "../utils/api";

function Banner({ data }) {
  return (
    <div>
      <section>
        <section className="padding-horizontal" aria-label="aboutimage">
          {data.map((item) => (
            <img
              src={`${aboutURL}${item.image}`}
              alt={item.product_name}
              className="img-fluid"
              loading="lazy"
            />
          ))}
        </section>
      </section>
    </div>
  );
}

export default Banner;
