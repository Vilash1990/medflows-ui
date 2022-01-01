import React, { useState, useContext } from "react";

const UserContext = React.createContext();
const UserContextUpdate = React.createContext();

export function usePatientInfo() {
  return useContext(UserContext);
}

export function usePatientInfoUpdate() {
  return useContext(UserContextUpdate);
}

export function UserInfoProvider({ children }) {
  const [patientInfo, setPatientInfo] = useState({
    userInfo: {
      name: "Kim Rieger",
      age: 38,
      dateOfBirth: "08/07/1983",
      physician: "Dr.Kevin Castor",
      gender: "Female",
      headshot: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(30).webp",
      cellPhone: "309-309-3094",
    },
    insuranceInfo: {
      providerName: "Cigna PPO",
      policyNumber: "67651234",
      groupId: "0432",
      mrnNumber: "12345678",
    },
    complaints: ["Fatigue", "Weight Gain", "High Cholesterol"],
    pastHealthIssues: ["Headache", "Thorat Pain", "Nasal Congestion"],
    medications: ["Vitamin D", "Medicine A", "Tylenol 50mg"],
    assessmentPlan: [],
  });

  function updatePatientInfo(patientInfo) {
    setPatientInfo(patientInfo);
  }

  return (
    <UserContext.Provider value={patientInfo}>
      <UserContextUpdate.Provider value={updatePatientInfo}>
        {children}
      </UserContextUpdate.Provider>
    </UserContext.Provider>
  );
}
;
