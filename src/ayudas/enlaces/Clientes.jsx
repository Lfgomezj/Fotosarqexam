import React from 'react'
import Control from '../Control'

const clientes = [{
    "nombre": "luisa",
    "telefono": 13142142132
},
{
    "nombre": "yeris",
    "telefono": 54252353275
}]

const Clientes = () => {
  return (
    <main>
        <Control />
        <section>
            {
                clientes.map((cliente) =>(
                    <section>
                        <p>{cliente.nombre}</p>
                        <p>{cliente.telefono}</p>
                    </section>
                ))
            }
            
        </section>
    </main>
  )
}

export default Clientes