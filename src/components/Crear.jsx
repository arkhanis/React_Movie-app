import React, { useState } from "react"
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

const Crear = ({setListadoState}) => {

    const tituloComponente = "Añadir Pelicula";

    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    });

    const { titulo, descripcion } = peliState;

    const conseguirDatosForm = (e) => {
        e.preventDefault();

        // Conseguir los datos del formulario:
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        // Crear objeto de la pelicula a guardar:
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }

        // Guardar estado
        setPeliState(peli);

        // Actualizar estado
        setListadoState(elementos => {
            return [ ...elementos, peli];
        })
        
        // Guardar en local storage
        GuardarEnStorage("pelis", peli);
        
    }

    

    return (
        <>
            <div className="add">
                <h3 className="title">{tituloComponente}</h3>

                <strong>
                    {(titulo && descripcion) && "Haz creado la pelicula: " + titulo}
                </strong>

                <form onSubmit={conseguirDatosForm}>
                    <input
                        type="text"
                        id="title"
                        name='titulo'
                        placeholder="Titulo"
                    />
                    <textarea
                        id="descripcion"
                        name='descripcion'
                        placeholder="Descripción"
                    >
                    </textarea>
                    <input
                        type="submit"
                        id="save"
                        value="Guardar"
                    />
                </form>
            </div>
        </>
    )
}

export default Crear