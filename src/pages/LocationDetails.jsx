import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import PokeApi from "../services/PokeApi";

export const LocationDetails = () =>{

    const {store, dispatch} = useGlobalReducer();
    const {name} = useParams();

    useEffect(()=>{
        PokeApi.getSingleLocation(name).then(data=>dispatch({type: 'get_location_details', payload : data}));
    },[name]);

    return(
        <div className="container text-center text-capitalize mt-5 d-flex justify-content-center align-items-center">
            <div className="card myCardDescription">
                <h1 className="card-title mt-4">{store.detailsLocation?.names[1]?.name}</h1>
                <img src="https://www.svgrepo.com/show/276272/location-pokemon.svg" alt="" />
                <div className="card-body">
                    <h5 className="card-text text-center"> Region : {store.detailsLocation?.region.name}</h5>
                </div>
            </div>
        </div>
    )
}