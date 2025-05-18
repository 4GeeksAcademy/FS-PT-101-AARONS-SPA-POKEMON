import React from "react";
import { Link } from "react-router-dom";

export const LocationsCard = ({ name, url }) => {
    const pid = url.split('/')[6];
    return (
        <div className="pokemon-contenedor">
            <div className="card">
                <img src="https://www.svgrepo.com/show/276272/location-pokemon.svg" className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <div className="text-center">
                        <Link className="btn btn-primary" to={'/detailsLocation/' + name}>Read more</Link>
                        <button className="btn btn-secondary">Add Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    )
}