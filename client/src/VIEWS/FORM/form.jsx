import { useState } from "react";

const Form =()=>{
    const [form, setForm]=useState({
        name:"",
        background_image:"",
        description:"",
        genres:"",
        platforms:"",
        rating:"",
        released:""
    });
    const [error, setErrors]=useState({
        name:"",
        background_image:"",
        description:"",
        genres:"",
        platforms:"",
        rating:"",
        released:""
    });
    const changeHandler = (event)=>{
        const prop=event.target.name;
        const value =event.target.value;
        setForm({...form,[prop]:value})
    }
    const validate = (form)=>{

    };
    return (
        <div>
        <form>
            <div>
                <label>Nombre</label>
                <input type="text" value={form.name} onChange={changeHandler} name="name"/>
            </div>
            <div>
                <label>Imagen</label>
                <input type="text" value={form.background_image} onChange={changeHandler} name="background_image}"/>
            </div>
            <div>
                <label>Descripcion</label>
                <input type="text" value={form.description} onChange={changeHandler} name="description"/>
            </div>
            <div>
                <label>Genero</label>
                <input type="text" value={form.genres} onChange={changeHandler} name="genres"/>
            </div>
            <div>
                <label>Plataforma</label>
                <input type="text" value={form.platforms} onChange={changeHandler} name="platforms"/>
            </div>
            <div>
                <label>Rating</label>
                <input type="text" value={form.rating} onChange={changeHandler} name="rating"/>
            </div>
            <div>
                <label>fecha de lanzamiento</label>
                <input type="text" value={form.released} onChange={changeHandler} name="released"/>
            </div>


        </form>
        </div>
    )

}


export default Form;