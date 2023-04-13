const axios=require('axios');
const {API_KEY} = process.env;
const {Genre}=require('../db')

const getGenresApi= async ()=>{
    try {
        const infoApi =await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const allGenresApi=infoApi.data.results;
        const infoApiId =allGenresApi.map(elem => axios.get(`https://api.rawg.io/api/genres/${elem.id}?key=${API_KEY}`));
        const infoApiAll =await axios.all(infoApiId);
        const infoApiresponses =infoApiAll.map(response=>{
            const {name}=response.data;
            return {
                name
            };
        });
        console.log(infoApiresponses);

         infoApiresponses.forEach(elem=>{
            Genre.findOrCreate({
                where:{name:elem.name}
            })})

            const allGenres=await Genre.findAll();
            return allGenres
    } catch (error) {
        console.error(error)
        return [];
    }
    }
    module.exports = {getGenresApi};