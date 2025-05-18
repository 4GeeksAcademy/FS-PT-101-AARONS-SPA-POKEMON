export const initialStore=()=>{
  return{
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_favorite':
      if(store.favorites.find(p => p.id === action.payload.id)) return store;
      return{
        ...store,
        favorites: [...store.favorites, action.payload]
      };
    case 'remove_favorite':
      return{
        ...store,
        favorites: store.favorites.filter(p=>p.id !== action.payload)
      };
    case 'get_pokemon_details':
      return{
        ...store,
        details: action.payload
      };
    case 'get_item_details' :
      return{
        ...store,
        detailsItem: action.payload
      };
    case 'get_location_details' :
      return{
        ...store,
        detailsLocation: action.payload
      };
    case 'get_all_pokemon':
      return{
        ...store,
        pokemons: action.payload
      };
    case 'get_all_items':
      return{
        ...store,
        items: action.payload
      };
    case 'get_all_locations':
      return{
        ...store,
        locations: action.payload
      };
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
