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
const MedflowNavbar = ({ headshot }) => {
  return (
    <Navbar bg="light" variant="light" sticky="top" expand="lg" className="shadow-sm rounded">
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
              <FontAwesomeIcon icon={faChartBar} className="icon" size="sm" />
              Chart
            </Nav.Link>
            <Nav.Link href="#features" className="navLink">
              <FontAwesomeIcon icon={faCalculator} className="icon" size="sm" />
              Encounter
            </Nav.Link>
            <Nav.Link href="#cart" className="navLink">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="icon"
                size="sm"
              />
              In Basket
            </Nav.Link>
            <Nav.Link href="#medflows" className="navLink activeLink">
              <FontAwesomeIcon
                icon={faNotesMedical}
                className="icon"
                size="sm"
              />
              Medflows
            </Nav.Link>
            <Nav.Link href="#differentials" className="navLink">
              <FontAwesomeIcon icon={faMinus} size="sm" className="icon" />
              Differentials
            </Nav.Link>
            <Nav.Link href="#calculators" className="navLink">
              <FontAwesomeIcon icon={faCalculator} size="sm" className="icon" />
              Calculators
            </Nav.Link>
            <NavDropdown
              eventkey={1}
              title={
                <div className="pull-left">
                  <img
                    src={headshot}
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
                My Profile
              </NavDropdown.Item>

              <NavDropdown.Item href="myAccount">
                <FontAwesomeIcon icon={faCog} className="icon" size="sm" />
                Settings
              </NavDropdown.Item>

              <NavDropdown.Item href="myAccount">
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className="icon"
                  size="sm"
                />
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MedflowNavbar;
