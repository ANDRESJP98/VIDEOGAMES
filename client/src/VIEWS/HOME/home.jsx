import React, { useEffect } from "react";
import CardsContainer from "../../COMPONENTS/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../REDUX/actions";

const Home =()=>{
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(getVideogames());
    },[])
    return (
        <div>
        <h1>Hola soy Home</h1>
        <CardsContainer/>
        </div>
    )

}


export default Home;
