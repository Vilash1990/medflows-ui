import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import CardListGroup from "./CardListGroup";
import { usePatientInfo } from "../context/UserContext";
const ProgressNotes = () => {
  const patientInfo = usePatientInfo();
  return (
    <div className="mt-2">
      <Row>
        <Col xs={12} md={3}>
          <CardListGroup
            itemsHeader={"Complaints"}
            itemList={patientInfo.complaints}
            itemsToUpdate={"complaints"}
            placeHolderText={"Enter Complaint"}
          />
        </Col>
        <Col xs={12} md={9}>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button className="customButtonSave" size="sm">
            Save Updates
          </Button>

          <Button className=" customButton" size="sm">
            Run Differentials
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={2}>
        </Col>
        <Col xs={12} md={6} lg={2}>
        </Col>
        <Col xs={12} md={6} lg={4}>
        </Col>
        <Col xs={12} md={6} lg={4}>
        </Col>
      </Row>
    </div>
  );
};

export default ProgressNotes;
