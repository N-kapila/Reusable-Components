import React from "react";
import { Card } from "react-bootstrap";

const CardOne = ({ card }) => {
  return (
    <Card style={{ width: "18rem" }} className="box">
      <Card.Img variant="top" src={card.image} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.text}</Card.Text>
        <Card.Link>{card.link}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CardOne;
