import React from 'react';

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', message: '', check: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {

    this.setState({ value: event.target.value });

  }

  handleSubmit(event) {
    if (this.state.value === '') {
      this.setState({ message: 'A password is required' });
      this.setState({ check: 'fas fa-times' });
    } else if (this.state.value.length < 8) {
      this.setState({ message: 'Your password is too short' });
      this.setState({ check: 'fas fa-times' });

    } else {
      this.setState({ check: 'fas fa-check' });
      this.setState({ message: '' });

    }

    event.preventDefault();

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Password:<br></br>
            <input type="password" value={this.state.value} onChange={this.handleChange} />

          </label><i className={this.state.check}></i>

          <br></br>
          <button type="submit" >Submit</button>
        </form>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default MainForm;
