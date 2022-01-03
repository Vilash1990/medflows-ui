import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNotesMedical,
  faChartBar,
  faCalculator,
  faShoppingCart,
  faMinus,
  faPortrait,
  faCog,
  faSignOutAlt,
  faClinicMedical,
} from "@fortawesome/free-solid-svg-icons";

import { usePatientInfo } from "../context/UserContext";

const MedflowNavbar = () => {
  const patientInfo = usePatientInfo();
  return (
    <Navbar bg="light" variant="light" sticky="top" expand="lg" className="shadow rounded navBar">
      <Container>
        <Navbar.Brand href="#home">
          <div className="logo">
            <FontAwesomeIcon icon={faClinicMedical} size="lg" className="d-inline-block align-top" />
            <h3> eMedRecords</h3>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto" >
            <Nav.Link href="#chart" className="navLink">
              <FontAwesomeIcon icon={faChartBar} className="icon"/>
              <span className="strong">Chart</span>
            </Nav.Link>
            <Nav.Link href="#features" className="navLink">
              <FontAwesomeIcon icon={faCalculator} className="icon"/>
              <span className="strong">Encounter</span>
            </Nav.Link>
            <Nav.Link href="#cart" className="navLink">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="icon"
              />
              <span className="strong">In Basket</span>
            </Nav.Link>
            <Nav.Link href="/Medflows" className="navLink activeLink">
              <FontAwesomeIcon
                icon={faNotesMedical}
                className="icon"
              />
              <span className="strong">Medflows</span>
            </Nav.Link>
            <Nav.Link href="#differentials" className="navLink">
              <FontAwesomeIcon icon={faMinus}className="icon" />
              <span className="strong">Differentials</span>
            </Nav.Link>
            <Nav.Link href="#calculators" className="navLink">
              <FontAwesomeIcon icon={faCalculator}className="icon" />
              <span className="strong">Calculators</span>
            </Nav.Link>
            <NavDropdown
              eventkey={1}
              title={
                <div className="pull-left">
                  <img
                    src={patientInfo.userInfo.headshot}
                    className="rounded-circle"
                    height="25"
                    alt="Portrait of a Woman"
                    loading="lazy"
                  />
                </div>
              }
            >
              <NavDropdown.Item href="myAccount">
                <FontAwesomeIcon icon={faPortrait} className="icon" size="sm" />
                <span className="">My Profile</span>
              </NavDropdown.Item>

              <NavDropdown.Item href="myAccount">
                <FontAwesomeIcon icon={faCog} className="icon" size="sm" />
                <span className="">Settings</span>
              </NavDropdown.Item>

              <NavDropdown.Item href="myAccount">
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className="icon"
                  size="sm"
                />
                <span className="">Logout</span>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MedflowNavbar;
