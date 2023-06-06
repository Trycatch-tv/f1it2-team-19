
import { Link } from 'react-router-dom'
import { images } from '../constants'
// eslint-disable-next-line react/prop-types
export default function NewRecord ({ route }) {
  return (
   <Link to={route}>
      <button className="w-[186px] h-10 bg-primary text-soft_color rounded-lg2 flex gap-4 items-center justify-center">
        <img src={images.addicon} alt="Boton Agregar" />
        Nuevo Registro
      </button>
   </Link>
  )
}
