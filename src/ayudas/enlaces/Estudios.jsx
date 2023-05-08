import React from 'react'
import Control from '../Control'

const estudios = [{
    "nombre": "fotolandia",
    "direccion": "cl 24 # 13-67"
},
{
    "nombre": "fotoestudio",
    "direccion": "cl 45 # 15-67"
}
]

const Estudios = () => {
  return (
    <main>
        <Control />
        <section>
        {
                estudios.map((estudio) =>(
                    <section>
                        <p>{estudio.nombre}</p>
                        <p>{estudio.direccion}</p>
                    </section>
                ))
            }
        </section>
    </main>
  )
}

export default Estudios