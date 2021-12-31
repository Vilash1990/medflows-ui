import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const Profile = () => {
const userInfo = useContext(UserContext);
  return (
    <div
      className="container-fluid mt-3 d-md-flex justify-content-md-between
    align-items-center profile"
    >
      <div className="card bg-light col-3 profileInformation m-3">
        <div className="card-body text-center">
          <img
            src={userInfo.headshot}
            className="rounded-circle mb-3"
            height={"100"}
            alt=""
          />
          <h5 className="card-title mb-3">{userInfo.name}</h5>
        </div>
      </div>
      <div className="card bg-light col-4">
        <div className="card-body text-left">
          <p className="">
            Age:
            {userInfo.age}
          </p>
          <p>
            DOB:
            {userInfo.dateOfBirth}
          </p>
          <p>
            Gender:
            {userInfo.gender}
          </p>
          <p>
            PHP:
            {userInfo.physician}
          </p>
        </div>
      </div>

      <div className="card bg-light col-4">
        <div className="card-body text-left">
          <p>
            Insurance:
            {userInfo.insuranceInfo.providerName}
          </p>
          <p>
            Policy Number:
            {userInfo.insuranceInfo.policyNumber}
          </p>
          <p>
            Group Id:
            {userInfo.insuranceInfo.groupId}
          </p>
          <p>
            MRN:
            {userInfo.insuranceInfo.mrnNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
