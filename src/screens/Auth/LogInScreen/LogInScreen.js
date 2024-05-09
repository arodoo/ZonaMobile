import React, { useState } from 'react'
import { View, ImageBackground } from 'react-native'
import { Button, Input, Icon, Text } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Toast from 'react-native-toast-message'
import { useFormik } from 'formik';

import { initialValues, validationSchema } from './LogInScreen.data'
import { firebaseAuthStatePersistance } from '../../../utilities/config/firebase'
import { screenName } from '../../../utilities/'

import { styles } from './LogInScreen.styles'

export function LogInScreen() {
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const navigation = useNavigation();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await signInWithEmailAndPassword(
                    auth,
                    formValue.email,
                    formValue.password
                ).then((userCredentials) => {
                    const user = userCredentials.user
                    Toast.show({
                        type: 'success',
                        text1: 'Bienvenido',
                        text2: user.email,
                        visibilityTime: 3000,
                        autoHide: true,
                        topOffset: 30,
                        bottomOffset: 40,
                    })
                    navigation.navigate(screen.account.account)
                })
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
                    <Text h3 style={styles.textRegister}>Iniciar sesión</Text>
                    <Input
                        placeholder="Correo electrónico"
                        containerStyle={styles.input}
                        rightIcon={
                            <Icon
                                type="entypo"
                                name="email"
                                iconStyle={styles.icon}
                            />
                        }
                        onChangeText={(text) => formik.setFieldValue('email', text)}
                        errorMessage={formik.errors.email}
                    />
                    <Input
                        placeholder="Contraseña"
                        containerStyle={styles.input}
                        password={true}
                        secureTextEntry={!showPassword}
                        rightIcon={
                            <Icon
                                type="material-community"
                                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                                onPress={handleShowPassword}
                                iconStyle={styles.icon}
                            />
                        }
                        onChangeText={(text) => formik.setFieldValue('password', text)}
                        errorMessage={formik.errors.password}
                    />
                    <Button
                        title={"Iniciar sesión"}
                        buttonStyle={styles.btnRegister}
                        onPress={formik.handleSubmit}
                        loading={formik.isSubmitting}
                    />
                    <View style={styles.actionsView}>
                        <Text
                            style={styles.textAction}>¿No tienes cuenta? <Text
                                style={styles.btnAction}
                                onPress={() => navigation.navigate('Register')}>Regístrate
                            </Text>
                        </Text>
                        <Text
                            style={styles.textAction}>¿Olvidaste tu contraseña? <Text
                                style={styles.btnAction}
                                onPress={() => navigation.navigate(screenName.auth.forgotPassword)}>Recuperar contraseña
                            </Text>
                        </Text>
                    </View>
                </View>
            </View>
        </ImageBackground >
    )
}