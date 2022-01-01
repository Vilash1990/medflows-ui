import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "../styles/App.scss";
import Profile from "./Profile";
import MedflowNavbar from "./navbar/MedflowNavbar";
import MedflowTabs from "./navbar/MeflowTabs";
import MedflowFooter from "../MedflowFooter";
import { UserInfoProvider } from "../context/UserContext";
const App = () => {
  return (
    <div className="App">
      <UserInfoProvider>
        <Container>
          <Row>
            <MedflowNavbar />
          </Row>
          <Row>
            <div
              className={
                "d-md-flex shadow-sm rounded bg-light py-0 mx-0 mt-1 infoSection"
              }
            >
              <Profile />
            </div>
          </Row>
          <Row>
            <MedflowTabs />
          </Row>
          <Row>
            <MedflowFooter />
          </Row>
        </Container>
      </UserInfoProvider>
    </div>
  );
};

export default App;
