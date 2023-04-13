const initialState={
    videogames:[],
    allVideogames:[],
    genres:[]
};

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case "GET_VIDEOGAMES":
            return {...state, 
                videogames:action.payload, 
                allVideogames:action.payload };
        case "GET_NAME_VIDEOGAMES": 
        return{...state,
            videogames:action.payload};
        case "GET_GENRES":
        return {...state,
            genres:action.payload}
        case "POST_VIDEOGAMES":
            return {
                ...state
            }
        case "ORDER_BY_NAME":
            const sortedArr=action.payload==="asc" ?
            state.videogames.sort(function(a,b){
                if(a.name>b.name){
                    return 1;
                }
                if(b.name>a.name){
                    return -1;
                } return 0;
            }) :
            state.videogames.sort(function(a,b){
                if(a.name>b.name){
                    return -1;
                }
                if(b.name>a.name){
                    return 1;
                }
            })
            return{
                ...state,
                videogames:sortedArr
            };
        case "FILTER_BY_STATUS":
            const allVideogames=state.allVideogames
            const statusFiltered=action.payload === 'All' ? allVideogames : allVideogames.filter(elem=>elem.genres === action.payload);
            return {
                ...state, 
                videogames:statusFiltered };
        case "FILTER_CREATED":
            const allVideogamesc=state.allVideogames
            const createdFiltered=action.payload==='created' ? allVideogamesc.filter(elem=>elem.created) : allVideogamesc.filter(elem=>!elem.created);
            return {...state,
            videogames:action.payload==='All' ? state.allVideogames : createdFiltered };
        default:
            return {...state};
    }
}
export default rootReducer
