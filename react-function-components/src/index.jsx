import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>Click Me!</button>;
}

const element = <CustomButton />;

ReactDOM.render(
  element,
  document.querySelector('#root')
);
