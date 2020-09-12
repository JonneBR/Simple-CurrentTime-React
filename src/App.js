import React, { Component } from 'react';

class App extends Component {
  state = {
    hour: new Date(),
    minutes: new Date(),
    seconds: new Date(),
    month: new Date(),
  };

  callMe() {
    setInterval(() => {
      this.setState({ hour: new Date() });
      this.setState({ minutes: new Date() });
      this.setState({ seconds: new Date() });
    }, 1000);
  }

  render() {
    let minutes = this.state.minutes.getMinutes();
    let seconds = this.state.minutes.getSeconds();

    console.log(this.state.hour.getFullYear());
    return (
      <section className="timer-container">
        <div className="title-container">
          <h1>Current Time</h1>
        </div>

        <div className="section-container">
          <section id="hour-section">
            <p>{this.state.hour.getHours()}</p>
            <sub>{this.state.hour.getDate()}</sub>
          </section>
          <span>:</span>
          <section id="minutes-section">
            <p>{minutes < 10 ? '0' + minutes : minutes}</p>
            <sub>/{this.state.hour.getMonth() + 1}</sub>
          </section>
          <span>:</span>
          <section id="seconds-section">
            <p>{seconds < 10 ? '0' + seconds : seconds}</p>
            <sub>/{this.state.hour.getFullYear()}</sub>
          </section>
        </div>
        {this.callMe()}
      </section>
    );
  }
}

export default App;
