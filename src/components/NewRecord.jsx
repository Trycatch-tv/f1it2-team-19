import { images } from '../constants'
export default function NewRecord () {
  return (
    <button className="w-[186px] h-10 bg-primary text-soft_color rounded-lg2 flex gap-4 items-center justify-center">
      <img src={images.addicon} alt="Boton Agregar" />
      Nuevo Registro
    </button>
  )
}
