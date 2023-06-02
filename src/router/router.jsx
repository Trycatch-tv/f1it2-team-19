import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../layout/Layout'
// import Login from '../pages/login/Login'
// import Home from '../pages/home/home'
// import Producto from '../pages/productos/Producto'
// import NuevoProducto from '../pages/productos/NuevoProducto'
// import ProductoID from '../pages/productos/ProductoID'
// import EditarProducto from '../pages/productos/EditarProducto'
// import Inventario from '../pages/inventario/Inventario'
// import NuevoInventario from '../pages/inventario/NuevoInventario'
// import EditarInventario from '../pages/inventario/EditarInventario'
// import Usuario from '../pages/usuario/Usuario'
// import NuevoUsuario from '../pages/usuario/NuevoUsuario'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
{/*
      <Route path="/" element={ <Login/>}/>

      <Route path='/loginy' element={<Login />} />

      <Route path="/home" element={ <Home/>}/>

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
