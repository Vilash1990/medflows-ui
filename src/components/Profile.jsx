import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Insurance from "./Insurance";
const Profile = ({ userInfo, insuranceInfo }) => {
  const [expandState, setExpandedState] = useState(false);

  const toggleState = () => {
    setExpandedState(!expandState);
  };

  const getDisplayStateName = (expanded) => {
    return expandState === true ? "expanded" : "collapsed";
  };

  return (
    <Container className="profile py-0">
      <Row
        className={getDisplayStateName()}
        id="userInfoPanelHeader"
        role="button"
        tabIndex="0"
        onClick={() => toggleState()}
      >
        <Col md={4}>
          <h6>Patient Name:</h6><span className="data">{userInfo.name}</span>
        </Col>
        <Col md={2}>
          Age :<span className="data">{userInfo.age}</span>
        </Col>
        <Col md={2}>
          DOB :<span className="data">{userInfo.dateOfBirth}</span>
        </Col>
        <Col md={3}>
          Insurance :<span className="data">{insuranceInfo.providerName}</span>
        </Col>
        <Col md={1}>
          {expandState ? (
            <FontAwesomeIcon icon={faChevronUp} className="chevronIcon" id="chevron" />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} className="chevronIcon" id="chevron" />
          )}
        </Col>
      </Row>
      {expandState && (
        <Row>
          <Col md={3}>
            <div className="card bg-light my-1 borderRight">
              <div className="card-body text-sm-left text-lg-center">
                <img
                  src={userInfo.headshot}
                  className="rounded-circle mb-1"
                  height={"75"}
                  alt=""
                />
                <h5 className="card-title data">{userInfo.name}</h5>
              </div>
            </div>
          </Col>
          <Col md={2}>
            <div className="card bg-light borderRight">
              <div className="card-body text-lg-left">
                <Row>
                  <Col>
                    <p>
                      Gender :<span className="data">{userInfo.gender}</span>
                    </p>
                    <p>
                      PHP :<span className="data">{userInfo.physician}</span>
                    </p>
                    <p>
                      Cell :<span className="data">{userInfo.cellPhone}</span>
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <div className="">
              <Insurance {...insuranceInfo} />
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Profile;
