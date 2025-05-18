//Aqui van todos los servicios que se pide a la API de pokemon
const PokeApi ={}

PokeApi.getAllPokemon = async () =>{
    try{
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon')
        if(!respuesta.ok) throw new Error ('Error en el servidor')
        const data = await respuesta.json()
        return data
    }catch(error){
        console.log(error);
    }
}

PokeApi.getAllItems = async () =>{
    try {
        const respuesta = await fetch('https://pokeapi.co/api/v2/item')
        if(!respuesta.ok) throw new Error ('Error en el server')
        const data = await respuesta.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

PokeApi.getAllLocations = async () =>{
    try {
        const respuesta = await fetch('https://pokeapi.co/api/v2/location')
        if(!respuesta.ok) throw new Error ('Error en el server')
        const data = await respuesta.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

PokeApi.getSinglePokemon = async (id) =>{
    try{
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/'+id)
        if(!respuesta.ok) throw new Error ('Error en el servidor')
        const data = await respuesta.json()
        return data
    }catch(error){
        console.log(error);
    }
}

PokeApi.getSingleItem = async (name) =>{
    try {
        const respuesta = await fetch('https://pokeapi.co/api/v2/item/'+name)
        if(!respuesta.ok) throw new Error ('Error en el server')
        const data = await respuesta.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

PokeApi.getSingleLocation = async (name) =>{
    try {
        const respuesta = await fetch('https://pokeapi.co/api/v2/location/'+name)
        if(!respuesta.ok) throw new Error ('Error en el server')
        const data = await respuesta.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

export default PokeApi;
