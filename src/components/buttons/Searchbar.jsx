import { useDispatch, useSelector } from "react-redux";
import {
  setSearchQuery,
  selectFilteredProducts,
} from "../../store/categoryProductSlice";
import { Form, FormControl, Button, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import search from "../../assets/header/search.png";

function Searchbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchQuery = useSelector(
    (state) => state.categoryProducts.searchQuery
  );
  const searchResults = useSelector(selectFilteredProducts(searchQuery));

  const handleChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSelectProduct = (productId, bgColor, categoryName) => {
    navigate(`/product/${productId}`, {
      state: { bgColor, categoryName },
    });
    dispatch(setSearchQuery(""));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="position-relative search-main ">
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <FormControl
            className="box-shadow-none search-input"
            type="text"
            placeholder="Search products, categories..."
            value={searchQuery}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="primary"
            style={{ background: "#5caf47", border: "1px solid #5caf47" }}
          >
            <img src={search} alt="susha's food product" />
          </Button>
        </InputGroup>
      </Form>

      {searchQuery && searchResults.length > 0 && (
        <ul
          className="list-group position-absolute w-100 mt-1"
          style={{ zIndex: 1000 }}
        >
          {searchResults.map((item) => {
            return (
              <li
                key={item.id}
                className="list-group-item list-group-item-action"
                onClick={() => handleSelectProduct(item.id, item.categoryName)}
                style={{
                  cursor: "pointer",
                }}
              >
                {item.product_name}{" "}
                <small className="text-light">({item.categoryName})</small>
              </li>
            );
          })}{" "}
        </ul>
      )}
    </div>
  );
}

export default Searchbar;
