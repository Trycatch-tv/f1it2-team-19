import * as yup from 'yup'
export const advancedSchema = yup.object().shape({
  stock: yup
    .number()
    .positive()
    .integer()
    .required('Required'),
  stockminimo: yup
    .number()
    .positive()
    .integer()
    .required('Required'),
  preciounitario: yup
    .number()
    .positive()
    .required('Required'),
  costounitario: yup
    .number()
    .positive()
    .required('Required'),
  descuento: yup
    .number()
    .positive()
    .required('Required'),
  /// ////////////////////////////
  name: yup
    .string()
    .min(3, 'Minimo 3 caracteres')
    .required('Required'),
  modelo: yup
    .string()
    .min(3, 'Minimo 3 caracteres')
    .required('Required'),
  memoria: yup
    .string()
    .oneOf(['32GB', '64GB', '128GB', '256GB'], 'Opcion Invalida')
    .required('Required'),
  procesador: yup
    .string()
    .oneOf(['Qualcom', 'Mediateck', 'Exynos', 'A1'], 'Opcion Invalida')
    .required('Required'),
  sistema: yup
    .string()
    .oneOf(['Android', 'HarmonyOS', 'Ios'], 'Opcion Invalida')
    .required('Required'),
  pantalla: yup
    .string()
    .oneOf(['5.0"', '5.5"', '6.0"', '6.3"'], 'Opcion Invalida')
    .required('Required'),
  gama: yup
    .string()
    .oneOf(['Baja', 'Media', 'Alta', 'Premiun'], 'Opcion Invalida')
    .required('Required'),
  marca: yup
    .string()
    .oneOf(['Motorola', 'Samsung', 'Iphone', 'Xiaomi'], 'Opcion Invalida')
    .required('Required')

  // acceptedTos: yup
  //   .boolean()
  //   .oneOf([true], 'Please accept the terms of service')
})
