import React from "react";
import "./Filter.css";
import { Form } from "react-bootstrap";

const Filter = ({ setInputSearch }) => {
  return (
    <div className="Filter">
      <Form>
        <Form.Control
          type="text"
          placeholder="Search"
          className="inputFilter"
          onChange={(e) => setInputSearch(e.target.value)}
        />
      </Form>
    </div>
  );
};

export default Filter;
