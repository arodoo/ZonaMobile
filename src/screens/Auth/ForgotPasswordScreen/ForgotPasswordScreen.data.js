import * as Yup from 'yup';

export function initialValues() {
    return {
        email: ""
    }
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string()
            .email('El correo no es válido')
            .required('El correo es requerido')
    })
}