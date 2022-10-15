import React from "react";
import Button from "react-bootstrap/Button";

const ButtonOne = ({ value, onClick }) => (
  <Button variant="primary" size="sm" onClick={(event) => onClick(event)}>
    {value}
  </Button>
);

export default ButtonOne;
