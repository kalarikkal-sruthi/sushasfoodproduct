import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWhatWillDataById } from "../store/whatwillDataSlice";
import { useParams } from "react-router-dom";
import { whatinfarmsURL } from "../utils/api";

const WhatInFarmDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedItem, loading, error } = useSelector(
    (state) => state.whatwillData
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchWhatWillDataById(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading content...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!selectedItem) return <p>No farm activity found.</p>;

  return (
    <main
      className="farm-detail padding-horizontal"
      aria-labelledby="farm-detail-heading"
    >
      <div className="padding-top"></div>
      <div className="padding-top"></div>
      <article>
        <header>
          <div className="what-in-full-detail-head">
            {" "}
            <h1 id="farm-detail-heading">{selectedItem.name}</h1>
          </div>
        </header>

        <section className="farm-image" aria-label="Farm activity image">
          <img
            src={`${whatinfarmsURL}${selectedItem.image}`}
            alt={selectedItem.name}
            className="img-fluid"
            loading="lazy"
          />
        </section>

        <section className="farm-description" aria-label="Activity description">
          <h2>Description</h2>
          <p>{selectedItem.description}</p>
        </section>

        <footer>
          <p>
            Created on:{" "}
            <time dateTime={selectedItem.created_at}>
              {new Date(selectedItem.created_at).toLocaleDateString()}
            </time>
          </p>
        </footer>
      </article>
    </main>
  );
};

export default WhatInFarmDetail;
