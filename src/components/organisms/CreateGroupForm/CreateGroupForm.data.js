import * as Yup from 'yup';

//function to manage the initial values of the form to create groups
export function initialValues() {
    return {
        name: '',
        description: '',
        imageUrl: '',
    };
}

export function validationSchema() {
    return Yup.object({
        name: Yup.string()
            .required('El nombre es requerido'),
        description: Yup.string()
            .required('La descripción es requerida'),
        imageUrl: Yup.string()
            .required('La imagen es requerida'),
    });
}
