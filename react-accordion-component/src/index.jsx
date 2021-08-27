import React from 'react';
import ReactDOM from 'react-dom';
// import Accordian from './accordion';

// create html with other code but hidden css
// onclick unhides it

class Numbers extends React.Component {

  constructor(props) {
    super(props);
    this.state = { divValue: 'hidden' };
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle() {

    this.setState({ divValue: '' });

  }

  render() {
    const lang = this.props.lang;
    return (
      <div>
        {lang.map(langIt =>
          <div key={langIt.lang} onClick={this.clickHandle}>
            {langIt.lang}
            <div className={this.state.divValue + ' ' + langIt.lang}>
              {langIt.description}

            </div>
          </div>

        )}
      </div>
    );
  }
}

class Accordian extends React.Component {

  render() {
    const input = this.props.input;
    return (
    <div>

       <Numbers lang={input} />

      </div>
    );
  }
}

const subjects = [{ lang: 'HTML', description: 'lorem ipson' }, { lang: 'CSS', description: 'lorem ipson' }, { lang: 'JS', description: 'lorem ipson' }];
// const subjects = [1, 2, 3, 4, 5, 6];

ReactDOM.render(< Accordian input={subjects} />,
  document.querySelector('#root'));

// class Numbers extends React.Component {
//   render() {
//     const lang = this.props.lang;
//     return (
//       <div>
//         {lang.map(langIt =>
//           <li key={langIt.lang}>
//             {langIt.lang}
//           </li>
//         )}
//       </div>
//     );
//   }
// }

// class Accordian extends React.Component {

//   render() {
//     const input = this.props.input;
//     return (
//       <div>
//         <ul>
//           <Numbers lang={input} />
//         </ul>
//       </div>
//     );
//   }
// }

// const subjects = [{ lang: 'HTML' }, { lang: 'CSS' }, { lang: 'JS' }];
// // const subjects = [1, 2, 3, 4, 5, 6];

// ReactDOM.render(< Accordian input={subjects} />,
//   document.querySelector('#root'));
