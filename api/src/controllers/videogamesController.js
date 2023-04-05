const {videogame}=require('../db')

const createVideogame = async (name, description, platforms, 
    background_image, released, rating)=>
        await videogame.create({name, description, platforms, 
            background_image, released, rating});

module.exports ={ createVideogame };