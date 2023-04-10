const {videogame}=require('../db');
const axios=require('axios');
const {API_KEY} = process.env;

const createVideogame = async (name, description, platforms, 
    background_image, released, rating)=>
        await videogame.create({name, description, platforms, 
            background_image, released, rating});

const getVideogamesApi = async ()=>{
try {
    const infoApi =await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=100`);
    const allVideogames=infoApi.data.results;
    const infoApiId =allVideogames.map(elem => axios.get(`https://api.rawg.io/api/games/${elem.id}?key=${API_KEY}`));
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
    const dbVideogames= await videogame.findAll();
    return [...infoApiresponses, ...dbVideogames];
} catch (error) {
    console.error(error)
    return [];
}
}


const getVideogamesById = async (id, source)=>{
    try {
        const infoApi =await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=100`);
        const allVideogames=infoApi.data.results;
        const infoApiId =allVideogames.map(elem => axios.get(`https://api.rawg.io/api/games/${elem.id}?key=${API_KEY}`));
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
        const nuevaInfo=[...infoApiresponses].find(elem=>elem.id===id);
         if(source==="API"){
            return nuevaInfo
        }else return await videogame.findByPk(id);
        
    } catch (error) {
        console.error(error)
        return [];
    }
    }
const searchVideogameByName= async (name)=>{
    try {
        const infoApi =await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=100`);
        const allVideogames=infoApi.data.results;
        const infoApiId =allVideogames.map(elem => axios.get(`https://api.rawg.io/api/games/${elem.id}?key=${API_KEY}`));
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
        const dbVideogames= await videogame.findAll();
        const total =[...infoApiresponses, ...dbVideogames]
        return total.filter(game=>game.name===name);
    } catch (error) {
        console.error(error)
        return [];
    }
    };

module.exports ={ getVideogamesApi, createVideogame, getVideogamesById, searchVideogameByName };