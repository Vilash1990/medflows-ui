import "./App.css";
import Profile from "./Profile";
import { useState, useEffect } from "react";
import Navbar from "./navbar/Navbar";
import { UserContext } from "../context/UserContext";
import { getUserInfo } from "../mock/UserInfo";
const App = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    setUserInfo(getUserInfo());
  }, []);
  return (
    <div className="App">
      <UserContext.Provider value={userInfo}>
        <div className="container">
          <div className={"row"}>
            <Navbar />
          </div>
          <div className={"row"}>
            <Profile />
          </div>
        </div>
      </UserContext.Provider>
    </div>
  );
};

export default App;
