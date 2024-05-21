import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { Button } from '@rneui/base'
import { getAuth, signOut } from 'firebase/auth'
import Toast from 'react-native-toast-message'
import { MainAppTemplate } from '../../../components'
import {AccountOptions, ChangueDisplayNameForm,InfoUser } from '../../../components'
import {LoadingModal} from '../../../components'
import {styles} from './ProfileScreen.styles'

export function ProfileScreen() {

  const headerProps = {
    title: 'Perfil',
    onBackPress: () => console.log('Volver atrás'),
    onMenuPress: () => console.log('Abrir menú'),
    onAvatarPress: () => console.log('Perfil del usuario'),
    avatarUrl: 'https://robohash.org/mail@ashallendesign.co.uk',
  };

  const [loading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState('')
  const [_, setReload] = useState(false)

  const onReload = () => setReload((prevState) => !prevState)

  const logOut = () => { 
    try{
      setLoadingText('Cerrando sesión')
      setLoading(true)
      const auth = getAuth()
      signOut(auth).then(() => {
        setLoading(false)
        Toast.show({
          type: 'success',
          text1: 'Sesión cerrada',
          text2: 'Se ha cerrado la sesión correctamente',
        })
      }).catch((error) => {
        setLoading(false)
        Toast.show({
          type: 'error',
          text1: 'Error al cerrar sesión',
          text2: error.message,
        })
      })
    }
    catch(error){
      setLoading(false)
      Toast.show({
        type: 'error',
        text1: 'Error al cerrar sesión',
        text2: error.message,
      })
    }
  }

  return (
    <MainAppTemplate headerProps={headerProps}>
    <View>
      <InfoUser setLoading={setLoading} 
        setLoadingText={setLoadingText}
        />
        <Button
          title="Cerrar sesión"
          onPress={logOut}
          style={styles.button}
        />
    </View>
    </MainAppTemplate>
  )
}