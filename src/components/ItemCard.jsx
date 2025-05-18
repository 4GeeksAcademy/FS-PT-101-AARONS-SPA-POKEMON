import React from "react";
import { Link } from "react-router-dom";

export const ItemCard = ({ name, url }) => {
    const pid = url.split('/')[6];
    return (
        <div className="pokemon-contenedor">
            <div className="card">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}.png`} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <div className="text-center">
                        <Link className="btn btn-primary" to={'/detailsItem/' + name}>Read more</Link>
                        <button className="btn btn-secondary">Add Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    )
}