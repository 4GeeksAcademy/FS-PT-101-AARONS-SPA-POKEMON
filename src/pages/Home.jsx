import { Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { PokemonCard } from "../components/PokeCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ItemCard } from "../components/ItemCard.jsx";
import { LocationsCard } from "../components/Locations.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<>
			<div className="row-container">
				<h2>POKEMON</h2>
				<div className="pokemon-row">
					{store.pokemons?.results?.map((el, i) => <PokemonCard key={i} name={el.name} url={el.url} />)}
				</div>
				<div className="d-flex justify-content-end">
					<Link className="btn btn-primary btn-lg mt-2" to={'/pokemon'}>Ir a Pokedex</Link>
				</div>
			</div>

			<div className="row-container">
				<h2>ITEMS</h2>
				<div className="pokemon-row">
					{store.items?.results?.map((el, i) => <ItemCard key={i} name={el.name} url={el.url} />)}
				</div>
				<div className="d-flex justify-content-end">
					<Link className="btn btn-primary btn-lg mt-2" to={'/item'}>Ir a Items</Link>
				</div>
			</div>

			<div className="row-container">
				<h2>LOCATIONS</h2>
				<div className="pokemon-row">
					{store.locations?.results?.map((el, i) => <LocationsCard key={i} name={el.name} url={el.url} />)}
				</div>
				<div className="d-flex justify-content-end">
					<Link className="btn btn-primary btn-lg mt-2" to={'/location'}>Ir a Locations</Link>
				</div>
			</div>
		</>
	);
}; 