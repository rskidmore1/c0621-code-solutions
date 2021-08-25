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
      // isToggled = false;
      button = <i onClick={this.clickHandle} className="fas fa-toggle-on"></i>;
    } else {
      button = <i onClick={this.clickHandle} className="fas fa-toggle-off"></i>;

    }

    return (
      <div>
        {button}
      </div>
    );
  }

}

export default Toggle;
