import React from 'react'
import ProfileInfo from './ProfileInfo';
import MedflowTabs from './MeflowTabs';
import { Row } from "react-bootstrap";
const Medflows = () => {
    return (
        <div>
            <Row>
            <div className="d-md-flex shadow-sm rounded bg-light py-0 mx-0 mt-1 infoSection">
              <ProfileInfo />
            </div>
          </Row>
          <Row>
            <MedflowTabs />
          </Row>
        </div>
    )
}

export default Medflows
