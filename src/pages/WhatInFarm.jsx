import React, { useEffect, useState } from "react";
import { api } from "../utils/api"; // ✅ Correct import

const imgURL = "https://ms.my.com/uploads/"; // ✅ Image base URL

const WhatInFarm = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ids = [1, 2, 3, 4]; // ✅ Replace with your actual IDs

    Promise.all(ids.map((id) => api.get(`/whatInFarms?id=${id}`)))
      .then((responses) => {
        const data = responses.map((res) => res.data.data);
        console.log("✅ WhatInFarms fetched:", data);
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Failed to fetch WhatInFarms list:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="padding-top"></div>
      <div className="container my-5">
        <h2 className="mb-4 text-center">What’s Happening in Our Farms</h2>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="row">
         {items
  .filter((item) => item !== null && typeof item === "object") // ✅ skip nulls
  .map((item) => (
    <div key={item.id} className="col-md-6 mb-4">
      <div className="card shadow-sm h-100">
        <img
          src={imgURL + item.image}
          alt={item.name}
          className="card-img-top"
          style={{ objectFit: "cover", height: "300px" }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{item.name}</h5>
          <a
            href={item.description}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-success mt-3"
          >
            Watch on Instagram
          </a>
        </div>
      </div>
    </div>
))}

          </div>
        )}
      </div>
    </>
  );
};

export default WhatInFarm;
