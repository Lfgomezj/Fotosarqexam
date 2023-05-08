import React from 'react'
import { Link } from 'react-router-dom'

const Control = () => {
  return (
    <header>
        <nav>
            <Link to={'/'}>Pagina Central</Link>
            <Link to={'/Clientes'}>Clientes</Link>
            <Link to={'/Estudios'}>Estudios</Link>
            <Link to={'/Proveedores'}>Proveedores</Link>
        </nav>
    </header>
  )
}

export default Control