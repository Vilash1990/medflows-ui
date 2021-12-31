import "./App.css";
import Profile from "./Profile";
import Insurance from "./Insurance";
import { useState, useEffect } from "react";
import Navbar from "./navbar/Navbar";
const App = () => {
  const [userInfo, setUserInfo] = useState();
  const [insuranceInfo, setInsuranceInfo] = useState();
  useEffect(() => {
    const mockUserInfo = {
      "name": "Kim Rieger",
      "age": 38,
      "dateOfBirth": "08/07/1983",
      "physician": "Dr.Kevin Castor",
      "gender": "Female",
      "headshot": "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp",
      "mockInsuranceInfo" : {
        "providerName": "Cigna PPO",
        "policyNumber": "67651234",
        "groupId": "0432",
        "mrnNumber": "12345678",
      }
    };
    const mockInsuranceInfo = {
      "providerName": "Cigna PPO",
      "policyNumber": "67651234",
      "groupId": "0432",
      "mrnNumber": "12345678"
    };
    setUserInfo(mockUserInfo);
    setInsuranceInfo(mockInsuranceInfo);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Navbar {...userInfo} />
        <div className={"row mt-1 d-md-flex shadow p-3 mb-5 rounded bg-light py-0 px-2"}>
          <div className="col-md-8">
          <Profile {...userInfo} insuranceInfo={insuranceInfo}/>
          </div>
          <div className="col-md-4">
            <Insurance {...insuranceInfo}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
