import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";

const MedflowTabs = () => {
  const [key, setKey] = useState("home");
  return (
    <div className="mt-2">
      <Tabs
        id="controlled-tab-example "
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Home"></Tab>
        <Tab eventKey="profile" title="Profile"></Tab>
        <Tab eventKey="contact" title="Contact" ></Tab>
      </Tabs>
    </div>
  );
};

export default MedflowTabs;
