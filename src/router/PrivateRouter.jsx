import { Navigate } from 'react-router-dom'
import DashboardLayout from '../layout/DashboardLayout'

const PrivateRoute = () => {
  const auth = { nombre: 'juan' }

  const value = Object.entries(auth).length !== 0
  return (
    <>
    {value
      ? <DashboardLayout />
      : <Navigate to='/login' />}
  </>
  )
}

export default PrivateRoute
