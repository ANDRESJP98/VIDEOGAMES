import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
const CardsContainer =()=>{
    const videogames = useSelector(state=>state.videogames)
    return (
        <div className={style.container}>
            {videogames.map((videogame)=>{
                return <Card
                id={videogame.id}
                name={videogame.name}
                background_image={videogame.background_image}
                description={videogame.description}
                genres={videogame.genres}
                platforms={videogame.platforms}
                rating={videogame.rating}
                released={videogame.released}
                />
            })}
        </div>
    )

}
export default CardsContainer;