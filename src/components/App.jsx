import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "../styles/App.scss";
import Profile from "./Profile";
import MedflowNavbar from "./navbar/MedflowNavbar";
import MedflowTabs from "./navbar/MeflowTabs";
import MedflowFooter from "../MedflowFooter";

const App = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Kim Rieger",
    age: 38,
    dateOfBirth: "08/07/1983",
    physician: "Dr.Kevin Castor",
    gender: "Female",
    headshot: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp",
    cellPhone: "309-309-3094",
  });
  const [insuranceInfo, setInsuranceInfo] = useState({
    providerName: "Cigna PPO",
    policyNumber: "67651234",
    groupId: "0432",
    mrnNumber: "12345678",
  });

  useEffect(() => {
    const mockUserInfo = {
      name: "Kim Rieger",
      age: 38,
      dateOfBirth: "08/07/1983",
      physician: "Dr.Kevin Castor",
      gender: "Female",
      headshot: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp",
      cellPhone: "309-309-3094",
    };
    const mockInsuranceInfo = {
      providerName: "Cigna PPO",
      policyNumber: "67651234",
      groupId: "0432",
      mrnNumber: "12345678",
    };
    setUserInfo(mockUserInfo);
    setInsuranceInfo(mockInsuranceInfo);
  }, []);

  return (
    <div className="App">
      <Container>
        <Row>
          <MedflowNavbar {...userInfo} />
        </Row>
        <Row>
          <div
            className={
              "d-md-flex shadow-sm rounded bg-light py-0 mx-0 mt-1 infoSection"
            }
          >
            <Profile userInfo={userInfo} insuranceInfo={insuranceInfo} />
          </div>
        </Row>
        <Row>
          <MedflowTabs />
        </Row>
        <Row>
          <MedflowFooter />
        </Row>
      </Container>
    </div>
  );
};

export default App;
