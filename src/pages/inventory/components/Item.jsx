/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { images } from '../../../constants'
export default function Item ({ id, code, nombre, stock, stockMinimo, costoUni, precioUni, descuento }) {
  return (

          <ul className=" w-full h-11 bg-soft_color text-black uppercase rounded-lg2 border border-border_color flex items-center justify-evenly pl-10 ">
                <li>{id}</li>
                <li>{code}</li>
                <li>{nombre}</li>
                <li>{stock}</li>
                <li>{stockMinimo}</li>
                <li>{costoUni}</li>
                <li>{precioUni}</li>
                <li>{descuento}</li>
                <div className="pl-10 flex gap-4 items-center">
                    <button><img src={images.deleticon} alt="Delete option" /></button>
                    <Link to=''>
                        <button><img src={images.editicon} alt="Edit option" /></button>
                    </Link>
                </div>
            </ul>

  )
}
