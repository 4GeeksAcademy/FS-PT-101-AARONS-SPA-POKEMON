import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import PokeApi from "../services/PokeApi";
import { useParams } from "react-router-dom";

export const ItemsDetails = () =>{

    const {store, dispatch} = useGlobalReducer();
    const {name} = useParams();
    
    useEffect(()=>{
        PokeApi.getSingleItem(name).then(data=>dispatch({type: 'get_item_details', payload : data}));
    },[name]);

    return(
        <div className="container text-center text-capitalize mt-5 d-flex justify-content-center align-items-center">
            <div className="card myCardDescription">
                <h1 className="card-title mt-4">{store.detailsItem?.names[5]?.name}</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}.png`} alt="" />
                <div className="card-body">
                    <h5 className="card-text text-center">Category: {store.detailsItem?.category.name}</h5>
                    <h5 className="card-text text-center">Information: {store.detailsItem?.flavor_text_entries[0]?.text}</h5>
                </div>
            </div>
        </div>
    )
}