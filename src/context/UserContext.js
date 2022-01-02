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
    medication: ["Vitamin D", "Medicine A", "Tylenol 50mg"],
    physicalExams: ["TSH", "D Vitamin", "Viral", "Hemoglobin"],
    pastPhysicalTestsOrdered: [
      "TSH",
      "D Vitamin",
      "Viral",
      "HGB",
      "WBC",
      "MCV",
    ],
    illnessDescription:
      "Kim Rieger is a 38 years old female presenting with c/o fatigue, back pain & weight gain for last 6 months. He is very active and eats healthy. Denies any fever, cough, abdominal pain, snoring or any new medications. He called me 1 month ago with his complaints. I ordered TSH, CBC, CMP, B12, Folic Acid and Vitamins D levels. All test came back normal except:",
      abnormalPhysicalTests: [
      {
        component: "HGB",
        referenceRangeStart: "12.3",
        referenceRangeEnd: "16.5",
        actualValue: "14.5",
      },
      {
        component: "WBC",
        referenceRangeStart: "3.6",
        referenceRangeEnd: "10.2",
        actualValue: "7.1",
      },
      {
        component: "MCV",
        referenceRangeStart: "82",
        referenceRangeEnd: "99",
        actualValue: "86",
      },
      {
        component: "TSH",
        referenceRangeStart: "0.30",
        referenceRangeEnd: "5.3",
        actualValue: "0.2",
      },
    ],
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
