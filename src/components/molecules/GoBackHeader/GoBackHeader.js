import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const GoBackHeader = ({ title, onPress }) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.backButton} onPress={onPress}>
                <Ionicons name="arrow-back" size={28} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 35,
        backgroundColor: '#f2f2f2',
    },
    statusBarPadding: {
        height: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#f2f2f2',
    },
    backButton: {
        marginRight: 10,
        padding: 8,

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
