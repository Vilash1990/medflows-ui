import { Container, Row } from "react-bootstrap";
import "../styles/App.scss";
import Medflows from "./Medflows";
import MedflowNavbar from "./MedflowNavbar";
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
          <Medflows />
          <Row>
            <MedflowFooter />
          </Row>
        </Container>
      </UserInfoProvider>
    </div>
  );
};

export default App;
