import React from 'react';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';
import { MenuBtn, Title, UserAvatar } from '../../atoms';
import { colors } from '../../../styles/colors';

export const Header = ({ title, onMenuPress, onAvatarPress, avatarUrl }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.statusBarPadding} />
            <View style={styles.headerContent}>
                <View style={styles.headerLeft}>
                    {onAvatarPress && <UserAvatar onPress={onAvatarPress} avatarUrl={avatarUrl} />}
                </View>
                <Title text={title} />
                <View style={styles.headerRight}>
                    {onMenuPress && <MenuBtn onPress={onMenuPress} />}
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
        backgroundColor: '#ffffff', // Asegúrate de que el color de fondo sea el mismo que el del encabezado
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // Aquí puedes agregar cualquier otro estilo que necesites para el contenido del encabezado
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
