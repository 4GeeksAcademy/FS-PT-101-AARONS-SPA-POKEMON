import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const FavoritesDropp = ({ store, dispatch }) => {
    const handleRemove = (id, type) => {
        dispatch({ type: 'remove_favorite', payload: { id, type } });
    };

    if (!store.favorites || store.favorites.length === 0) {
        return <li className="dropdown-item text-muted">No hay favoritos aún</li>;
    }
    return (
        <>
            {store.favorites.map((pokemon) => {
                const imgSrc = pokemon.type === 'pokemon' ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png` : pokemon.type === 'item' ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${pokemon.name}.png` : "https://www.svgrepo.com/show/276272/location-pokemon.svg";
                const detailPath = pokemon.type === 'pokemon' ? `/details/${pokemon.id}` : pokemon.type === 'item' ? `/detailsItem/${pokemon.name}` : `/detailsLocation/${pokemon.name}`;
                return (
                    <li key={`${pokemon.type}.${pokemon.id || pokemon.name}`} className="dropdown-item d-flex justify-content-between align-items-center">
                        <div>
                            <img src={imgSrc} style={{ width: "40px", height: "40px", marginRight: "10px" }} alt="" />
                            <Link className="text-decoration-none text-dark text-capitalize" to={detailPath}><span className="text-capitalize">{pokemon.name}</span></Link>
                        </div>
                        <button
                            onClick={() => handleRemove(pokemon.id, pokemon.type)}
                            className="btn btn-sm btn-outline-danger ms-2"
                        >
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </li>)
            })}
        </>
    );
};