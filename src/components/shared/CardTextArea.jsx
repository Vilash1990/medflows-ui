import React, { useRef, useState, useEffect } from "react";
import { Card, Form} from "react-bootstrap";
import {
  usePatientInfo,
  usePatientInfoUpdate,
} from "../../context/UserContext";
const CardTextArea = ({
  itemsHeader,
  itemsToUpdate,
  enteredText,
  placeHolderText,
  iconToDisplay,
}) => {
  const patientInfo = usePatientInfo();
  const patientInfoUpdate = usePatientInfoUpdate();
  const [inputText, setInputText] = useState("");
  const listItemsEndRef = useRef(null);

  const scrollToBottom = () => {
    listItemsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setInputText(enteredText);
    scrollToBottom();
  }, [inputText, enteredText]);

  const updateInputText = (e) => {
    e.preventDefault();
    setInputText(e.target.value)
    if (itemsToUpdate === "physicalExam") {
      patientInfo.physicalExam = inputText;
    }else if (itemsToUpdate === "assessmentPlan") {
      patientInfo.assessmentPlan = inputText;
    }
    patientInfoUpdate(patientInfo);
  };

  return (
    <>
      <Card className="shadow rounded progressNotesCard zoom">
        <Card.Header className="progressNotesCardHeader">
          {iconToDisplay}
          <strong>{itemsHeader}</strong>
        </Card.Header>
        <Card.Body>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder={placeHolderText}
            onChange={(e) => updateInputText(e)}
            className="inputTextArea"
          />

          <div className="scrollable" id="scrollableCard"></div>
          <div ref={listItemsEndRef} />
        </Card.Body>
      </Card>
    </>
  );
};

export default CardTextArea;
