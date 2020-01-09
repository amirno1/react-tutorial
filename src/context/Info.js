import React, { useState } from "react";

const UserInfoContext = React.createContext();

const InfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState([]);
  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoContext;
export { InfoProvider };
