import React, { useEffect, useState } from 'react'

const Listado = () => {

    // Hooks
    const [listadoState, SetListadoState] = useState([]);

    useEffect(() => {
        console.log('Componente de listado de pelicula cargado!');
        conseguirPeliculas();
    }, []);

    // Funciones
    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"))
        SetListadoState(peliculas);
    }


    return (
        <>
            {/* primero verifico que el listado no este vacio y luego recorro */}
            {listadoState != null ? 
            
                    listadoState.map(peli => {
                        return (
                            <article key={peli.id} className="peli-item">
                                <h3 className="title">{peli.titulo}</h3>
                                <p className="description">{peli.descripcion}</p>

                                <button className="edit">Editar</button>
                                <button className="delete">Borrar</button>
                            </article>
                        );
                    })

                    :
                    <h2>No hay peliculas cargadas!</h2>
                }
        </>
    );

}

export default Listado