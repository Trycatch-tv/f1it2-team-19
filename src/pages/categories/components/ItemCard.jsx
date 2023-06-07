import Item from './Item'

// eslint-disable-next-line react/prop-types
export default function ItemCard ({ title, idItem, titleItem }) {
  return (
    <article className="w-56 h-auto flex flex-col gap-3">
      <h2>{title}</h2>
      <div className="border-2 border-border_color rounded-lg2 p-2 flex flex-col gap-3">
       <Item
        id={idItem}
        title={titleItem}
       />
        <Item
          id={idItem}
          title={titleItem}
        />
        <Item
          id={idItem}
          title={titleItem}
        />
      </div>
      <div className='w-full flex gap-4'>
        <input className='w-36 h-9 px-2 rounded-lg2 outline-none bg-soft_color border-2 border-border_color'
          type="text" />
        <button className='w-16 h-9 bg-primary rounded-lg2 grid place-content-center'>
          <img src="src/assets/ri_add-circle-line.png" alt="boton agregar" />
        </button>
      </div>
    </article>
  )
}
