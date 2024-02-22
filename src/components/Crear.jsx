import React, { useState } from "react"

const Crear = () => {

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
    
        guardarEnStorage(peli);
    }

    // Guardar en el almacenamiento local
    const guardarEnStorage = peli => {

        // Conseguir los elementos que ya tenemos en localStorage
        let elementos = JSON.parse(localStorage.getItem("pelis"));

        // Comprobar si es un array
        if(Array.isArray(elementos)){
            // Añadir dentro del array un elemento nuevo
            elementos.push(peli);
        
        } else {
            // Crear un array con la nueva peli
            elementos = [peli];
        }

        // Guardar en el localStorage
        localStorage.setItem("pelis", JSON.stringify(elementos));

        // Devolver objeto guardado
        return peli;

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