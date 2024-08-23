import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Warda Bounab",
        bio: "Software Engineer",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Developer",
      },
      show: false,
      timeElapsed: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  render() {
    const { person, show, timeElapsed } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? "Hide" : "Show"} Profile
        </button>
        {show && (
          <div className="profile">
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since mount: {timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;
