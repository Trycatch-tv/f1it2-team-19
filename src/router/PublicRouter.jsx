import { Navigate } from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'

const PublicRouter = () => {
  const auth = {
    // dev: 'code'
  }

  const value = Object.entries(auth).length === 0
  return (
    <>
    {value
      ? <AuthLayout />
      : <Navigate to='/' />}
  </>
  )
}
export default PublicRouter
