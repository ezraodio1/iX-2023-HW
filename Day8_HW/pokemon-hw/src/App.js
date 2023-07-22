import './App.css';

import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const url = 'https://pokeapi.co/api/v2/';

  const [pokemon, setPokemon] = useState([]);

  async function fetchPokemon() {
    // fetch Library

    const res = await fetch(url + 'pokemon', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const pokemon = await res.json();
    setPokemon(pokemon.results);
    console.log(pokemon);
  }

  return (
    <div className="text-center">
      <button className="btn btn-primary mt-3" onClick={fetchPokemon}>
        Fetch Pokemon
      </button>

      <div>
        {pokemon.map((x) => {
          return <div key={x.name}> {x.name}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
