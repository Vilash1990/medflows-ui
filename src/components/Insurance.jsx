import { Row, Col } from "react-bootstrap";
const Insurance = ({ ...insuranceInfo }) => {
  return (
    <div className="container-fluid  justify-content-md-between align-items-center profile">
      <div className="card bg-light">
        <div className="card-body text-left">
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
