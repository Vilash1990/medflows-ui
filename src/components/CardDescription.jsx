import React, { useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
const CardDescription = ({ itemsHeader, description }) => {
  const listItemsEndRef = useRef(null);

  const scrollToBottom = () => {
    listItemsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [description]);

  return (
    <div>
      <Card className="progressNotesCard">
        <Card.Header className="progressNotesCardHeader">
          <strong>{itemsHeader}:</strong>
        </Card.Header>
        <Card.Body className="cardDescriptionBody scrollable">
          <Card.Text className="cardDescriptionText"><small>{description}</small></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardDescription;
