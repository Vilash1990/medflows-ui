import React from "react";
import { Alert } from "react-bootstrap";
const MedflowAlert = ({ alertVariant, setErrorAlert }) => {
  return (
    <div>
      <Alert variant={alertVariant} onClose={() => setErrorAlert(false)} dismissible>
        <p>Please enter the valid input!</p>
      </Alert>
    </div>
  );
};

export default MedflowAlert;
