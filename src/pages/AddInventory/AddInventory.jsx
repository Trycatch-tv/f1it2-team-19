import Input from './components/Input'
export default function AddInventory () {
  return (
    <section className="w-full h-[468px] max-w-7xl p-8 border-2 border-border_color rounded-lg flex justify-center items-center relative">
      <div className='w-4/5 h-auto flex flex-wrap gap-20 items-center'>
        <Input heading='Nombre' placeholder='Moto G8' />
        <Input heading='Stock' placeholder='20' />
        <Input heading='Stock Minimo' placeholder='5' />
        <Input heading='Precio Unit' placeholder='508' />
        <Input heading='Costo Unit' placeholder='308' />
        <Input heading='Descuento' placeholder='0%' />
     </div>
     <div className='absolute right-10 bottom-8'>
        <button className='bg-primary w-[220px] h-[38px] rounded-lg text-soft_color mt-2'>Guardar</button>
     </div>
    </section>
  )
}
