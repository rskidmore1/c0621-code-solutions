import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, isCounting: false, intervalID: null };
    this.count = this.count.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);

  }

  count() {
    let increase = this.state.count;

    var intID = setInterval(() => {
      increase++;
      this.setState({ count: increase, intervalID: intID });

    }, 1000
    );

  }

  start() {
    this.setState({ isCounting: true });
    this.count();
  }

  stop() {
    const intID = this.state.intervalID;
    clearInterval(intID);
    this.setState({ isCounting: false });

  }

  reset() {
    if (!this.state.isCounting) {
      this.setState({ count: 0 });
    }
  }

  render() {
    let button;
    if (!this.state.isCounting) {
      button = <i className="fas fa-play control" onClick={this.start}></i>;
    } else {
      button = <i className="fas fa-pause control" onClick={this.stop}></i>;

    }

    return (
      <div>
        <div className="round-div round border" onClick={this.reset} > <p className="number"> {this.state.count}</p></div>

        {button}

      </div>
    );
  }
}

export default Stopwatch;
