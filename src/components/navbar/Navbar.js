import { Dropdown } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Navbar = () => {
  const userInfo = useContext(UserContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            eMedRecords
          </a>
          <div className="collapse navbar-collapse" id="navbarRightAlignExample">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item lead">
                <a className="nav-link navLink" aria-current="page" href="#">
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
                <Dropdown>
                  <Dropdown.Toggle>
                      <img
                        src={userInfo.headshot}
                        className="rounded-circle"
                        height="30"
                        alt="Portrait of a Woman"
                        loading="lazy"
                        
                      />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">My Profile</Dropdown.Item>
                    <Dropdown.Item href="#">
                      Settings
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      Logout
                    </Dropdown.Item>
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
