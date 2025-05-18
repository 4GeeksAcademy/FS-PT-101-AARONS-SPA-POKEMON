import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { FavoritesDropp } from "./FavoritesDropp";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#"><img className="pokeImg img-fluid me-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="" /><img className="pokeballImg img-fluid" src="https://pngimg.com/d/pokeball_PNG30.png" alt="" /></a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" href="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={'/pokemon'}>Pokedex</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={'/item'}>Items</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={'/location'}>Locations</Link>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favoritos <span className="badge bg-secondary ms-1">{store.favorites.length}</span>
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<FavoritesDropp store={store} dispatch={dispatch} />
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};