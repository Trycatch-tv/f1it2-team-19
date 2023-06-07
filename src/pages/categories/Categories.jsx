import ItemCard from './components/ItemCard'

export default function Categories () {
  return (
    <section className="w-full min-h-screen grid place-items-center">
      <div className='w-10/12 h-auto py-6 border-2 border-border_color rounded-lg2 flex justify-center gap-20 flex-wrap'>
        <ItemCard
          title='Gama'
          idItem='1'
          titleItem='media'
        />

        <ItemCard
          title='Marca'
          idItem='1'
          titleItem='Motorola'
        />

        <ItemCard
          title='Procesador'
          idItem='1'
          titleItem='Qualcom'
        />
        <ItemCard
          title='Memoria'
          idItem='1'
          titleItem='128GB'
        />
        <ItemCard
          title='Sistema'
          idItem='1'
          titleItem='Android'
        />
        <ItemCard
          title='Pantalla'
          idItem='1'
          titleItem='6.3"'
        />
     </div>
    </section>
  )
}
