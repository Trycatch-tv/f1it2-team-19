/* eslint-disable react/prop-types */
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
          <button><img src="src/assets/ri_delete-bin-2-line.png" alt="Delete option" /></button>
          <button><img src="src/assets/Vector.png" alt="Edit option" /></button>
        </div>
      </ul>
    </article>
  )
}
