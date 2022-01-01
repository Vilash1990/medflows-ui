import { Container, Row } from "react-bootstrap";
import "../styles/App.scss";
import ProfileInfo from "./ProfileInfo";
import MedflowNavbar from "./MedflowNavbar";
import MedflowTabs from "./MeflowTabs";
import MedflowFooter from "./MedflowFooter";
import { UserInfoProvider } from "../context/UserContext";
const App = () => {
  return (
    <div className="App">
      <UserInfoProvider>
        <Container>
          <Row>
            <MedflowNavbar />
          </Row>
          <Row>
            <div className="d-md-flex shadow-sm rounded bg-light py-0 mx-0 mt-1 infoSection">
              <ProfileInfo />
            </div>
          </Row>
          <Row>
            <MedflowTabs />
          </Row>
          <Row>
            <MedflowFooter />
          </Row>
        </Container>
      </UserInfoProvider>
    </div>
  );
};

export default App;
