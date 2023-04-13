import axios from 'axios';

export const getVideogames=()=>{
    return async function (dispatch){
        var json= await axios.get("http://localhost:3001/videogames");
        return dispatch
        ({type:"GET_VIDEOGAMES", 
        payload:json.data});
    }
}

export const getNameVideogames=(name)=>{
    return async function (dispatch){
        var json= await axios.get("http://localhost:3001/videogames?Name=" + name);
        return dispatch({
        type:"GET_NAME_VIDEOGAMES", 
        payload:json.data});
    }
}
export const getGenres=()=>{
    return async function (dispatch){
        var json= await axios.get("http://localhost:3001/genres");
        return dispatch({
        type:"GET_GENRES", 
        payload:json.data});
    }
}
export const postVideogames=(payload)=>{
    return async function (dispatch){
        var json= await axios.post("http://localhost:3001/videogames", payload);
        console.log(json)
        return json
    }
}
export const orderByName=(payload)=>{
    return {
        type:"ORDER_BY_NAME",
        payload
    }
};
export const filterByStatus=(payload)=>{
    console.log(payload);
return {
    type:'FILTER_BY_STATUS',
    payload
}
};
export const filterCreated=(payload)=>{
    console.log(payload);
    return {
        type:"FILTER_CREATED",
        payload
    }
    };