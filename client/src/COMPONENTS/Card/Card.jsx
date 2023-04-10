import style from "./Card.module.css";
const Card =(props)=>{
    return (
        <div className={style.card}>
            <p>Nombre:{props.name}</p>
            <p>imagen:{props.background_image}</p>
            <p>Descripcion:{props.description}</p>
            <p>Generos:{props.genres}</p>
            <p>Plataformas:{props.platforms}</p>
            <p>Rating:{props.rating}</p>
            <p>Fecha de Lanzamiento:{props.released}</p>
        </div>
    )

}
export default Card;