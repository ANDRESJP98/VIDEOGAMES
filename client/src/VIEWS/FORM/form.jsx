import React, { useState, useEffect } from "react";
import { Link, useHistory} from "react-router-dom";
import { getGenres, postVideogames } from "../../REDUX/actions";
import { useDispatch, useSelector } from "react-redux";

const Form =()=>{
    const dispatch =useDispatch();
    const genres=useSelector(state=>state.genres);
    const [form, setForm]=useState({
        name:"",
        background_image:"",
        description:"",
        genre:[],
        platforms:"",
        rating:"",
        released:""
    });
    useEffect(()=>{
        dispatch(getGenres());
    },[])

    const handleChange= (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
        console.log(form)
    }
    const handleSelect=(e)=>{
        setForm({
            ...form,
            genre:[...form.genre,e.target.value]
        })

    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(postVideogames(form))
        alert("Personaje Creado")
        setForm({
            name:"",
        background_image:"",
        description:"",
        genre:[],
        platforms:"",
        rating:"",
        released:""
        })
    }
    return (
        <div>
            <Link to='/home'>
            <button>Back to home</button>
            </Link>
        <form>
            <div>
                <label>Name</label>
                <input type="text" value={form.name} onChange={handleChange} name="name"/>
            </div>
            <div>
                <label>Image</label>
                <input type="text" value={form.background_image} onChange={handleChange} name="background_image"/>
            </div>
            <div>
                <label>Description</label>
                <input type="text" value={form.description} onChange={handleChange} name="description"/>
            </div>
            <div>
                <label>Platforms</label>
                <input type="text" value={form.platforms} onChange={handleChange} name="platforms"/>
            </div>
            <div>
                <label>Rating</label>
                <input type="text" value={form.rating} onChange={handleChange} name="rating"/>
            </div>
            <div>
                <label>Released date</label>
                <input type="text" value={form.released} onChange={handleChange} name="released"/>
            </div>
            <div>
                <select onChange={(e)=>handleSelect(e)}> 
                    {genres.map((elem)=>{
                        <option value={elem.name}>{elem.name}</option>
                    })}
                </select>
            </div>
            <ul><li>{form.genre.map(el=>el+" ,")}</li></ul>
            <button type="submit">Submit</button>

        </form>
        </div>
    )

}


export default Form;