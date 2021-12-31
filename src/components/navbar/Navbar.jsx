import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";
const Navbar = ({ headshot }) => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button type="button" className="btn btn-light navbar-brand">
            <div className="logo">
            <FontAwesomeIcon icon={faNotesMedical} size="lg"/>
            <h3> eMedRecords</h3>
            </div>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarRightAlignExample"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item lead">
                <button className="btn btn-light nav-link navLink">
                  Chart
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-light nav-link navLink">
                  Encounter
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-light nav-link navLink">
                  In Basket
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-light nav-link navLink" >
                  Schedule
                </button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link navLink active">
                  Medflows
                </button>
              </li>
              <li className="nav-item">
                <Dropdown className="avatar">
                  <Dropdown.Toggle className="avatar">
                    <img
                      src={headshot}
                      className="rounded-circle"
                      height="30"
                      alt="Portrait of a Woman"
                      loading="lazy"
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">My Profile</Dropdown.Item>
                    <Dropdown.Item href="#">Settings</Dropdown.Item>
                    <Dropdown.Item href="#">Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
