import "./App.css";
import Profile from "./Profile";
import Insurance from "./Insurance";
import { useState, useEffect } from "react";
import Navbar from "./navbar/Navbar";
import Slidebar from "./navbar/Slidebar";
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
      mockInsuranceInfo: {
        providerName: "Cigna PPO",
        policyNumber: "67651234",
        groupId: "0432",
        mrnNumber: "12345678",
      },
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Slidebar />
          </div>
          <div className="col-md-10">
            <div className="shadow-sm mb-1 rounded navBar">
              <Navbar {...userInfo} />
            </div>
            <div
              className={
                "mt-1 d-md-flex shadow mb-2 rounded bg-light py-0 infoSection"
              }
            >
              <div className="col-md-8">
                <Profile {...userInfo} insuranceInfo={insuranceInfo} />
              </div>
              <div className="col-md-4">
                <Insurance {...insuranceInfo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
