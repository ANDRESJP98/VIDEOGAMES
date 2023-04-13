const {getGenresApi}=require('../controllers/genresController')
const getGenresHandler = async(req,res)=>{
   
    const results =  await getGenresApi();
    res.status(200).send(results)
}
module.exports = {getGenresHandler};