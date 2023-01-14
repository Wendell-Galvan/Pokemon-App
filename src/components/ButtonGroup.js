import {pokemonNames, shuffle} from '../utils';

function ButtonGroup({setSelectedPokemon, correctPokemon}) {
	const shuffledPokemon = shuffle(pokemonNames);

	const handleOnClick = (e) => {
    	setSelectedPokemon(e.target.innerHTML);
	 }

 return(
 	<>
	 {shuffledPokemon.map((pokemonName) => {
	 	return (
	 		<button key={pokemonName} onClick={handleOnClick}>{pokemonName}</button>
	 	)
	 })}
	</>
 );
}

export default ButtonGroup;