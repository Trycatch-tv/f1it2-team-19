/* eslint-disable react/no-unescaped-entities */
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
        htmlFor="Modelo">Modelo</label>
      <input className="w-full h-10 px-4 border border-border_color rounded-b-lg outline-none"
          type="text" />

      <label className="FormLabel"
        htmlFor="capacidad">Memoria:</label>
      <select className="FormSelect"
       id="capacidad" name="capacidad">
        <option value="32GB">32GB</option>
        <option value="64GB">64GB</option>
        <option value="128GB">128GB</option>
        <option value="256GB">256GB</option>
      </select>

      <label className="FormLabel"
        htmlFor="procesador">Procesador:</label>
      <select className="FormSelect" id="procesador" name="procesador">
        <option value="Snapdragon 665">Snapdragon 665</option>
        <option value="Snapdragon 855">Snapdragon 855</option>
        <option value="Exynos 990">Exynos 990</option>
        <option value="Apple A14 Bionic">Apple A14 Bionic</option>
      </select>

      <label className="FormLabel"
        htmlFor="sistema">Sistema Operativo:</label>
      <select className="FormSelect" id="sistema" name="sistema">
        <option value="Android">Android</option>
        <option value="iOS">iOS</option>
        <option value="Windows Phone">Windows Phone</option>
        <option value="BlackBerry OS">BlackBerry OS</option>
      </select>

      <label className="FormLabel"
        htmlFor="pantalla">Pantalla:</label>
      <select className="FormSelect" id="pantalla" name="pantalla">
        <option value="4.7">4,7"</option>
        <option value="5.5">5,5"</option>
        <option value="6.1">6,1"</option>
        <option value="6.7">6,7"</option>
      </select>

      <label className="FormLabel"
        htmlFor="marca">Marca:</label>
      <select className="FormSelect" id="marca" name="marca">
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="Huawei">Huawei</option>
        <option value="Xiaomi">Xiaomi</option>
      </select>

      <label className="FormLabel"
        htmlFor="gama">Gama:</label>
      <select className="FormSelect" id="gama" name="gama">
        <option value="Baja">Baja</option>
        <option value="Media">Media</option>
        <option value="Alta">Alta</option>
        <option value="Premium">Premium</option>
      </select>

      <Save/>
    </form>
  )
}
