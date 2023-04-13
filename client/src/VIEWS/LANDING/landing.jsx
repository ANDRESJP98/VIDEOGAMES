import React from "react";
import {Link} from 'react-router-dom';
import style from './landing.module.css';
const Landing =()=>{
    return (
        <div className={style.body}>
            <Link to='/home'> 
            <button className={style.button}>VIDEOGAMES</button>
            </Link>
       
        </div>
    )

}


export default Landing;