import style from "./Card.module.css";
const Card =(props)=>{
    return (
        <div className={style.card}
        >
            <p>{props.name}</p>
            <img src={props.background_image} alt="img not found"
            width="250px" height="250px"/>
            <p>{props.genres}</p>
        </div>
    )

}
export default Card;