import React from "react";
import axios from "axios";
import "./App.css";
import { Button } from "reactstrap";
import UserCard from "./components/UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: [],
      userText: ""
    };
  }
  componentDidMount() {
    console.log("mounted");
    axios
      .get(`/users/jtwillo51/followers`)

      .then(response => {
        console.log("followers: ", response);
        this.setState({ followers: response.data });
      })
      .catch(err => {
        console.log("err: ", err);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("updated");
    if (prevState.followers !== this.state.followers) {
      console.log("got more followers!");
    }
  }

  changeHandler = e => {
    e.preventDefault();

    this.setState({ userText: e.target.value });
  };

  fetchFollowers = e => {
    // e.preventDefault();

    axios
      .get(`/users/${this.state.userText}/followers`)

      .then(response => this.setState({ followers: response.data }))
      .catch(err => console.log("err: ", err));
  };

  render() {
    return (
      <div className="App">
        <header>
    <h2>Showing all {this.state.followers.length} Followers</h2>
          <input
            type="text"
            placeholder="search by username"
            value={this.state.userText}
            onChange={this.changeHandler}
          />
          <Button onClick={this.fetchFollowers}>Search</Button>
        </header>
        <div className = "followers-list">
        {this.state.followers.map(follower => (
          <div className = "userCard">
            <UserCard follower={follower} key={follower.id} />
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export default App;
