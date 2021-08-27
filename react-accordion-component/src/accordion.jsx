import React from 'react';

class Numbers extends React.Component {

  constructor(props) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle(event) {

    const targetname = event.target.getAttribute('id');
    const targetHTML = document.querySelector('.description.' + targetname);
    const otherHTML = document.querySelectorAll('.description');

    if (targetHTML.classList.contains('hidden')) {

      targetHTML.classList.remove('hidden');
      for (let i = 0; i < otherHTML.length; i++) {
        if (!otherHTML[i].classList.contains(targetname)) {
          if (!otherHTML[i].classList.contains('hidden')) {
            otherHTML[i].classList.add('hidden');
          }

        }
      }
    } else {
      targetHTML.classList.add('hidden');
    }

  }

  render() {
    const lang = this.props.lang;
    return (
      <div>

        {lang.map(langIt =>

          <div className="name-div hover" id={langIt.lang} key={langIt.lang} onClick={this.clickHandle}>

            {langIt.lang}
            <div className={'description ' + langIt.lang + ' hidden'}>

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
