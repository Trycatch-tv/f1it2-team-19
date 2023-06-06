/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { images } from '../../../constants'
export default function Item ({ code, nombre, marca, sistema, pantalla, memoria, cpu, gama }) {
  return (
    <article className='w-full h-11 bg-soft_color text-black uppercase rounded-lg2 border border-border_color flex items-center justify-center'>
      <ul className="flex gap-11">
        <li>{code}</li>
        <li>{nombre}</li>
        <li>{marca}</li>
        <li>{sistema}</li>
        <li>{pantalla}</li>
        <li>{memoria}</li>
        <li>{cpu}</li>
        <li>{gama}</li>
        <div className="flex gap-4 items-center">
          <button><img src={images.deleticon} alt="Delete option" /></button>
          <Link to='/product/edit/:id'>
            <button><img src={images.editicon} alt="Edit option" /></button>
          </Link>
        </div>
      </ul>
    </article>
  )
}
