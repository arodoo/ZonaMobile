import React from 'react'
import { View, Text } from 'react-native'
import {HomeTemplate} from '../../../components/templates'

export function HomeScreen() {
  const headerProps = {
    title: 'Inicio',
    onBackPress: () => console.log('Volver atrás'),
    onMenuPress: () => console.log('Abrir menú'),
    onAvatarPress: () => console.log('Perfil del usuario'),
    avatarUrl: 'https://robohash.org/mail@ashallendesign.co.uk',
  };
  return (
    <HomeTemplate headerProps={headerProps}>
      <Text>Contenido de la pantalla</Text>
      {/* Aquí va el resto del contenido de la pantalla */}
    </HomeTemplate>
  );
}