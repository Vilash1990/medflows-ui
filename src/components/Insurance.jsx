const Insurance = ({ ...insuranceInfo }) => {
  return (
    <div className="container-fluid  justify-content-md-between align-items-center profile">
      <div className="card bg-light">
        <div className="card-body text-left">
          <p>
            Insurance:
            <span className="data">{insuranceInfo.providerName}</span>
          </p>
          <p>
            Policy Number:
            <span className="data">{insuranceInfo.policyNumber}</span>
          </p>
          <p>
            Group Id:
            <span className="data">{insuranceInfo.groupId}</span>
          </p>
          <p>
            MRN:
            <span className="data">{insuranceInfo.mrnNumber}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
