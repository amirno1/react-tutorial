import React, { useContext } from "react";
import { Route, Link, Switch } from "react-router-dom";
import UserInfoContext from "./context/Info";
import TutorialHeader from "./TutorialHeader";
import Api from "./Api/Api";
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
    <div className="main-wrapper">
      <Switch>
        <Route exact path="/">
          <TutorialHeader />
          <AddedUser onRemove={onRemove} userInfo={userInfo} />
          <Form addHandler={addHandler} />
          <Link to="/api">
            <button>Go To API</button>
          </Link>
        </Route>
        <Route>
          <Api path="/api" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
