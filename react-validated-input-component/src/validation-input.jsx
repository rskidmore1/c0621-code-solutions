import React from 'react';

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {

    let message = 'A password is required';
    let check = 'fas fa-times';
    if (this.state.value.length < 8) {

      check = 'fas fa-times';
      message = 'Your password is too short';

    } else {

      check = 'fas fa-check';
      message = '';

    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Password:<br></br>
            <input type="password" value={this.state.value} onChange={this.handleChange} />
          </label><i className={check}></i>

        </form>
        <p>{message}</p>
      </div>
    );
  }
}

export default MainForm;
