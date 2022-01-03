import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CardListGroup from "../shared/CardListGroup";
import { usePatientInfo } from "../../context/UserContext";
import HistoryIllness from "./HistoryIllness";
import {
  faPills,
  faBookMedical,
  faQuestionCircle,
  faHistory,
  faStethoscope,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import CardTextArea from "../shared/CardTextArea";
const ProgressNotes = () => {
  const patientInfo = usePatientInfo();
  return (
    <>
      <Row className="progressNotesRow">
        <Col xs={12} md={3}>
          <CardListGroup
            itemsHeader={"Complaints"}
            itemList={patientInfo.complaints}
            itemsToUpdate={"complaints"}
            placeHolderText={"Enter Complaint"}
            isEditable={true}
            iconToDisplay={
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="headerIcon"
                size="lg"
              />
            }
          />
        </Col>
        <Col xs={12} md={9}>
          <HistoryIllness
            illnessDescription={patientInfo.illnessDescription}
            abnormalPhysicalTests={patientInfo.abnormalPhysicalTests}
            gender={patientInfo.userInfo.gender}
            iconToDisplay={
              <FontAwesomeIcon icon={faHistory} className="headerIcon" size="lg" />
            }
          />
        </Col>
      </Row>
      <Row className="progressNotesRow">
        <Col xs={12} md={6} lg={3}>
          <CardListGroup
            itemsHeader={"Medication"}
            itemList={patientInfo.medication}
            itemsToUpdate={"medication"}
            placeHolderText={"Enter New Medication"}
            isEditable={true}
            iconToDisplay={
              <FontAwesomeIcon icon={faPills} className="headerIcon" size="lg" />
            }
          />
        </Col>
        <Col xs={12} md={6} lg={3}>
          <CardListGroup
            itemsHeader={"Past Health Issues"}
            itemList={patientInfo.pastHealthIssues}
            itemsToUpdate={"pastHealthIssues"}
            placeHolderText={""}
            isEditable={false}
            iconToDisplay={
              <FontAwesomeIcon
                icon={faBookMedical}
                className="headerIcon"
                size="lg"
              />
            }
          />
        </Col>

        <Col xs={12} md={6} lg={3}>
          <CardTextArea
            itemsHeader={"Physical Exam"}
            itemsToUpdate={"physicalExam"}
            enteredText={patientInfo.physicalExam}
            placeHolderText={"Enter details here"}
            iconToDisplay={
              <FontAwesomeIcon
                icon={faStethoscope}
                className="headerIcon"
                size="lg"
              />
            }
          />
        </Col>
        <Col xs={12} md={6} lg={3}>
          <CardTextArea
            itemsHeader={"Assesment/Plan"}
            itemsToUpdate={"assessmentPlan"}
            enteredText={patientInfo.assessmentPlan}
            placeHolderText={"Enter details here"}
            iconToDisplay={
              <FontAwesomeIcon
                icon={faCalendarCheck}
                className="headerIcon"
                size="lg"
              />
            }
          />
        </Col>
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
    </>
  );
};

export default ProgressNotes;
