import React from "react";
import style from './Paginado.module.css'
const Paginacion =({videogamesPage, paginado, videogames})=>{
    const pageNumbers=[]
    for (let i=0; i<=Math.ceil(videogames/videogamesPage); i++){
        pageNumbers.push(i+1)
    }
    return (
        <div className={style.nav}>
        <nav>
            <ul className={style.ul} >
                {pageNumbers && pageNumbers.map(number=>(
                    <li className={style.li} key={number}>
                    <a className={style.a}onClick={()=>paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
        </div>
    )
    
}
export default Paginacion;