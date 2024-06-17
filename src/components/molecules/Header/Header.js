import React from 'react';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';
import { MenuBtn, Title, UserAvatar } from '../../atoms';
import { colors } from '../../../styles/colors';

export const Header = ({ title }) => {

    const pressMenu = () => {
        console.log('Abrir menú');
    }

    const pressAvatar = () => {
        console.log('Perfil del usuario');
    }

    const avatarUrl = 'https://robohash.org/mail@ashallendesign.co.uk';

    return (
        <View style={styles.headerContainer}>
            <View style={styles.statusBarPadding} />
            <View style={styles.headerContent}>
                <View style={styles.headerLeft}>
                    {pressAvatar && <UserAvatar onPress={pressAvatar} avatarUrl={avatarUrl} />}
                </View>
                <Title text={title} />
                <View style={styles.headerRight}>
                    {pressMenu && <MenuBtn onPress={pressMenu} />}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#ffffff',
    },
    statusBarPadding: {
        height: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#ffffff', 
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
