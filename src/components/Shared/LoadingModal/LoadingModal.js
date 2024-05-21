import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { Overlay } from 'react-native-maps'
import { StyleSheet } from 'react-native'
import {colors} from '../../../styles/colors'


export function LoadingModal(props) {

    const { show, text } = props

    return (
        <Overlay isVisible={show} overlayStyle={styles.overlay}>
            <View style={styles.View}>
                <ActivityIndicator size="large" color={colors.color1} />
                {text && <Text style={styles.text}>{text}</Text>}
            </View>
        </Overlay>
    )
}

LoadingModal.defaultProps = {
    text: "Cargando...",
    show: false,
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        borderBlockColor: 'white',
        width: '80%',
        height: '20%',
        borderRadius: 10,
    },
    View: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
        marginTop: 20,
    },
})