import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { getNameVideogames } from '../../REDUX/actions';
import style from './NavBar.module.css'

const NavBar =()=>{
    const dispatch=useDispatch();
    const [name, setName]=useState("")
    
    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameVideogames(name))
    }
    return (
        <div className={style.navbar}>
            <div >
            <input className={style.bar} type="text" placeholder='Search...' onChange={(e)=>handleInputChange(e)}></input>
            <button type="submit" onClick={(e)=>handleSubmit(e)} className={style.button}>Search</button>
            </div>
            <div className={style.links}>
            <Link to="/home"><button className={style.miBoton}>Home</button></Link>
            <Link to="/create"><button className={style.miBoton}>Add videogame</button></Link>
            </div>
        </div>
    )
}
export default NavBar;