import { Form, Formik } from 'formik'
import CustomInput from '../../components/CustomInput'
import Save from '../../components/Save'
import { advancedSchema } from '../../constants/validationscheme'

const onSubmit = async (values, actions, event) => {
  event.preventDefault()
  await new Promise((resolve) => setTimeout(resolve, 1000))
  actions.resetForm()
}
export default function Addinventory () {
  return (
    <section className="my-10 min-h-screen grid place-items-center">
      <Formik
        initialValues={{
          name: '',
          stock: '',
          stockminimo: '',
          preciounitario: '',
          costounitario: '',
          descuento: ''
        }}
        validationSchema={advancedSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-[500px] h-auto rounded-lg2 border border-border_color p-4 flex flex-col gap-4"

          >

            <CustomInput
              label='Nombre'
              type="text"
              name="name"
              placeholder="Ingrese nombre"
            />
            <CustomInput
              label='Stock'
              type="number"
              name="stock"
              placeholder="Ingrese Stock"
            />
            <CustomInput
              label='Stock Minimo'
              type="number"
              name="stockminimo"
              placeholder="Ingrese Stock Minimo"
            />
            <CustomInput
              label='Precio Unitario'
              type="number"
              name="preciounitario"
              placeholder="Ingrese Precio"
            />
            <CustomInput
              label='Costo Unitario'
              type="number"
              name="costounitario"
              placeholder="Ingrese Costo"
            />
            <CustomInput
              label='Descuento'
              type="number"
              name="descuento"
              placeholder="Ingrese Descuento"
            />

            <Save />

          </Form>

        )}
      </Formik>
    </section>
  )
}
