const { Router } = require('express');
const {getVideogamesHandler, getVideogamesIdHandler, 
    createVideogamesHandler} = require('../handlers/videogamesHandler')

const videogamesRouter=Router();

videogamesRouter.get('/', getVideogamesHandler);
videogamesRouter.get('/:id', getVideogamesIdHandler);
videogamesRouter.post('/', createVideogamesHandler);

module.exports=videogamesRouter;