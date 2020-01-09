import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: "",
      job: ""
    };
    this.state = this.initialState;
  }
  changeHandler = e => {
    if (e.target.name === "name") {
      this.setState({ ...this.state, name: e.target.value });
    } else {
      this.setState({ ...this.state, job: e.target.value });
    }
  };

  addHandler = () => {
    this.props.addHandler(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;
    return (
      <form>
        <div className="addUser">
          <h2>Add User</h2>
          <h4>Name</h4>
          <input
            type="text"
            name="name"
            value={name}
            size="60"
            onChange={this.changeHandler}
          ></input>
          <h4>Job</h4>
          <input
            type="text"
            value={job}
            name="job"
            size="60"
            onChange={this.changeHandler}
          ></input>
          <input type="button" value="submit" onClick={this.addHandler} />
        </div>
      </form>
    );
  }
}
