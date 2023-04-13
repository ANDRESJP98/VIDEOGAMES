import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, filterByStatus, filterCreated, orderByName } from "../../REDUX/actions";
import Paginacion from "../../COMPONENTS/Paginado/Paginado";
import Card from "../../COMPONENTS/Card/Card";
import {Link} from "react-router-dom";
import NavBar from "../../COMPONENTS/NavBar/NavBar";
import style from './home.module.css'; 

const Home =()=>{
    
    const dispatch =useDispatch();
    const videogames = useSelector(state=>state.videogames)
    const [order,setOrden]=useState('')
    const [currentPage, setCurrentPage]=useState(1)
    const [videogamesPage, setVideogamesPage]=useState(15)
    const indexOfLastVideogame=currentPage * videogamesPage
    const indexOfFirstVideogame=indexOfLastVideogame - videogamesPage
    const currentVideogames= videogames.slice(indexOfFirstVideogame, indexOfLastVideogame);
    const paginado =(pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    useEffect(()=>{
        dispatch(getVideogames());
    },[dispatch])

    const handleOnClick =(e)=>{
        e.preventDefault();
        dispatch(getVideogames())
    };
    const handleSort =(e)=>{
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }
    const handleFilterStatus=(e)=>{
        dispatch(filterByStatus(e.target.value))
    };
    const handleFilterCreated=(e)=>{
        dispatch(filterCreated(e.target.value))
    };
    return (
        <div className={style.container}>
        <NavBar ></NavBar>
        <div >
        <div >
        <h1>Videogames</h1>
        </div>
        <div>
            <Link to='/home'>
                <button onClick={e=>handleOnClick(e)}>Back to videogames</button>
            </Link>
        </div>
        <select onChange={e=>handleSort(e)}>
            <option value="asc" >A-Z</option>
            <option value="desc">Z-A</option>
        </select>
        <select >
            <option value='All'>TODOS</option>
            <option value="desc rating">+ Valorada</option>
            <option value="asc rating">- Valorada</option>
        </select>
        <select onChange={e=>handleFilterCreated(e)}>
            <option value='All'>TODOS</option>
            <option value="created">Creados</option>
            <option value="api">Existentes</option>
        </select>
        <select onChange={e=>handleFilterStatus(e)}>
            <option value='All'>TODOS</option>
            <option value='Action'>Action</option>
            <option value="Indie">Indie</option>
            <option value="Adventure">Adventure</option>
            <option value="RPG">RPG</option>
            <option value="Strategy">Strategy</option>
            <option value="Shooter">Shooter</option>
            <option value="Casual">Casual</option>
            <option value="Simulation">Simulation</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Arcade">Arcade</option>
            <option value="Platformer">Platformer</option>
            <option value="Racing">Racing</option>
            <option value="Massively Multiplayer">Massively Multiplayer</option>
            <option value="Sports">Sports</option>
            <option value="Fighting">Fighting</option>
            <option value="Family">Family</option>
            <option value="Board Games">Board Games</option>
            <option value="Educational">Educational</option>
            <option value="Card">Card</option>
        </select>
        <Paginacion videogamesPage={videogamesPage}
        videogames={videogames.length}
        paginado ={paginado} 
        />
            {currentVideogames?.map((videogame)=>{
                return (
                <div className={style.cardContainer}>
                <Link to={"/home/" + videogame.id}>
                <Card
                name={videogame.name}
                background_image={videogame.background_image}
                genres={videogame.genres}
                key={videogame.id}
                />
                </Link>
                </div>
                )
            })}
        </div>
        </div>
    )

}


export default Home;
