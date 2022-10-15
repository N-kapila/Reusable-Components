import React from "react";
import Button from "react-bootstrap/Button";

const ButtonThree = ({ value, onClick }) => (
  <Button variant="info" size="sm" onClick={(event) => onClick(event)}>
    {value}
  </Button>
);

export default ButtonThree;
