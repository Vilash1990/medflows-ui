import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
const MedflowFooter = () => {
  return (
    <Container fluid className="shadow rounded medflowFooter text-center bg-light m">
      <Row>
        <Col sm={"12"}>
          <FontAwesomeIcon icon={faCopyright} size="sm" />
          2018-2022 Medflow Solutions Inc., All rights reserved
        </Col>
      </Row>
    </Container>
  );
};

export default MedflowFooter;
