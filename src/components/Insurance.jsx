import { Row, Col } from "react-bootstrap";
const Insurance = ({ ...insuranceInfo }) => {
  return (
    <div className="container-fluiprofile">
      <div className="card bg-light">
        <div className="card-body text-lg-left px-0">
          <Row>
            <Col>
              <p>
                Policy Number :
                <span className="data">{insuranceInfo.policyNumber}</span>
              </p>
              <p>
                Group Id :
                <span className="data">{insuranceInfo.groupId}</span>
              </p>
              <p>
                MRN :
                <span className="data">{insuranceInfo.mrnNumber}</span>
              </p>
            </Col>
            </Row>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
