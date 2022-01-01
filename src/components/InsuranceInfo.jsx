import { Row, Col } from "react-bootstrap";
import { usePatientInfo } from "../context/UserContext";
const InsuranceInfo = () => {
  const patientInfo = usePatientInfo();
  return (
    <div className="container-fluiprofile">
      <div className="card bg-light">
        <div className="card-body text-lg-left px-0">
          <Row>
            <Col>
              <p>
                Policy Number :
                <span className="data">
                  {patientInfo.insuranceInfo.policyNumber}
                </span>
              </p>
              <p>
                Group Id :
                <span className="data">
                  {patientInfo.insuranceInfo.groupId}
                </span>
              </p>
              <p>
                MRN :
                <span className="data">
                  {patientInfo.insuranceInfo.mrnNumber}
                </span>
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default InsuranceInfo;
