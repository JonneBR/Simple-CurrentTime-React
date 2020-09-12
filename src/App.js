import React, { Component } from 'react';

class App extends Component {
  state = {
    hour: new Date(),
    minutes: new Date(),
    seconds: new Date(),
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

    return (
      <section className="timer-container">
        <div className="title-container">
          <h1>Current Time</h1>
        </div>

        <div className="section-container">
          <section id="hour-section">
            <p>{this.state.hour.getHours()}</p>
          </section>
          <span>:</span>
          <section>
            <p>{minutes < 10 ? '0' + minutes : minutes}</p>
          </section>
          <span>:</span>
          <section>
            <p>{seconds < 10 ? '0' + seconds : seconds}</p>
          </section>
        </div>
        {this.callMe()}
      </section>
    );
  }
}

export default App;
