const { createVideogame}=require('../controllers/videogamesController');

const getVideogamesHandler =(req,res)=>{
    
res.send('hola llego videogames')
}
const getVideogamesIdHandler =(req,res)=>{
    const {id}=req.params
    res.send('hola llego videogames')
}
const createVideogamesHandler=async (req,res)=>{
    try {
        const {name, description, platforms, 
            background_image, released, rating}=req.body;
        const newVideogame = await createVideogame(name, description, platforms, 
            background_image, released, rating);
            res.status(201).json(newVideogame);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}
module.exports={getVideogamesHandler, getVideogamesIdHandler, 
    createVideogamesHandler}