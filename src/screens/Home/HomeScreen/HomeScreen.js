import React from 'react'
import { View, Text } from 'react-native'
import { MainAppTemplate } from '../../../components'
import { styles } from './HomeScreen.styles'

export function HomeScreen() {
  const headerProps = {
    title: 'Inicio',
    onBackPress: () => console.log('Volver atrás'),
    onMenuPress: () => console.log('Abrir menú'),
    onAvatarPress: () => console.log('Perfil del usuario'),
    avatarUrl: 'https://robohash.org/mail@ashallendesign.co.uk',
  };
  return (
    <MainAppTemplate headerProps={headerProps}>
      <View style={styles.container}>
        <Text>Contenido de la pantalla</Text>
      </View>
    </MainAppTemplate>
  );
}