import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const moreClicks = this.state.clicks + 1;
    this.setState({ clicks: moreClicks });
  }

  render() {
    const clickNumber = this.state.clicks;
    let button = <button className="hot-button click-count" onClick={this.handleClick}>{this.state.clicks}</button>;
    if (clickNumber < 4) {
      button = <button className="hot-button cold click-count" onClick={this.handleClick}>{this.state.clicks}</button>;

    } else if (clickNumber < 7) {
      button = <button className="hot-button cool click-count" onClick={this.handleClick}>{this.state.clicks}</button>;

    } else if (clickNumber < 10) {
      button = <button className="hot-button tepid click-count" onClick={this.handleClick}>{this.state.clicks}</button>;

    } else if (clickNumber < 13) {
      button = <button className="hot-button warm click-count" onClick={this.handleClick}>{this.state.clicks}</button>;

    } else if (clickNumber < 16) {
      button = <button className="hot-button hot click-count" onClick={this.handleClick}>{this.state.clicks}</button>;

    } else if (clickNumber < 19) {
      button = <button className="hot-button nuclear click-count" onClick={this.handleClick}>{this.state.clicks}</button>;

    } else {
      button = <button className="hot-button nuclear click-count" onClick={this.handleClick}>{this.state.clicks}</button>;

    }

    return (
      <div>
        {button}
      </div>
    );
  }

}
ReactDOM.render(<HotButton />,
  document.querySelector('#root')
);
