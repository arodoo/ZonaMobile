import { View, Text } from 'react-native'
import React from 'react'

import { GoBackHeader } from '../../molecules'

export function CreateGroupForm({ navigation }) {
  return (
    <View>
      <GoBackHeader title='Create Group' onPress={() => navigation.goBack()} />
      <Text>Create Group Form</Text>
    </View>
  )
}