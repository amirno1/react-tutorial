import React from "react";

const TutorialHeader = () => {
  return (
    <div>
      <h1>React Tutorial</h1>
      <h3>Add a charachter with a name and job to the table.</h3>
      <div className="header-wrapper">
        <div className="tabs">Name</div>
        <div className="tabs">Job</div>
        <div className="tabs">Remove</div>
      </div>
      <hr></hr>
    </div>
  );
};

export default TutorialHeader;
