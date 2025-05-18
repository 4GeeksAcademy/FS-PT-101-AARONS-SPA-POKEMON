import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import PokeApi from "../services/PokeApi";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Details = () => {
    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();

    useEffect(() => {
        PokeApi.getSinglePokemon(id).then(data => dispatch({ type: 'get_pokemon_details', payload: data }))
    }, [id]);

    return (
        <div className="container text-center text-capitalize mt-5 d-flex justify-content-center align-items-center">
            <div className="card myCardDescription">
                <h1 className="card-title mt-4">{store.details?.name}</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="" />
                <div className="card-body">
                    <h5 className="card-text text-center">Weight: {store.details?.weight}</h5>
                    <h5 className="card-text text-center">Height: {store.details?.height}</h5>
                    <h5 className="card-text text-center">Types: {store.details?.types[0].type.name}, {store.details?.types[1]?.type.name}</h5>
                    <h5 className="card-text text-center">Moves: {store.details?.moves[0].move.name}, {store.details?.moves[1].move.name}, {store.details?.moves[2].move.name}</h5>
                </div>
            </div>
        </div>
    )
}