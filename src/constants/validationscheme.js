import * as yup from 'yup'

export const basicSchema = yup.object().shape({
  nombre: yup.string().required('Required'),
  stock: yup.number().positive().integer().required('Required'),
  stockminimo: yup.number().positive().integer().required('Required'),
  preciounitario: yup.number().positive().required('Required'),
  costounitario: yup.number().positive().required('Required'),
  descuento: yup.number().positive().required('Required')

})
