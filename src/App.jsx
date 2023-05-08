import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Central from "./ayudas/enlaces/Central"
import Clientes from "./ayudas/enlaces/Clientes"
import Estudios from "./ayudas/enlaces/Estudios"
import Proveedores from "./ayudas/enlaces/Proveedores"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Central />,
    errorElement: <h2>404 not found</h2>
  },
  {
    path: '/clientes',
    element: <Clientes />,
    errorElement: <h2>404 not found</h2>
  },
  {
    path: '/estudios',
    element: <Estudios />,
    errorElement: <h2>404 not found</h2>
  },
  {
    path: '/proveedores',
    element: <Proveedores />,
    errorElement: <h2>404 not found</h2>
  }
]) 

function App() {

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
