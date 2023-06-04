import Detail from './components/Details'
import Phone from './components/Phone'

// import { useState } from 'react'
// import { images } from '../../../constants'
export default function ProducId () {
  return (
    <section className="w-full h-screen flex justify-center items-center gap-8 ">
      <article className="h-auto w-2/5 flex flex-col items-center gap-3">
        <img className="w-full h-auto" src='/src/assets/Phone.svg' alt="phone illustration" />
        <Phone
          marca='Motorola'
          nombre='Moto G8'
        />
      </article>
      <article className="w-2/5 h-96  flex flex-col pl-32 gap-2">
        <Detail
          head='Procesador'
          body='Qualcom'
        />
        <Detail
          head='Capacidad'
          body='64GB'
        />
        <Detail
          head='Pantalla'
          body='6.3"'
        />
        <Detail
          head='Sistema'
          body='Android'
        />
        <Detail
          head='Modelo'
          body='XT2563'
        />
        <Detail
          head='Gama'
          body='Baja'
        />

      </article>

    </section>
  )
}
