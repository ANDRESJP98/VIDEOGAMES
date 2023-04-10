const {getGenresApi}=require('../controllers/genresController')
const getGenresHandler = async(req,res)=>{
    const {name}=req.body
    const results =  await getGenresApi(name);
    res.status(200).json(results)
}
module.exports = {getGenresHandler};