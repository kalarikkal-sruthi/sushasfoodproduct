import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../utils/api";
// import { api } from "../../utils/api";

const imgURL = "https://ms.my.com/uploads/";

const WhatInFarmDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  api.get(`/whatInFarms?id=${id}`)
    .then((res) => {
      console.log("✅ API Response:", res.data);

      if (res.data?.data) {
        setItem(res.data.data);
      } else {
        console.warn("⚠️ No data found for this ID");
      }
    })
    .catch((err) => {
      console.error("❌ Failed to fetch detail:", err);
    })
    .finally(() => setLoading(false));
}, [id]);


  if (loading) return <p className="text-center my-5">Loading...</p>;

  if (!item) return <p className="text-center my-5 text-danger">No details found for this item.</p>;

  return (
    <>
      <div className="padding-top"></div>
      <div className="container my-5">
        <h2 className="mb-4">{item.name}</h2>

        {/* 🔹 Image */}
        {item.image && (
          <img
            src={imgURL + item.image}
            alt={item.name}
            className="img-fluid mb-4"
            style={{ borderRadius: "10px", maxHeight: "400px", objectFit: "cover" }}
          />
        )}

        {/* 🔸 Description — You can adjust if it's a link or rich text */}
        {item.description?.includes("http") ? (
          <div>
            <p className="text-muted">Linked content:</p>
            <a
              href={item.description}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              Open External Link
            </a>
          </div>
        ) : (
          <p>{item.description}</p>
        )}
      </div>
      <pre>{JSON.stringify(item.description, null, 2)}</pre>

    </>
  );
};

export default WhatInFarmDetail;
