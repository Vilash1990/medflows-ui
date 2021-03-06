import React, { useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
const CardDescription = ({ itemsHeader, iconToDisplay, description }) => {
  const listItemsEndRef = useRef(null);

  const scrollToBottom = () => {
    listItemsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [description]);

  return (
    <>
      <Card className="shadow rounded progressNotesCard zoom">
        <Card.Header className="progressNotesCardHeader">
          {iconToDisplay}
          <strong>{itemsHeader}</strong>
        </Card.Header>
        <Card.Body className="cardDescriptionBody scrollable">
          <small>
            {description}
          </small>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardDescription;
