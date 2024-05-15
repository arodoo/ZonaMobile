import React from 'react'
import { View, Text } from 'react-native'
import { Button } from '@rneui/base'
export * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps'
import Toast from 'react-native-toast-message'
import { Modal } from '../../atoms'
import { styles } from './Map.styles'

export function Map(props) {
  return (
    //Map loades with user current location
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
        title="This is a marker"
        description="This is a marker example"
      />
    </MapView>
  )
}

