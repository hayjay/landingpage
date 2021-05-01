import React from "react";
import { Card } from "react-bootstrap";

export default function Cards({ image, title }) {
  if(!image) {
    return
  }
  return (
      <Card className="mr-4 mb-4">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          {/* <Card.Text>
            This is a wider card with supporting text 
          </Card.Text> */}
        </Card.Body>
      </Card>
  );
}
