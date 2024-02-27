import React from 'react'

const Editar = ({peli, conseguirPeliculas}) => {

    const titulo_componente = 'Editar';

    const guardarEdicion = (e, id) => {
        e.preventDefault();
        
        // Conseguir el target del evento
        let target = e.target;

        // Buscar el indice del objeto de la peli a actualizar
        const pelis_almacenadas = conseguirPeliculas();
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id)

        // Crear objeto con ese indice, titulo y desc.
        let peli = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        };

        console.log(indice, peli)
    }

    return (
        <div className='edit_form'>
            <h3 className='title'>{titulo_componente}: {peli.titulo}</h3>
            <div>
                <form onSubmit = { e => guardarEdicion(e, peli.id)} >
                    <input 
                        type="text" 
                        name='titulo'
                        className='titulo_editado'
                        defaultValue= {peli.titulo}
                    />
                    <textarea 
                        name="descripción"
                        defaultValue= {peli.descripcion} 
                        className='descripcion_editada'
                    />
                    <input 
                        type="submit"
                        className='editar'
                        value='Actualizar'
                    />
                </form>
            </div>
        </div>
    )
}

export default Editar