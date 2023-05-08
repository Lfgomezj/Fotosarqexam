import React from 'react'
import Control from '../Control'

const proveedores = [{
    "empresa": "dinasty",
    "telefono": "3215626"
},
{
    "empresa": "ulala",
    "telefono": "3278956"
}
]

const Proveedores = () => {
  return (
    <main>
        <Control />
        <section>
        {
                proveedores.map((proveedor) =>(
                    <section>
                        <p>{proveedor.empresa}</p>
                        <p>{proveedor.telefono}</p>
                    </section>
                ))
            }
        </section>
    </main>
  )
}

export default Proveedores