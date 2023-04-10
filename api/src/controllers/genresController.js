const axios=require('axios');
const {API_KEY} = process.env;
const {genre}=require('../db')

const getGenresApi= async (name)=>{
    try {
        const infoApi =await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const allGenres=infoApi.data.results;
        const infoApiId =allGenres.map(elem => axios.get(`https://api.rawg.io/api/genres/${elem.id}?key=${API_KEY}`));
        const infoApiAll =await axios.all(infoApiId);
        const infoApiresponses =infoApiAll.map(response=>{
            const {id, name}=response.data;
            return {
                id,
                name
            };
        });
        await genre.findAll({where:{name:name}})
        return infoApiresponses;
        
    } catch (error) {
        console.error(error)
        return [];
    }
    }
    module.exports = {getGenresApi};