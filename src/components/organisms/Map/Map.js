import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps'
import Toast from 'react-native-toast-message'
import { ExpandableButton } from '../../atoms'
import { styles } from './Map.styles'

export function Map() {

  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        Toast.show({
          type: 'error',
          text1: 'Permiso denegado',
          text2: 'Por favor, acepta los permisos de localización para continuar',
        })
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      })
    }
    )()
  }
    , [])

  let text = 'Cargando...'
  if (errorMsg) {
    text = errorMsg
  }
  else if (location) {
    text = JSON.stringify(location)
  }

  const options = [
    { label: 'Reportar Accidente', onPress: () => console.log('Opción 1') },
    { label: 'Accidentes recientes', onPress: () => console.log('Opción 2') },
    { label: 'Notificar problema', onPress: () => console.log('Opción 3') },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ExpandableButton options={options} />
      </View>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        {
          location && <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Ubicación actual"
            description="Estás aquí"
          />
        }
      </MapView>
    </View>
  )
}

