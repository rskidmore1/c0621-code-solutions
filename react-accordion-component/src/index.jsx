import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const subjects = [{ lang: 'HTML', description: '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, minima.' }, { lang: 'CSS', description: '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, minima.' }, { lang: 'JS', description: '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, minima.' }, { lang: 'Perl', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, minima.' }];

ReactDOM.render(< Accordion input={subjects} />,
  document.querySelector('#root'));
