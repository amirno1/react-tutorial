import React, { useContext } from "react";
import UserInfoContext from "./context/Info";
import "./App.css";
import Form from "./Form";
import AddedUser from "./AddedUser";
function App() {
  const { userInfo, setUserInfo } = useContext(UserInfoContext);

  const addHandler = user => {
    const newUser = [...userInfo, user];
    setUserInfo(newUser);
  };

  const onRemove = chosenUserIndex => {
    const newList = userInfo.filter((user, index) => index !== chosenUserIndex);
    setUserInfo(newList);
  };
  return (
    <div>
      <div className="main-wrapper">
        <h1>React Tutorial</h1>
        <h3>Add a charachter with a name and job to the table.</h3>
        <div className="header-wrapper">
          <div className="tabs">Name</div>
          <div className="tabs">Job</div>
          <div className="tabs">Remove</div>
        </div>
        <hr></hr>
        <AddedUser onRemove={onRemove} userInfo={userInfo} />
        <Form addHandler={addHandler} />
      </div>
    </div>
  );
}

export default App;
