import React ,{ useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import InsuranceInfo from "./InsuranceInfo";
import { usePatientInfo } from "../context/UserContext";
const ProfileInfo = () => {
  const patientInfo = usePatientInfo();
  const [expandState, setExpandedState] = useState(false);

  const toggleState = () => {
    setExpandedState(!expandState);
  };

  const getDisplayStateName = (expanded) => {
    return expandState === true ? "expanded" : "collapsed";
  };

  return (
    <Container className="profile py-2">
      <Row
        className={getDisplayStateName()}
        id="userInfoPanelHeader"
        role="button"
        tabIndex="0"
        onClick={() => toggleState()}
      >
        <Col xs={12} lg={4}>
          <strong>Patient Name:</strong><span className="data">{patientInfo.userInfo.name}</span>
        </Col>
        <Col xs={12} lg={2}>
        <strong>Age :</strong><span className="data">{patientInfo.userInfo.age}</span>
        </Col>
        <Col xs={12} lg={2}>
        <strong>DOB :</strong><span className="data">{patientInfo.userInfo.dateOfBirth}</span>
        </Col>
        <Col xs={12} lg={3}>
        <strong>Insurance :</strong><span className="data">{patientInfo.insuranceInfo.providerName}</span>
        </Col>
        <Col xs={12} lg={1}>
          {expandState ? (
            <FontAwesomeIcon icon={faChevronUp} className="chevronIcon" id="chevron" />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} className="chevronIcon" id="chevron" />
          )}
        </Col>
      </Row>
      {expandState && (
        <Row>
          <Col xs={12} lg={4}>
            <div className="card bg-light my-1 borderRight">
              <div className="card-body text-sm-left text-lg-left">
                <img
                  src={patientInfo.userInfo.headshot}
                  className="rounded-circle mb-1"
                  height={"100"}
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div className="card bg-light borderRight">
              <div className="card-body text-lg-left px-0">
                <Row>
                  <Col>
                    <p>
                      Gender :<span className="data">{patientInfo.userInfo.gender}</span>
                    </p>
                    <p>
                      PHP :<span className="data">{patientInfo.userInfo.physician}</span>
                    </p>
                    <p>
                      Cell :<span className="data">{patientInfo.userInfo.cellPhone}</span>
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div >
              <InsuranceInfo />
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProfileInfo;
