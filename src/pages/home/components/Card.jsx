// eslint-disable-next-line react/prop-types
export default function Card ({ title, img }) {
  return (
    <div className="w-[200px] h-[87px] bg-primary text-soft_color p-3 text-lg rounded-lg2">
      <h3 >{title}</h3>
      <section className="flex justify-between mt-2">
        <img src={`src/assets/${img}.png`} alt="icono seccion" />
        <button><img src="src/assets/ri_arrow-right-double-line.png" alt="boton ir a pagina" /></button>
      </section>
    </div>
  )
}
