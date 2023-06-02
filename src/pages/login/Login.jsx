import Input from './components/Input'

export default function Login () {
  return (
    <section className="w-screeem min-h-screen grid place-content-center bg-backgroud">
     <div className="w-[364px] h-[326px] py-16 bg-soft_color border-2 border-border_color rounded-lg2 flex flex-col gap-5 items-center ">
      <h1 className="text-lg font-medium uppercase ">Iniciar Sesión</h1>
        <Input placeholder='Correo electronico' img='ri_user-2-line' imgStyle='hidden' type='text'/>
        <Input placeholder='Contraseña' img='ri_lock-password-line' type='password' />
      <button className="w-[300px] py-2 uppercase bg-primary rounded-lg2 text-soft_color font-light text-sm">Iniciar Sesión</button>
     </div>
    </section>
  )
}
