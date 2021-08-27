import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: true };
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle() {

    const isToggled = this.state.isToggled;
    if (isToggled) {
      this.setState({ isToggled: false });
    } else {
      this.setState({ isToggled: true });
    }
  }

  render() {
    const isToggled = this.state.isToggled;
    let button;
    if (isToggled) {

      button = <div className="toggle-on" >
        <div className="dot-on" onClick={this.clickHandle}></div>
      </div>;
    } else {
      button = <div className="toggle-off" onClick={this.clickHandle}>
        <div className="dot-off"></div>
      </div>;
    }

    return (
      <div>
        {button}
      </div>
    );
  }

}

export default Toggle;
