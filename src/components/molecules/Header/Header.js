import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { MenuBtn, Title, UserAvatar } from '../../atoms'

export const Header = ({ title, onMenuPress, onAvatarPress, avatarUrl }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
                {onAvatarPress && <UserAvatar onPress={onAvatarPress} avatarUrl={avatarUrl} />}
            </View>
            <Title text={title} />
            <View style={styles.headerRight}>
                {onMenuPress && <MenuBtn onPress={onMenuPress} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    headerLeft: {
        flex: 1,
        alignItems: 'flex-start',
    },
    headerRight: {
        flex: 1,
        alignItems: 'flex-end',
    },
});