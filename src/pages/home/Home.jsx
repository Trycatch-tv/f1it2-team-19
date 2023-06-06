import Card from './components/Card'
import Item from './components/Item'
export default function Home () {
  return (
    <section className="w-full min-h-screen py-5 flex flex-col justify-center items-center gap-14">
      <div className='flex flex-col gap-8'>
        <h2 className="uppercase font-medium text-lg text-black text-center" >agotados</h2>
        <article className="w-[629px] h-auto border-2 border-border_color rounded-lg2 bg-soft_color p-5 flex flex-col gap-4">
          <Item
            code='2851818'
            nombre='Moto g8'
            marca='Motorola'
            modelo='XT2563'
            stock='5'
          />
          <Item
            code='2851818'
            nombre='Moto g8'
            marca='Motorola'
            modelo='XT2563'
            stock='5'
          />
          <Item
            code='2851818'
            nombre='Moto g8'
            marca='Motorola'
            modelo='XT2563'
            stock='5'
          />

        </article>
      </div>
      <div className='flex flex-col gap-8'>
        <h2 className="uppercase font-medium text-lg text-black text-center " >gestionar</h2>
        <article className="w-[717px] h-[248px] border-2 border-border_color rounded-lg2 bg-soft_color p-5 flex justify-center items-center flex-wrap gap-8">
          <Card
            title='Productos'
            img='ri_stack-line'
            route='/product'
          />
          <Card
            title='Inventario'
            img='ri_file-chart-line'
            route='/inventory'
          />
          <Card
            title='Categorias'
            img='ri_list-indefinite'
            route=''
          />
          <Card
            title='Crear Producto'
            img='ri_add-circle-line'
            route='/product/new-product'
          />
          <Card
            title='Crear Inventario'
            img='ri_add-circle-line'
            route='/inventory/new-inventory'
          />
          <Card
            title='Registrar Usuarios'
            img='ri_admin-line'
            route='/user'
          />
        </article>
      </div>

    </section>
  )
}
