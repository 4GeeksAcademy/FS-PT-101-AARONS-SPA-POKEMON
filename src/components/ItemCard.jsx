import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const ItemCard = ({ name, url }) => {
    const {store, dispatch} = useGlobalReducer();
    const pid = url.split('/')[6];
    const isFavorite= store.favorites.some(p => p.id === pid && p.type === 'item');
    const handleToggleFavorite = () => {
        if(isFavorite){
            dispatch({type: 'remove_favorite', payload:{id: pid, type: 'item'}});
        }else{
            dispatch({type: 'add_favorite', payload: {id: pid, name: name, type : 'item'}});
        }
    }
    return (
        <div className="pokemon-contenedor">
            <div className="card">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}.png`} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <div className="text-center">
                        <Link className="btn btn-primary" to={'/detailsItem/' + name}>Read more</Link>
                        <button onClick={handleToggleFavorite} className={`btn ms-2 ${isFavorite ? 'btn-warning' : 'btn-secondary'}`}><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}