import Item from './components/Item'
import NewRecord from '../../components/NewRecord'
import Filter from './components/Filter'
export default function Product () {
  return (
    <div className='w-full min-h-screen my-20 px-[5%] flex flex-col  items-center gap-7'>
      <Filter />
      <section className="w-full h-[468px] max-w-7xl  p-8 border-2 border-border_color rounded-lg2 flex flex-col gap-6 relative">
        <div className="w-full h-11 bg-primary text-soft_color uppercase rounded-lg2 flex items-center justify-center" >
          <ul className="flex gap-10">
            <li>Ean-13</li>
            <li>nombre</li>
            <li>marca</li>
            <li>sistema</li>
            <li>pantalla</li>
            <li>memoria</li>
            <li>procesador</li>
            <li>gama</li>
            <li>acciones</li>
          </ul>
        </div>
        <Item
          code='7581188'
          nombre='Moto g8'
          marca='Motorola'
          sistema='Android 10'
          pantalla='6.3``'
          memoria='64GB'
          cpu='Snapdragon 665'
          gama='Media' />
        <Item
          code='7581188'
          nombre='Moto g8'
          marca='Motorola'
          sistema='Android 10'
          pantalla='6.3``'
          memoria='64GB'
          cpu='Snapdragon 665'
          gama='Media' />
        <Item
          code='7581188'
          nombre='Moto g8'
          marca='Motorola'
          sistema='Android 10'
          pantalla='6.3``'
          memoria='64GB'
          cpu='Snapdragon 665'
          gama='Media' />
        <Item
          code='7581188'
          nombre='Moto g8'
          marca='Motorola'
          sistema='Android 10'
          pantalla='6.3``'
          memoria='64GB'
          cpu='Snapdragon 665'
          gama='Media' />
        <Item
          code='7581188'
          nombre='Moto g8'
          marca='Motorola'
          sistema='Android 10'
          pantalla='6.3``'
          memoria='64GB'
          cpu='Snapdragon 665'
          gama='Media' />
        <div className='absolute -bottom-16 right-0'>
          <NewRecord route='/product/new-product' />
        </div>

      </section>
    </div>
  )
}
