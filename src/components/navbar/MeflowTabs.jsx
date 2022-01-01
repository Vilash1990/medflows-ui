import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";

const MedflowTabs = () => {
  const [key, setKey] = useState("progressNotes");
  return (
    <div className="mt-3">
      <Tabs
        id="controlled-tab-example "
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="vitals" title="Vitals"></Tab>
        <Tab eventKey="allergies" title="Allergies"></Tab>
        <Tab eventKey="progressNotes" title="Progress Notes"><ProgressNotes ></ProgressNotes></Tab>
        <Tab eventKey="differentials" title="Differentials"></Tab>
        <Tab eventKey="medications" title="Medications" disabled></Tab>
      </Tabs>
    </div>
  );
};

export default MedflowTabs;
