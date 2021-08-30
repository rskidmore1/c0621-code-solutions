import React from 'react';

// Sudos code
// Make a toggle
// closed is hamberger
// open is menu
// need some transforms

// todo
// -toggle
// -closed menu
// -opened menu
// -transitions

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    if (this.state.isOpen) {
      // console.log('if toggle');
      this.setState({ isOpen: false });
    } else {
      // console.log('else toggle');
      this.setState({ isOpen: true });
    }
  }

  render() {
    let button;
    if (this.state.isOpen) {
      // console.log('if button');

      button = <div>
      <div className="">

          <i className="fas fa-bars" onClick={this.toggle}></i>

        </div>
        <div className="nav-div on-screen">
        <h2>Menu</h2>
        <nav>
          <ul>
            <li><a href="" onClick={this.toggle}>About</a></li>
            <li><a href="" onClick={this.toggle}>Get Started</a></li>
            <li><a href="" onClick={this.toggle}>Sign In</a></li>
          </ul>

          {/* <i className="fas fa-bars" onClick={this.toggle}></i> */}
        </nav>
      </div>
      </div>;
    } else {
      // console.log('else button');
      button = <div>
       <div>

        <i className="fas fa-bars" onClick={this.toggle}></i>

      </div>
        <div className="nav-div " >
        <h2>Menu</h2>
        <nav>
          <ul>
            <li><a href="" onClick={this.toggle}>About</a></li>
            <li><a href="" onClick={this.toggle}>Get Started</a></li>
            <li><a href="" onClick={this.toggle}>Sign In</a></li>
          </ul>

          {/* <i className="fas fa-bars" onClick={this.toggle}></i> */}
        </nav>;

        </div>
      </div>;

    }
    return (
      <div>{button}</div>
    );
  }

}

export default Drawer;
