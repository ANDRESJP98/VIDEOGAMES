const {getVideogamesApi, createVideogame, getVideogamesById, getAllVideogames, searchVideogameByName}=require('../controllers/videogamesController');

const getVideogamesHandler =async (req,res)=>{
    const {name}=req.query;
    const results = name? searchVideogameByName(name) : await getVideogamesApi();
    res.status(200).json(results)
}
const getVideogamesIdHandler = async (req,res)=>{
    const {id}=req.params;
    const source =isNaN(id)? "BDD" : "API";
    try {
        const videogames= await getVideogamesById(id, source)
        res.status(200).json(videogames)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
   
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