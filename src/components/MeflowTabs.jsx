import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNotesMedical,
  faMinus,
  faAllergies,
  faMedkit,
  faPumpMedical,
} from "@fortawesome/free-solid-svg-icons";
import ProgressNotes from "./ProgressNotes/ProgressNotes";
const MedflowTabs = () => {
  const [key, setKey] = useState("progressNotes");
  return (
    <div className="mt-2">
      <Tabs
        id="controlled-tab-example "
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab
          eventKey="vitals"
          title={
            <div>
              <FontAwesomeIcon
                icon={faPumpMedical}
                className="icon"
                size="sm"
              />
              Vitals
            </div>
          }
        >
          <h3>All the Vitals Information is shown in this tab</h3>
        </Tab>
        <Tab
          eventKey="allergies"
          title={
            <div>
              <FontAwesomeIcon icon={faAllergies} className="icon" size="sm" />
              Allergies
            </div>
          }
        >
          <h3>All the Allergies information is listed in this tab</h3>
        </Tab>
        <Tab
          eventKey="progressNotes"
          title={
            <div>
              <FontAwesomeIcon
                icon={faNotesMedical}
                className="icon"
                size="sm"
              />
              Progress Notes
            </div>
          }
        >
          <ProgressNotes />
        </Tab>
        <Tab
          eventKey="differentials"
          title={
            <div>
              <FontAwesomeIcon icon={faMinus} className="icon" size="sm" />
              Differentials
            </div>
          }
        >
          <h3>All the Differential Information is shown in this tab</h3>
        </Tab>
        <Tab
          eventKey="medications"
          title={
            <div>
              <FontAwesomeIcon icon={faMedkit} className="icon" size="sm" />
              Medications
            </div>
          }
          disabled
        >
          {" "}
          <h3>All the Medication Information is Displayed in this tab</h3>
        </Tab>
      </Tabs>
    </div>
  );
};

export default MedflowTabs;
