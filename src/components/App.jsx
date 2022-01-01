import "../styles/App.scss";
import Profile from "./Profile";
import { useState, useEffect } from "react";
import MedflowNavbar from "./navbar/MedflowNavbar";
import MedflowTabs from "./navbar/MeflowTabs";
const App = () => {
  const [userInfo, setUserInfo] = useState();
  const [insuranceInfo, setInsuranceInfo] = useState();
  useEffect(() => {
    const mockUserInfo = {
      name: "Kim Rieger",
      age: 38,
      dateOfBirth: "08/07/1983",
      physician: "Dr.Kevin Castor",
      gender: "Female",
      headshot: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp",
      cellPhone: "309-309-3094"
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
      <div className="container">
        <MedflowNavbar {...userInfo} />
        <div
          className={
            "d-md-flex shadow-sm rounded bg-light py-0 mx-0 mt-1 infoSection"
          }
        >
          <div className="col-md-12">
            <Profile userInfo={userInfo} insuranceInfo={insuranceInfo} />
          </div>
        </div>
        <MedflowTabs />
      </div>
    </div>
  );
};

export default App;
