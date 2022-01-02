import React from "react";
import CardDescription from "../shared/CardDescription";

const HistoryIllness = ({
  illnessDescription,
  abnormalPhysicalTests,
  gender,
  iconToDisplay
}) => {
  return (
    <div className="illnessDescriptionContainer">
      <CardDescription
        itemsHeader="Illness Description History"
        iconToDisplay ={iconToDisplay}
        description={
          <div>
            <p className="illnessDescriptionContent">{illnessDescription}</p>
            <p className="illnessDescriptionContent data">
              {abnormalPhysicalTests.map((abnormalPhysicalTest) => (
                <a href="link" className="descriptionLink zoom">
                  {abnormalPhysicalTest.component} of{" "}
                  {abnormalPhysicalTest.actualValue}
                </a>
              ))}
            </p>
            <p className="illnessDescriptionContent">
              {`${
                gender === "male" ? `He` : `She`
              } is here to discuss his complaints and lab results`}
            </p>
          </div>
        }
      />
    </div>
  );
};

export default HistoryIllness;
