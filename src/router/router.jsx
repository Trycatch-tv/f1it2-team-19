import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../layout/Layout'
import PublicRouter from './publicRouter'
import Login from '../pages/login/Login'
import PrivateRouter from './privateRouter'
import Home from '../pages/home/home'
import Product from '../pages/Product/Product'
import Addproduct from '../pages/product/Addproduct'
import ProductoID from '../pages/product/ProductID'
import Editproduct from '../pages/product/Editproduct'
import Inventory from '../pages/inventory/Inventory'
import Addinventory from '../pages/inventory/Addinventory'
import Editinventory from '../pages/inventory/Editinventory'
import User from '../pages/user/User'
import Newuser from '../pages/user/Newuser'
import Edituser from '../pages/user/Edituser'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>

      <Route path='/login' element={<PublicRouter />}>
        <Route
          index
          element={<Login />}
        />
      </Route>

      <Route path='/' element={<PrivateRouter />} >
        {/* home */}
        <Route index element={<Home />} />

        {/* Producto */}
        <Route path='/product' element={<Product />} />
        <Route path='/product/new-product' element={<Addproduct />} />
        <Route path='/product/edit/:id' element={<Editproduct />} />
        <Route path='/product/:id' element={<ProductoID />} />

        {/* Inventory */}
        <Route path='/inventory'element={<Inventory />} />
        <Route path='/inventory/new-inventory'element={<Addinventory />} />
        <Route path='/inventory/edit/:id' element={<Editinventory/>} />

        {/* User */}
        <Route path='/user' element={<User />} />
        <Route path='/user/new-usuario' element={<Newuser />} />
        <Route path='/user/edit/:id' element={<Edituser />} />
      </Route>
    </Route>
  )
)
