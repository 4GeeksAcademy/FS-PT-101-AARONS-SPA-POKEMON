import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import PokeApi from "../services/PokeApi";
import { LocationsCard } from "../components/Locations";

export const LocationList = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        PokeApi.getAllLocations().then(data => dispatch({ type: 'get_all_locations', payload: data }));
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                {store.locations?.results?.map((el, i) => (
                    <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-5">
                        <LocationsCard key={i} name={el.name} url={el.url} /> </div>))}
            </div>
        </div>
    )
}