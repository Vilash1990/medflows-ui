import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";
const Navbar = ({ headshot }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="logo">
            <FontAwesomeIcon icon={faNotesMedical} size="lg"/>
            <h3> eMedRecords</h3>
            </div>
          </a>
          <div
            className="collapse navbar-collapse"
            id="navbarRightAlignExample"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item lead">
                <a className="nav-link navLink" href="#">
                  Chart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navLink lead" href="#">
                  Encounter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navLink lead" href="#">
                  In Basket
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navLink lead" href="#">
                  Schedule
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navLink lead active" href="#">
                  Medflows
                </a>
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
    </div>
  );
};

export default Navbar;
