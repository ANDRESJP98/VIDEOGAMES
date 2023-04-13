const {getAllVideogames, createVideogame, getVideogamesById}=require('../controllers/videogamesController');
const {Genre}=require('../db');
const getVideogamesHandler =async (req,res)=>{
    const {name}=req.query;
    let videogamesTotal=await getAllVideogames();
    if(name){
    let videogamesName= await videogamesTotal.filter(elem=>elem.name.toLowerCase().includes(name.toLowerCase()))
    videogamesName.length?
    res.status(200).send(videogamesName) :
    res.status(404).send('No existe el videojuego');
}else {
    res.status(200).send(videogamesTotal)
}
}
const getVideogamesIdHandler = async (req,res)=>{
    const {id}=req.params;
    const videogames= await getAllVideogames();
    if(id){
        const videogameId= await videogames.filter(elem=>elem.id==id)
        videogameId.length?
        res.status(200).send(videogameId) :
        res.status(400).send('No existe el videojuego');
    }
}
const createVideogamesHandler= async (req,res)=>{
    try {
        const {name, description, platforms, 
            background_image, released, rating, created, genre}=req.body;
        const newVideogame = await createVideogame(name, description, platforms, 
            background_image, released, rating, created);
        const newGenre= await Genre.findAll({
            where:{name:genre}
        });
        newVideogame.addGenre(newGenre)
            res.status(201).send(newVideogame);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}
module.exports={getVideogamesHandler, getVideogamesIdHandler, 
    createVideogamesHandler}