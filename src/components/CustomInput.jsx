
import { useField } from 'formik'
// eslint-disable-next-line react/prop-types
export default function CustomInput ({ label, ...props }) {
  const [field, meta] = useField(props)
  return (
    <>
      <label className=' px-1 -mb-3'>{label}</label>
      <input className={`rounded-lg h-10 px-3 outline-none border-2 
         ${meta.touched && meta.error ? 'border-red-600' : 'border-primary'}`}
        {...field}
        {...props}
         />
        {meta.touched && meta.error && <p className='text-xs text-red-600 px-3 -mt-3'>{meta.error}</p>}
    </>
  )
}
