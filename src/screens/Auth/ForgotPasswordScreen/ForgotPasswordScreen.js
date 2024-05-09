import React from 'react'
import { View, ImageBackground } from 'react-native'
import { Button, Input, Icon, Text } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import Toast from 'react-native-toast-message'
import { ErrorMessage, useFormik } from 'formik'

import { initialValues, validationSchema } from './ForgotPasswordScreen.data'
import { screenName } from '../../../utilities'
import { styles } from './ForgotPasswordScreen.styles'

export function ForgotPasswordScreen() {
    const navigation = useNavigation();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const auth = getAuth()
                await sendPasswordResetEmail(auth, formValue.email)
                Toast.show({
                    type: 'success',
                    text1: 'Correo enviado',
                    text2: 'Revisa tu correo para restablecer tu contraseña',
                    visibilityTime: 3000,
                    autoHide: true,
                    topOffset: 30,
                    bottomOffset: 40,
                })
                navigation.navigate('Login')
            } catch (error) {
                Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: error.message,
                    visibilityTime: 3000,
                    autoHide: true,
                    topOffset: 30,
                    bottomOffset: 40,
                })
            }
        }
    })
    return (
        <ImageBackground
            source={require('../../../../assets/login-background.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.content}>
                <View style={styles.form}>
                    <Text h4 style={styles.textRegister}>Restablecer contraseña</Text>
                    <Input
                        style={styles.input}
                        label="Email"
                        placeholder="tu.correo@gmail.com"
                        rightIcon={
                            <Icon
                                type='entypo'
                                name='email'
                                iconStyle={styles.icon}
                            />
                        }
                        onChangeText={(text) => formik.setFieldValue('email', text)}
                        ErrorMessage={formik.errors.email}
                    />
                    <Button
                        title={"Enviar"}
                        buttonStyle={styles.btnRegister}
                        onPress={formik.handleSubmit}
                        loading={formik.isSubmitting}
                    >
                    </Button>
                    <View style={styles.actionsView}>
                        <Text
                            style={styles.textAction}><Text
                                style={styles.btnAction}
                                onPress={() => navigation.navigate('Login')}>Iniciar sesión
                            </Text>
                        </Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}