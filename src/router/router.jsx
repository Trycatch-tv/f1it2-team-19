import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../layout/Layout'
import Login from '../pages/login/Login'
// import Producto from '../pages/productos/Producto'
import Home from '../pages/home/home'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>

      <Route path="/" element={ <Login/>}/>

      <Route index element={<Login />} />

      <Route path="/home" element={ <Home/>}/>

{/*
      <Route path='/productos' element={<Producto />} >
        <Route
          path='crear-producto'
          element={<NuevoProducto />}
        />
        <Route
          path=':id'
          element={<ProductoID />}
        />
        <Route
          path='editar/:id'
          element={<EditarProducto />}
        />
      </ Route>

      <Route path='/inventario'element={<Inventario />}>
        <Route
          path='nuevo-inventario'
          element={<NuevoInventario />}
        />
        <Route
          path='editar/:id'
          element={<EditarInventario/>}
        />
      </Route>

      <Route path='/usuario' element={<Usuario />} >
        <Route
          path='nuevo-usuario'
          element={<NuevoUsuario />}
        />
      </Route> */}
    </Route>
  )
)
