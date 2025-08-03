import React from "react";
import { Link } from "react-router-dom";

const dummyItems = [
  { id: 2, title: "Farm Activity 2", image: "dummy1.jpg" },
  { id: 3, title: "Farm Activity 3", image: "dummy2.jpg" },
  { id: 4, title: "Farm Activity 4", image: "dummy3.jpg" },
  { id: 5, title: "Farm Activity 5", image: "dummy4.jpg" },
  { id: 6, title: "Farm Activity 6", image: "dummy5.jpg" },
];

const imgURL = "https://ms.my.com/uploads/"; // change if needed

const WhatInFarmList = () => {
  return (
    <>
      <div className="padding-top"></div>
      <div className="container">
        <h2 className="mb-4">🧑‍🌾 What We Do In Farms</h2>
        <div className="row">
          {dummyItems.map((item) => (
            <div key={item.id} className="col-md-6 mb-4">
              <Link to={`/whatinfarm/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="card shadow-lg h-100">
                  <img
                    src={imgURL + item.image}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-muted">Click to read more →</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhatInFarmList;
