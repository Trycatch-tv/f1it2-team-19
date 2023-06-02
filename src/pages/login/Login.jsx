import { useState } from 'react'
import Input from './components/Input'

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const login = (email, password) => {
    if (email === 'hola@gmail.com' && password === '123456') {
      setError('border-green-600')
    } else {
      setError('border-red-600')
    }
  }
  return (
    <section className="w-screeem min-h-screen grid place-content-center bg-backgroud">
      <form className='w-[364px] h-[326px] py-16 bg-soft_color border-2 border-border_color rounded-lg2 flex flex-col gap-5 items-center'
       action=""
       onSubmit={e => {
         e.preventDefault()
         login(email, password)
       }}
       >
        <label className="text-lg font-medium uppercase ">Iniciar Sesión</label>
        <Input placeholder='Correo electronico'
          img='ri_user-2-line'
          imgStyle='hidden'
          inputStyle={error}
          type='text'
          name='email'
          value={email}
          onchange={e => setEmail(e.target.value)}/>
        <Input placeholder='Contraseña'
          img='ri_lock-password-line'
          type='password'
          inputStyle={error}
          name='password'
          value={password}
          onchange={e => setPassword(e.target.value)} />
        <button className="w-[300px] py-2 uppercase bg-primary rounded-lg2 text-soft_color font-light text-sm"
          type='submit'>Iniciar Sesión</button>
     </form>
    </section>

  )
}
