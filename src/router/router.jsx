import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={'estados globales'}>
      {/* raiz */}
      <Route path="/" element={ <Login/>}/>

      {/* ==================================== */}
      {/* Login */}
      <Route index element={<Login />} />

      {/* ==================================== */}
      {/* home */}
      <Route path="/home" element={ <Home/>}/>

      {/* ==================================== */}
      {/* Producto */}
      <Route path='/productos' element={<Productos />} >
        <Route
          path='crear-producto' // crear producto
          element={<NuevoProducto />}
        />
        <Route
          path=':id' // ver producto
          element={<ProyectoID />}
        />
        <Route
          path='editar/:id'
          element={<EditarProducto />}
        />
      </ Route>

        {/* ==================================== */}
        {/* inventario */}
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

      {/* ==================================== */}
      {/* Usuario */}
      <Route path='/usuario' element={<Usuario />} >
        <Route
          path='nuevo-usuario'
          element={<NuevoUsuario />}
        />
      </Route>
    </Route>
  )
)
