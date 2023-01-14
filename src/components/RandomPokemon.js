import {useState, useEffect} from 'react';

function RandomPokemon({correctPokemon}) {
	const [pokemon, setPokemon] = useState(correctPokemon);

	useEffect(() => {
		setPokemon(correctPokemon);
	}, [correctPokemon]);

	console.log(correctPokemon, "component");
	return <img className="w-1/4" src={`${correctPokemon}.png`} alt="pokemon" />
}

export default RandomPokemon;