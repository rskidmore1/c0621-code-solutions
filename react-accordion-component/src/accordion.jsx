import React from 'react';

class Numbers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openIndex: null
    };
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle(event) {
    const targetname = event.target.getAttribute('id');
    this.setState({ openIndex: targetname });
  }

  render() {
    const lang = this.props.lang;
    return (
      <div>

        {lang.map(langIt =>

          <div className="name-div hover" id={langIt.lang} key={langIt.lang} onClick={this.clickHandle}>

            {langIt.lang}
            <div className={this.state.openIndex === langIt.lang ? 'description ' + langIt.lang : 'description ' + langIt.lang + ' hidden'}>

              {langIt.description}
            </div>
          </div>

        )}

      </div>
    );
  }
}

class Accordion extends React.Component {

  render() {
    const input = this.props.input;
    return (
      <div>

        <Numbers lang={input} />

      </div>
    );
  }
}

export default Accordion;
