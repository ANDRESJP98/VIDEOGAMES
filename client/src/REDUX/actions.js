import axios from 'axios';
const {API_KEY} = process.env;

export const GET_VIDEOGAMES ="GET_VIDEOGAMES";

export const getVideogames=()=>{
    return async function (dispatch){
        const infoApi =await axios.get(`https://api.rawg.io/api/games?key=b3be65e7205e49e8946934e7e1953920&page_size=100`);
    const allVideogames=infoApi.data.results;
    const infoApiId =allVideogames.map(elem => axios.get(`https://api.rawg.io/api/games/${elem.id}?key=b3be65e7205e49e8946934e7e1953920`));
    const infoApiAll =await axios.all(infoApiId);
    const infoApiresponses =infoApiAll.map(response=>{
        const {id, name, description, background_image, rating, released}=response.data;
        const platforms = (response.data.platforms?.map(platform=>platform.platform.name)).join(", ");
        const genres = (response.data.genres?.map(genre=>genre.name)).join(", ");
        return {
            id,
            name, 
            background_image, 
            description:description.replaceAll(/<[^>]+>/g, " "),
            genres:genres,
            platforms:platforms,
            rating,
            released
        };
    });
    dispatch({type:GET_VIDEOGAMES, payload:infoApiresponses});
    }
}