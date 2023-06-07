/* eslint-disable react/no-unescaped-entities */
import { Form, Formik } from 'formik'
import { advancedSchema } from '../../../constants/validationscheme'
import Select from './Select'

export default function Filter () {
  return (

    <Formik

      initialValues={{
        modelo: '',
        memoria: '',
        procesador: '',
        sistema: '',
        pantalla: '',
        gama: '',
        marca: ''
      }}
      validationSchema={advancedSchema}

    >
      {(props) => (
        <Form className="w-full h-10 text-soft_color  flex justify-between">
          <h1 className='text-lg text-black font-medium'>Producto</h1>
          <div className='w-auto h-auto rounded-lg2 px-4 bg-primary flex items-center gap-4'>
            <Select name='marca'
              placeholder='Por Favor Seleccione Una Opcion'>
              <option value="">Marca</option>
              <option value='Motorola'>Motorola</option>
              <option value='Samsung'>Samsung</option>
              <option value='Iphone'>Iphone</option>
              <option value='Xiaomi'>Xiaomi</option>
            </Select>
            <Select name='memoria'
              placeholder='Por Favor Seleccione Una Opcion'>
              <option value="">Memoria</option>
              <option value='32GB'>32GB</option>
              <option value='64GB'>64GB</option>
              <option value='128GB'>128GB</option>
              <option value='256GB'>256GB</option>
            </Select>
            <Select name='sistema'
              placeholder='Por Favor Seleccione Una Opcion'>
              <option value="">Sistema</option>
              <option value='Android'>Android</option>
              <option value='Ios'>Ios</option>
              <option value='HarmonyOS'>HarmonyOS</option>
            </Select>
            <Select name='pantalla'
              placeholder='Por Favor Seleccione Una Opcion'>
              <option value="">Pantalla</option>
              <option value='5.0"'>5.0"</option>
              <option value='5.5"'>5.5"</option>
              <option value='6.0"'>6.0"</option>
              <option value='6.3"'>6.3"</option>
            </Select>
            <Select name='procesador'
              placeholder='Por Favor Seleccione Una Opcion'>
              <option value="">Procesador</option>
              <option value='Qualcom'>Qualcom</option>
              <option value='Mediateck'>Mediateck</option>
              <option value='Exynos'>Exynos</option>
              <option value='Apple A'>Apple A</option>
            </Select>
            <Select name='gama'
              placeholder='Por Favor Seleccione Una Opcion'>
              <option value="">Gama</option>
              <option value='Baja'>Baja</option>
              <option value='Media'>Media</option>
              <option value='Alta'>Alta</option>
              <option value='Premiun'>Premiun</option>
            </Select>
          </div>
          <button className='bg-primary rounded-lg2 h-10 w-28 flex items-center justify-center gap-4'>
            <img src="src/assets/ri_filter-3-line.png" alt="filter icon" />
            Filtrar
          </button>
        </Form>
      )}
    </Formik>

  )
}
