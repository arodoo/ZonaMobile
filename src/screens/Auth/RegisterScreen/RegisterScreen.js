import React, {useState} from 'react'
import { View, ImageBackground } from 'react-native'
import { Button, Input, Icon, Text } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import Toast from 'react-native-toast-message'
import { useFormik } from 'formik'

import { initialValues, validationSchema } from './RegisterScreen.data'
import { screenName } from '../../../utilities'
import { styles } from './RegisterScreen.styles'

export function RegisterScreen() {

  const [showPassword, setShowPassword] = useState(false)
  const navigation = useNavigation();

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth()
        await createUserWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        navigation.navigate(screen.account.account)
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Error al registrar el usuario',
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
          style={styles.input}
          label="Email"
          placeholder="alguien@gmail.com"
          rightIcon={
            <Icon
              type='entypo'
              name='email'
              iconStyle={styles.icon}
            />
          }
          onChangeText={(text) => formik.setFieldValue('email', text)}
          errorMessage={formik.errors.email}
        />
        <Input
          style={styles.input}
          label="Contraseña"
          placeholder="Contraseña"
          secureTextEntry={!showPassword}
          rightIcon={
            <Icon
              type='material-community'
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              iconStyle={styles.icon}
              onPress={handleShowPassword}
            />
          }
          onChangeText={(text) => formik.setFieldValue('password', text)}
          errorMessage={formik.errors.password}
        />
        <Input
          style={styles.input}
          label="Repetir contraseña"
          placeholder="Repetir contraseña"
          secureTextEntry={!showPassword}
          rightIcon={
            <Icon
              type='material-community'
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              iconStyle={styles.icon}
              onPress={handleShowPassword}
            />
          }
          onChangeText={(text) => formik.setFieldValue('repeatPassword', text)}
          errorMessage={formik.errors.repeatPassword}
        />
        <Button
          title="Registrarse"
          buttonStyle={styles.btnRegister}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        />
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