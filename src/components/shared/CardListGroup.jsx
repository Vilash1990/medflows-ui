import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  ListGroup,
  FormControl,
  InputGroup,
  Button,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { usePatientInfo, usePatientInfoUpdate } from "../../context/UserContext";
const CardListGroup = ({
  itemsHeader,
  itemList,
  itemsToUpdate,
  placeHolderText,
  isEditable,
  iconToDisplay
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
    <>
      <Card className="shadow rounded progressNotesCard zoom">
        <Card.Header className="progressNotesCardHeader">
          {iconToDisplay}<strong>{itemsHeader}</strong>
        </Card.Header>
        <div className="scrollable" id="scrollableCard">
          <ListGroup variant="flush" as="ol" numbered>
            {listItems.map((item) => (
              <ListGroup.Item key={item} className="data" as="li">
                {item}
              </ListGroup.Item>
            ))}
            <div ref={listItemsEndRef} />
          </ListGroup>
        </div>

        {isEditable && (
          <Form onSubmit={(e) => updateListItems(e)}>
            <InputGroup className="inputFormGroup">
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
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </InputGroup>
          </Form>
        )}
      </Card>
    </>
  );
};

export default CardListGroup;
