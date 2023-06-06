/* eslint-disable react/no-unescaped-entities */
import CustomInput from '../../../components/CustomInput'
import Save from '../../../components/Save'
import { Form, Formik } from 'formik'
import { advancedSchema } from '../../../constants/validationscheme'
import CustomSelect from '../../../components/CustomSelect'
const onSubmit = async (values, actions, event) => {
  event.preventDefault()
  await new Promise((resolve) => setTimeout(resolve, 1000))
  actions.resetForm()
}
export default function form () {
  return (
    <Formik

      initialValues={{
        name: '',
        modelo: '',
        memoria: '',
        procesador: '',
        sistema: '',
        pantalla: '',
        gama: '',
        marca: ''
      }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
      >
      {(props) => (
        <Form className="w-[500px] h-auto rounded-lg2 border border-border_color p-4 flex flex-col gap-4"

        >
          <CustomInput
            label='Nombre'
            type="text"
            name="name"
            placeholder="Ingrese nombre"
          />
          <CustomInput
            label='Modelo'
            type="text"
            name="modelo"
            placeholder="Ingrese modelo"
          />
          <CustomSelect
            label='Memoria'
            name='memoria'
            placeholder='Por Favor Seleccione Una Opcion'>
            <option value="">Seleccione Una</option>
            <option value='32GB'>32GB</option>
            <option value='64GB'>64GB</option>
            <option value='128GB'>128GB</option>
            <option value='256GB'>256GB</option>
            </CustomSelect>
          <CustomSelect
            label='Procesador'
            name='procesador'
            placeholder='Por Favor Seleccione Una Opcion'>
            <option value="">Seleccione Una</option>
            <option value='Qualcom'>Qualcom</option>
            <option value='Mediateck'>Mediateck</option>
            <option value='Exynos'>Exynos</option>
            <option value='Apple A'>Apple A</option>
          </CustomSelect>
          <CustomSelect
            label='Sistema'
            name='sistema'
            placeholder='Por Favor Seleccione Una Opcion'>
            <option value="">Seleccione Una</option>
            <option value='Android'>Android</option>
            <option value='Ios'>Ios</option>
            <option value='HarmonyOS'>HarmonyOS</option>
          </CustomSelect>
          <CustomSelect
            label='Pantalla'
            name='pantalla'
            placeholder='Por Favor Seleccione Una Opcion'>
            <option value="">Seleccione Una</option>
            <option value='5.0"'>5.0"</option>
            <option value='5.5"'>5.5"</option>
            <option value='6.0"'>6.0"</option>
            <option value='6.3"'>6.3"</option>
          </CustomSelect>
          <CustomSelect
            label='Gama'
            name='gama'
            placeholder='Por Favor Seleccione Una Opcion'>
            <option value="">Seleccione Una</option>
            <option value='Baja'>Baja</option>
            <option value='Media'>Media</option>
            <option value='Alta'>Alta</option>
            <option value='Premiun'>Premiun</option>
          </CustomSelect>
          <CustomSelect
            label='Marca'
            name='marca'
            placeholder='Por Favor Seleccione Una Opcion'>
            <option value="">Seleccione Una</option>
            <option value='Motorola'>Motorola</option>
            <option value='Samsung'>Samsung</option>
            <option value='Iphone'>Iphone</option>
            <option value='Xiaomi'>Xiaomi</option>
          </CustomSelect>
          <Save />
        </Form>

      )}
    </Formik>
  )
}
