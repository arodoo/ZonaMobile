import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

export const UserAvatar = ({ avatarUrl, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 10, 
    },
});

