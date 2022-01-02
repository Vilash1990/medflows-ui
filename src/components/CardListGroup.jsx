import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  ListGroup,
  FormControl,
  InputGroup,
  Button,
  Form,
} from "react-bootstrap";
import { usePatientInfo, usePatientInfoUpdate } from "../context/UserContext";
const CardListGroup = ({
  itemsHeader,
  itemList,
  itemsToUpdate,
  placeHolderText,
}) => {
  const patientInfo = usePatientInfo();
  const patientInfoUpdate = usePatientInfoUpdate();
  const [inputItem, setInputItem] = useState("");
  const [listItems, setListItems] = useState(itemList);

  const listItemsEndRef = useRef(null);

  const scrollToBottom = () => {
    listItemsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    setInputItem("");
  }, [listItems]);

  const updateListItems = (e) => {
    e.preventDefault();
    setListItems((listItems) => [...listItems, inputItem]);
    if (itemsToUpdate === "complaints") {
      patientInfo.complaints = listItems;
    }
    patientInfoUpdate(patientInfo);
  };

  return (
    <div>
      <Card className="progressNotesCard">
        <Card.Header className="progressNotesCardHeader">
          <strong>{itemsHeader}:</strong>
        </Card.Header>
        <div className="scrollable" id="scrollableCard">
          <ListGroup variant="flush" as="ol" numbered>
            {listItems.map((item) => (
              <ListGroup.Item key={item} as="li">
                {item}
              </ListGroup.Item>
            ))}
            <div ref={listItemsEndRef} />
          </ListGroup>
        </div>

        <Form onSubmit={(e) => updateListItems(e)}>
          <InputGroup className="mb-1" size="sm">
            <FormControl
              placeholder={placeHolderText}
              aria-label={placeHolderText}
              aria-describedby="basic-addon2"
              value={inputItem}
              onChange={(e) => setInputItem(e.target.value)}
            />
            <Button
              variant="btn customButton"
              id="button-addon2"
              disabled={!inputItem}
              type="submit"
            >
              Add
            </Button>
          </InputGroup>
        </Form>
      </Card>
    </div>
  );
};

export default CardListGroup;
