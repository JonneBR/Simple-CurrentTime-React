import React, { Component } from 'react';

class App extends Component {
  state = {
    date: new Date(),
    hour: new Date(),
    minutes: new Date(),
    seconds: new Date(),
  };

  callMe() {
    setInterval(() => {
      this.setState({ date: new Date() });
      this.setState({ seconds: new Date() });
    }, 1000);
  }
  render() {
    // console.log(this.state.hour.getHours());
    // console.log(this.state.minutes.getMinutes());
    // console.log(this.state.seconds.getSeconds());

    return (
      <section className="timer-container">
        <section className="timer">
          <div className="title-container">
            <h1>Current Time</h1>
          </div>

          <div className="divdoida">
            <section>
              <p>{this.state.hour.getHours()}</p>
            </section>
            <span>:</span>
            <section>
              <p>{this.state.minutes.getMinutes()}</p>
            </section>
            <span>:</span>
            <section>
              <p>{this.state.seconds.getSeconds()}</p>
            </section>
          </div>
        </section>
        {this.callMe()}
      </section>
    );
  }
}

export default App;
