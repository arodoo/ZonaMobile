import React from 'react'
import { View, Text } from 'react-native'
import { Map } from '../../../components';
import { MainAppTemplate } from '../../../components'

export function MapScreen() {
  const headerProps = {
    title: 'Mapa'
  };
  return (
    <MainAppTemplate headerProps={headerProps}>
      <Map />
    </MainAppTemplate>
  )
}