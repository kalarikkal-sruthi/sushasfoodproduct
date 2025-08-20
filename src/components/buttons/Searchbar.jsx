import React, { useState } from "react";
import { Form, FormControl, Button, InputGroup, Container, Row, Col } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import search from "../../assets/header/search.png";

function Searchbar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <FormControl className="box-shadow-none"
                type="text"
                placeholder="Search products, categories..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button type="submit" variant="primary"  style={{background:'#5caf47',border:'1px solid #5caf47'}}>
                  <img src={search} alt="susha's food product" />
              </Button>
            </InputGroup>
          </Form>
      
  );
}

export default Searchbar;
