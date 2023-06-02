import Input from './components/Input'
import Form from './components/Form'
export default function Addproduct () {
  return (
    <section className="w-full h-[468px] p-8 border-2 border-border_color rounded-lg2 flex">
      <div className="w-4/5 flex flex-wrap gap-20">
        <Input heading='Nombre' placeholder='Moto G8' />
        <Input heading='Modelo' placeholder='XT2830' />
        <Form heading='Memoria' value1='64BG' value2='120GB' value3='250GB' />
        <Form heading='Procesador' value1='Qualcom' value2='Mediatek' value3='Exynos' />
        <Form heading='Sistema' value1='Android' value2='IOS' value3='Other'/>
        <Form heading='Pantalla' value1='6.3``' value2='6.0``' value3='5.5``'/>
        <Form heading='Gama' value1='Baja' value2='Media' value3='Alta'/>
        <Form heading='Marca' value1='Motorola' value2='Samsung' value3='Iphone'/>
      </div>
      <div className='w-1/5 flex flex-col gap-20'>
        <form action="" className='w-[224px] h-auto border  border-border_color rounded-lg2 overflow-hidden bg-soft_color items-center flex flex-col gap-4'>
          <label htmlFor="" className='bg-primary w-full h-[38px] flex items-center justify-center text-soft_color out'>
            Descripción
          </label>
          <textarea className='outline-none px-2 w-[220px] h-[184px]' placeholder='Escribe una descripción breve' name="" id=""></textarea>
        </form>
        <button className='bg-primary w-[220px] h-[38px] rounded-lg2 text-soft_color mt-2'>Guardar</button>
      </div>
    </section>

  )
}
