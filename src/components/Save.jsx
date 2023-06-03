// eslint-disable-next-line react/prop-types
export default function Save ({ validar }) {
  // const handleClick = (event) => {
  //   event.preventDefault() // Aplicar preventDefault() para evitar el comportamiento predeterminado del botón
  //   validar() // Llamar a la función de validación
  // }
  return (
    <button className="w-full h-11 bg-primary text-soft_color uppercase rounded-lg2 mt-4"
      // onClick={handleClick}
      type="submit"
    >Guardar</button>
  )
}
