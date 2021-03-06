import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function ListPoke(props) {
  const list = (
    <ul>
    {props.pokedex.map(pokemon =>
      <li key={pokemon.name}>
        {pokemon.name}
        </li>
    )}
      </ul>
  );
  return (
    <div>
      {list}
    </div>
  );
}

ReactDOM.render(< ListPoke pokedex={pokedex} />,
  document.querySelector('#root'));
