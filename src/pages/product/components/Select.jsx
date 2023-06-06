import { useField } from 'formik'
// eslint-disable-next-line react/prop-types
export default function CustomSelect ({ ...props }) {
  const [field] = useField(props)
  return (
        <>
            <select className='rounded-lg  px-3 outline-none bg-primary text-soft_color'
                {...field}
                {...props}
            />

        </>
  )
}
