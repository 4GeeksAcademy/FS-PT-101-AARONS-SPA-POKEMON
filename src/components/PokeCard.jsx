import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const PokemonCard = ({ name, url }) => {
    const {store, dispatch} = useGlobalReducer();

    const pid = url.split('/')[6];

    const isFavorite = store.favorites.some(p=>p.id === pid);

    const handleToggleFavorite = () => {
        if(isFavorite){
            dispatch({type: 'remove_favorite', payload: pid});
        }else{
            dispatch({type: 'add_favorite', payload: {id: pid, name: name}});
        }
    }

    return (
        <div className="pokemon-contenedor">
            <div className="card text-capitalize">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pid}.png`} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title text-center fs-2">{name}</h5>
                    <div className="mt-3 text-center d-flex justify-content-around">
                        <Link className="btn btn-primary" to={'/details/'+pid}>Read more</Link>
                        <button onClick={handleToggleFavorite} className={`btn ms-2 ${isFavorite ? 'btn-warning' : 'btn-secondary'}`}><i class="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}