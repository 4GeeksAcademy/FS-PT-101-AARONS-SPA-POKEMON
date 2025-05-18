import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import PokeApi from "../services/PokeApi";
import { ItemCard } from "../components/ItemCard";


export const ItemsList = () => {
    const { store, dispatch } = useGlobalReducer();
    useEffect(() => {
        PokeApi.getAllItems().then(data => dispatch({ type: 'get_all_items', payload: data }));
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                {store.items?.results?.map((el, i) => (
                    <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-5">
                        <ItemCard key={i} name={el.name} url={el.url} /> </div>))}
            </div>
        </div>
    )
}