import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

const AuthLayout = () => {
  return (
    <main className='overflow-hidden max-h-screen w-full'>
      <Navbar/>
      <Outlet/>
    </main>
  )
}
export default AuthLayout
