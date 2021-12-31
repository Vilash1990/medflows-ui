const Profile = ({...userInfo}) => {
  return (
    <div
      className="container-fluid d-md-flex justify-content-md-between
    align-items-center profile"
    >
      <div className="card bg-light col-md-5 profileInformation">
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
      <div className="card bg-light col-md-6">
        <div className="card-body text-left">
          <p className="">
            Age:
            <span className="data">{userInfo.age}</span>
          </p>
          <p>
            DOB:
            <span className="data">{userInfo.dateOfBirth}</span>
          </p>
          <p>
            Gender:
            <span className="data">{userInfo.gender}</span>
          </p>
          <p>
            PHP:
            <span className="data">{userInfo.physician}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
