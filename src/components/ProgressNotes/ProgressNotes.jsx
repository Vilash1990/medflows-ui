import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import CardListGroup from "../shared/CardListGroup";
import { usePatientInfo } from "../../context/UserContext";
import HistoryIllness from "./HistoryIllness";
const ProgressNotes = () => {
  const patientInfo = usePatientInfo();
  return (
    <div>
      <Row className="progressNotesRow">
        <Col xs={12} md={3}>
          <CardListGroup
            itemsHeader={"Complaints"}
            itemList={patientInfo.complaints}
            itemsToUpdate={"complaints"}
            placeHolderText={"Enter Complaint"}
            isEditable={true}
          />
        </Col>
        <Col xs={12} md={9}>
          <HistoryIllness
            illnessDescription={patientInfo.illnessDescription}
            abnormalPhysicalTests={patientInfo.abnormalPhysicalTests}
            gender={patientInfo.userInfo.gender}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={2}></Col>
        <Col xs={12} md={6} lg={2}></Col>
        <Col xs={12} md={6} lg={4}></Col>
        <Col xs={12} md={6} lg={4}></Col>
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
    </div>
  );
};

export default ProgressNotes;
