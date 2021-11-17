// src/App.js
import React from "react";

import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="load">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};
export default Loading;
