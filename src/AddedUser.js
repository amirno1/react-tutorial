import React from "react";
import "./AddedUser.css";
const AddedUser = props => {
  const { userInfo } = props;

  const users = userInfo.map((user, index) => {
    return (
      <div className="user-row">
        <div>{user.name}</div>
        <div>{user.job}</div>
        <input
          type="button"
          onClick={() => props.onRemove(index)}
          name={index}
          value="Remove"
        />
      </div>
    );
  });
  return users;
};

export default AddedUser;
