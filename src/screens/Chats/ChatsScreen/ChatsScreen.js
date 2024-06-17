import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { MainAppTemplate } from '../../../components';

import { GroupsList } from '../../../components';

import { styles } from './ChatsScreen.styles'

export function ChatsScreen() {

  const headerProps = {
    title: 'Chats',
    onBackPress: () => console.log('Volver atrás'),
    onMenuPress: () => console.log('Abrir menú'),
    onAvatarPress: () => console.log('Perfil del usuario'),
    avatarUrl: 'https://robohash.org/mail@ashallendesign.co.uk',
  }

  return (
    <MainAppTemplate headerProps={headerProps}>
      <View style={styles.container}>
        <GroupsList />
      </View>
    </MainAppTemplate>
  )
}