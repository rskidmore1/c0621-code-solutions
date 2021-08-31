import React from 'react';

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  }

  render() {
    let button;
    if (this.state.isOpen) {

      button = <div>
      <div className="">

          <i className="fas fa-bars" onClick={this.toggle}></i>

        </div>
        <div className="nav-div on-screen">
          <h2 onClick={this.toggle}>Menu</h2>
          <div>
          <ul>
              <li><p onClick={this.toggle}>About</p></li>
              <li><p onClick={this.toggle}>Get Started</p></li>
              <li><p onClick={this.toggle}>Sign In</p></li>
          </ul>

         </div>
      </div>
      </div>;
    } else if (!this.state.isOpen) {
      button = <div>
       <div>

        <i className="fas fa-bars" onClick={this.toggle}></i>

      </div>
        <div className="nav-div off-screen" >
          <h2 onClick={this.toggle}>Menu</h2>
        <div>
          <ul>
            <li><p onClick={this.toggle}>About</p></li>
            <li><p onClick={this.toggle}>Get Started</p></li>
            <li><p onClick={this.toggle}>Sign In</p></li>
          </ul>

         </div>;

        </div>
      </div>;

    }
    return (
      <div>{button}</div>
    );
  }

}

export default Drawer;
