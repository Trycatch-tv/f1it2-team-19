import NewRecord from '../../components/NewRecord'
import Item from './components/Item'

const Inventory = () => {
  return (
    <section className='w-full min-h-screen my-10 px-[5%] flex flex-col items-center'>
        <h1 className='w-full font-medium text-lg uppercase mb-4'>Inventario</h1>
      <div className="w-full h-[468px] max-w-7xl  p-8 border-2 border-border_color rounded-lg2 flex flex-col gap-6 relative">
          <ul className="w-full h-11 bg-primary text-soft_color uppercase rounded-lg2  items-center justify-center flex gap-6">
            <li>ID</li>
            <li>Ean-13 code</li>
            <li>Nombre</li>
            <li>Stock</li>
            <li>Stock Min</li>
            <li>Costo Uni</li>
            <li>Precio Uni</li>
            <li>Descuento</li>
            <li>Acciones</li>
          </ul>
        <Item
          id='1'
          code='27478444111'
          nombre='motog8'
          stock='40'
          stockMinimo='5'
          costoUni='308'
          precioUni='508'
          descuento='0%'
        />
        <Item
          id='2'
          code='2789577517'
          nombre='motog9'
          stock='20'
          stockMinimo='5'
          costoUni='208'
          precioUni='308'
          descuento='0%'
        />

        <div className='absolute -bottom-16 right-0'>
          <NewRecord route='/inventory/new-inventory' />
        </div>

      </div>
    </section>
  )
}
export default Inventory
