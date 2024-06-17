import React, {useContext} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { GroupsContext } from '../../../utilities'

import { styles } from './GroupsList.styles'

export function GroupsList() {
    const groups = useContext(GroupsContext)
    
    return (
        <View style={styles.container}>
            {groups.map(group => (
                <TouchableOpacity key={group.id} style={styles.groupItem}>
                    <Image source={{ uri: group.imgUrl }} style={styles.groupImage} />
                    <Text style={styles.groupName}>{group.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}