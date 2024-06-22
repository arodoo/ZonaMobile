import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList } from 'react-native';
import { MainAppTemplate } from '../../../components';
import { CreateButton } from '../../../components';

import { GroupsList } from '../../../components';
import { styles } from './ChatsScreen.styles'

export function ChatsScreen() {

  const headerProps = {
    title: 'Chats',
  }

  const navigation = useNavigation();

  const onCreateGroupPress = () => {
    navigation.navigate('CreateGroupForm');
  }

  return (
    <MainAppTemplate headerProps={headerProps}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <CreateButton
            title='Crear grupo'
            onPress={onCreateGroupPress}
            />
        </View>
        <GroupsList />
      </View>
    </MainAppTemplate>
  )
}