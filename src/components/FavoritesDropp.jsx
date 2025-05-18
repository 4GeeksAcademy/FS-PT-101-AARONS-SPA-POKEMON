import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const FavoritesDropp = ({ store, dispatch }) => {
    const handleRemove = (id) => {
        dispatch({ type: 'remove_favorite', payload: id });
    };

    if (!store.favorites || store.favorites.length === 0) {
        return <li className="dropdown-item text-muted">No hay favoritos aún</li>;
    }
    return (
        <>
            {store.favorites.map((pokemon) => (
                <li key={pokemon.id} className="dropdown-item d-flex justify-content-between align-items-center">
                    <div>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} style={{ width: "40px", height: "40px", marginRight: "10px" }} alt="" />
                        <Link className="text-decoration-none text-dark text-capitalize" to={`/details/${pokemon.id}`}><span className="text-capitalize">{pokemon.name}</span></Link>
                    </div>
                    <button
                        onClick={() => handleRemove(pokemon.id)}
                        className="btn btn-sm btn-outline-danger ms-2"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </li>
            ))}
        </>
    )
}