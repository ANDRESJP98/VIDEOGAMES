const {Videogame, Genre}=require('../db');
const axios=require('axios');
const {API_KEY} = process.env;

const createVideogame = async (name, description, platforms, 
    background_image, released, rating, created)=>
        await Videogame.create({name, description, platforms, 
            background_image, released, rating, created});

const getAllVideogames = async ()=>{
    const infoApi =await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=1`);
    const allVideogames=infoApi.data.results
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
    const infoApi2 =await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`);
    const allVideogames2=infoApi2.data.results
    const infoApiId2 =allVideogames2.map(elem => axios.get(`https://api.rawg.io/api/games/${elem.id}?key=${API_KEY}`));
    const infoApiAll2 =await axios.all(infoApiId2);
    const infoApiresponses2 =infoApiAll2.map(response=>{
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
    const dbVideogames= await Videogame.findAll({
        include:{
            model:Genre,
            attributes:['name'],
            through:{
                attributes:[],
            }
            }
        });
        const infoApi3 =await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3`);
        const allVideogames3=infoApi3.data.results
        const infoApiId3 =allVideogames3.map(elem => axios.get(`https://api.rawg.io/api/games/${elem.id}?key=${API_KEY}`));
        const infoApiAll3 =await axios.all(infoApiId3);
        const infoApiresponses3 =infoApiAll3.map(response=>{
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
        })
    return [...infoApiresponses, infoApiresponses2, infoApiresponses3,...dbVideogames];
}


module.exports ={ getAllVideogames, createVideogame};