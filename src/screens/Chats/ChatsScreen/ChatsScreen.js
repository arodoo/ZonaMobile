import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { MainAppTemplate } from '../../../components';

//import firebase functions
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


import { styles } from './ChatsScreen.styles'

export function ChatsScreen() {

  const headerProps = {
    title: 'Chats',
    onBackPress: () => console.log('Volver atrás'),
    onMenuPress: () => console.log('Abrir menú'),
    onAvatarPress: () => console.log('Perfil del usuario'),
    avatarUrl: 'https://robohash.org/mail@ashallendesign.co.uk',
  }

  //use state to store the groups
  const [groups, setGroups] = useState([]);

  //use effect to get the groups
  useEffect(() => {
    const db = getFirestore();
    const groupsCollection = collection(db, 'groups');
    const getGroups = async () => {
      const groupsSnapshot = await getDocs(groupsCollection);
      const groupsList = groupsSnapshot.docs.map(doc => doc.data());
      setGroups(groupsList);
    }
    getGroups();
    console.log('groups',groups);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.groupItem}>
      <Text style={styles.groupName}>{item.name}</Text>
    </View>
  );

  return (
    <MainAppTemplate headerProps={headerProps}>
      <View style={styles.container}>
        <FlatList
          data={groups}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </MainAppTemplate>
  )
}