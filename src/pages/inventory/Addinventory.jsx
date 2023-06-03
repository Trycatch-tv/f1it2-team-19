import Save from '../../components/Save'
import { useFormik } from 'formik'
import Input from './components/Input'
import { basicSchema } from '../../constants/validationscheme'
const onSubmit = (values, actions) => {
  console.log('enviado')
  actions.resetForm()
}
export default function Addinventory () {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      nombre: '',
      stock: '',
      stockminimo: '',
      preciounitario: '',
      costounitario: '',
      descuento: ''

    },
    validationSchema: basicSchema,
    onSubmit
  })
  console.log(errors)

  return (
    <section className="my-10 min-h-screen grid place-items-center">
      <form className="w-[500px] h-auto rounded-lg2 border border-border_color p-4 flex flex-col gap-4"
        onSubmit={handleSubmit}>
        <Input
          style={errors.nombre && touched.nombre ? 'border-2 border-red-600' : ''}
          placeholder='MotoG50'
          label='Nombre'
          id='nombre'
          value={values.nombre}
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.nombre && touched.nombre && <p className='text-red-600 text-xs -mt-3' >Ingrese Nombre</p>}
        <Input
          style={errors.stock && touched.stock ? 'border-2 border-red-600' : ''}
          placeholder='20'
          label='Stock'
          id='stock'
          value={values.stock}
          onChange={handleChange}
          onBlur={handleBlur}/>
        {errors.stock && touched.stock && <p className='text-red-600 text-xs -mt-3' >Ingrese Cantidad</p>}
        <Input
          style={errors.stockminimo && touched.stockminimo ? 'border-2 border-red-600' : ''}
          placeholder='3'
          label='Stock Minimo'
          id='stockminimo'
          value={values.stockminimo}
          onChange={handleChange}
          onBlur={handleBlur}/>
        {errors.stockminimo && touched.stockminimo && <p className='text-red-600 text-xs -mt-3' >Ingrese Cantidad Minima</p>}
        <Input
          style={errors.preciounitario && touched.preciounitario ? 'border-2 border-red-600' : ''}
          placeholder='508$'
          label='Precio Unitario'
          id='preciounitario'
          value={values.preciounitario}
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.preciounitario && touched.preciounitario && <p className='text-red-600 text-xs -mt-3' >Ingrese Precio</p>}
        <Input
          style={errors.costounitario && touched.costounitario ? 'border-2 border-red-600' : ''}
          placeholder='302$'
          label='Costo Unitario'
          id='costounitario'
          value={values.costounitario}
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.costounitario && touched.costounitario && <p className='text-red-600 text-xs -mt-3' >Ingrese Costo</p>}
        <Input
          style={errors.descuento && touched.descuento ? 'border-2 border-red-600' : ''}
          placeholder='5%'
          label='Descuento'
          id='descuento'
          value={values.descuento}
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.descuento && touched.descuento && <p className='text-red-600 text-xs -mt-3' >Ingrese Descuento</p>}
        <Save />
      </form>

   </section>
  )
}
