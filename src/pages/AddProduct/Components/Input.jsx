// eslint-disable-next-line react/prop-types
export default function Input ({ heading, placeholder, inputStyle }) {
  return (
    <form action="" className='w-[224px] h-auto border  border-border_color rounded-lg2 overflow-hidden bg-soft_color items-center flex flex-col gap-4'>
      <label className='bg-primary w-full h-[38px] flex items-center justify-center text-soft_color'
        htmlFor="">{heading}</label>
      <input className={`w-full h-auto outline-none px-2 text-center -mt-2 ${inputStyle}`}
        placeholder={placeholder} type="text" />
    </form>
  )
}
