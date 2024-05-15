import React from 'react'
import { View, Text } from 'react-native'
import { Map } from '../../../components';
import { MainAppTemplate } from '../../../components'

export function MapScreen() {
  const headerProps = {
    title: 'Mapa',
    onBackPress: () => console.log('Volver atrás'),
    onMenuPress: () => console.log('Abrir menú'),
    onAvatarPress: () => console.log('Perfil del usuario'),
    avatarUrl: 'https://robohash.org/mail@ashallendesign.co.uk',
  };
  return (
    <MainAppTemplate headerProps={headerProps}>
      <Map />
    </MainAppTemplate>
  )
}