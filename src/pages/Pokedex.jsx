import React, { useEffect } from "react";
import PokeApi from "../services/PokeApi";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { PokemonCard } from "../components/PokeCard";

export const Pokedex = () => {
    const { store, dispatch } = useGlobalReducer();
    useEffect(() => {
        PokeApi.getAllPokemon().then(data => dispatch({ type: 'get_all_pokemon', payload: data }));
    }, [])
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                {store.pokemons?.results?.map((el, i) => (
                    <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-5">
                        <PokemonCard key={i} name={el.name} url={el.url} /> </div>))}
            </div>
        </div>
    )
}