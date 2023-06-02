// eslint-disable-next-line react/prop-types
import Save from '../../../components/Save'
export default function Form () {
  return (
    <form className="w-[500px] h-auto rounded-lg2 border border-border_color p-4 flex flex-col gap-4"
      action="">
      <label className="FormLabel"
        htmlFor="Nombre" >Nombre</label>
      <input className="w-full h-10 px-4 border border-border_color rounded-b-lg outline-none"
        type="text" />

      <label className="FormLabel"
        htmlFor="Stock">Stock</label>
      <input className="w-full h-10 px-4 border border-border_color rounded-b-lg outline-none"
        type="text" />

      <label className="FormLabel"
        htmlFor="Stock Minimo">Stock Minimo</label>
      <input className="w-full h-10 px-4 border border-border_color rounded-b-lg outline-none"
        type="text" />
      <label className="FormLabel"
        htmlFor="Precio Unitario">Precio Unitario</label>
      <input className="w-full h-10 px-4 border border-border_color rounded-b-lg outline-none"
        type="text" />

      <label className="FormLabel"
        htmlFor="Costo Unitario">Costo Unitario</label>
      <input className="w-full h-10 px-4 border border-border_color rounded-b-lg outline-none"
        type="text" />

      <label className="FormLabel"
        htmlFor="Descuento">Descuento</label>
      <input className="w-full h-10 px-4 border border-border_color rounded-b-lg outline-none"
        type="text" />
      <Save/>

    </form>
  )
}
