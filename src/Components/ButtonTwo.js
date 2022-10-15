import React from "react";
import Button from "react-bootstrap/Button";

const ButtonTwo = ({ value, variant = "primary", onClick }) => (
  <Button size="lg" onClick={(event) => onClick(event)} variant={variant}>
    {value}
  </Button>
);
export default ButtonTwo;
