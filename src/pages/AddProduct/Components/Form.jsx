// eslint-disable-next-line react/prop-types
export default function Form ({ heading, value1, value2, value3 }) {
  return (
    <form action="" className='w-[224px] h-20 border  border-border_color rounded-lg2 overflow-hidden bg-soft_color items-center flex flex-col gap-4'>
      <label className='bg-primary w-full h-1/2 flex items-center justify-center text-soft_color'
        htmlFor="">{heading}</label>
      <select className='bg-soft_color -mt-2 outline-none'
        name="memoria" id="">
        <option disabled selected>Selecionar</option>
        <option value="">{value1}</option>
        <option value="">{value2}</option>
        <option value="">{value3}</option>
      </select>
    </form>
  )
}
