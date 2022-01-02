import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CardListGroup from "../shared/CardListGroup";
import { usePatientInfo } from "../../context/UserContext";
import HistoryIllness from "./HistoryIllness";
import { faPills, faBookMedical, faQuestionCircle, faPrescriptionBottleAlt } from "@fortawesome/free-solid-svg-icons";
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
            iconToDisplay = {
              <FontAwesomeIcon icon={faQuestionCircle} className="icon" size="lg" />
            }
          />
        </Col>
        <Col xs={12} md={9}>
          <HistoryIllness
            illnessDescription={patientInfo.illnessDescription}
            abnormalPhysicalTests={patientInfo.abnormalPhysicalTests}
            gender={patientInfo.userInfo.gender}
            iconToDisplay = {
              <FontAwesomeIcon icon={faPrescriptionBottleAlt} className="icon" size="lg" />
            }
          />
        </Col>
      </Row>
      <Row className="progressNotesRow">
        <Col xs={12} md={6} lg={3}>
        <CardListGroup
            itemsHeader={"Past Health Issues"}
            itemList={patientInfo.pastHealthIssues}
            itemsToUpdate={"pastHealthIssues"}
            placeHolderText={""}
            isEditable={false}
            iconToDisplay = {
              <FontAwesomeIcon icon={faBookMedical} className="icon" size="lg" />
            }
            
          />
        </Col>
        <Col xs={12} md={6} lg={3}>
        <CardListGroup
            itemsHeader={"Medication"}
            itemList={patientInfo.medication}
            itemsToUpdate={"medication"}
            placeHolderText={"Enter New Medication"}
            isEditable={true}
            iconToDisplay = {
              <FontAwesomeIcon icon={faPills} className="icon" size="lg" />
            }
          />
        </Col>
        <Col xs={12} md={6} lg={3}></Col>
        <Col xs={12} md={6} lg={3}></Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button className="customButtonSave zoom mt-4" size="sm">
            Save Updates
          </Button>

          <Button className=" customButton zoom mt-4" size="sm">
            Run Differentials
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ProgressNotes;
