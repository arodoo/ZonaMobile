import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Header } from '../../molecules';

export const MainAppTemplate = ({ children, headerProps }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header {...headerProps} />
            <View style={styles.content}>
                {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        fontFamily: 'Roboto'
    },
    content: {
        flex: 1,
        padding: 10,
    },
});