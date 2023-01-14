import {useState, useEffect} from 'react';
import './App.css';
import RandomPokemon from './components/RandomPokemon';
import ButtonGroup from './components/ButtonGroup';
import {pokemonNames} from './utils';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [correctPokemon, setCorrectPokemon] = useState('');

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * (pokemonNames.length));

    setCorrectPokemon(pokemonNames[randomNumber]);
    console.log(correctPokemon);
  }, [correctPokemon]);



  const message = () => {
    if (!selectedPokemon) {
            return '';
          } else if (selectedPokemon === correctPokemon) {
            return correctPokemon;
          } else {
            return'Incorrect';
          }
  }

  return (
    <div className="App grid justify-items-center py-10">
     { <div>
        {message()} 
      </div> }
      <RandomPokemon correctPokemon={correctPokemon} />
      <div className="grid grid-rows-2 grid-cols-2 py-20 place-content-around gap-10">
        <ButtonGroup setSelectedPokemon={setSelectedPokemon} correctPokemon={correctPokemon}/>
      </div>
    </div>
  );
}

export default App;
