import { useState } from 'react'
import Listado from './components/Listado'
import Buscador from './components/Buscador'
import Crear from './components/Crear'


function App() {

  const [listadoState, setListadoState] = useState([]);

  return (
    <>
      <div className="layout">
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>

          <h1>MisPelis</h1>
        </header>

        <nav className="nav">
          <ul>
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Peliculas</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">Contacto</a></li>
          </ul>
        </nav>

        {/* Listado de peliculas */}
        <section id="content" className="content">
          <Listado
            listadoState={listadoState}
            setListadoState={setListadoState}
          />
        </section>

        <aside className="lateral">
          <Buscador 
            listadoState={listadoState}
            setListadoState={setListadoState}
          />

          <Crear 
            setListadoState={setListadoState}
          />
        </aside>

        <footer className="footer">
          &copy; Cesar Casanova - <a href="https://casanovacesar.com">casanovacesar.com</a>
        </footer>

      </div>
    </>
  )
}

export default App
