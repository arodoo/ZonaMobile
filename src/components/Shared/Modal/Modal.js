import React from 'react'
import { Overlay } from '@rneui/base'
import { StyleSheet } from 'react-native'

export function Modal(props) {
    const { isVisible, onClose, children } = props
    return (
        <Overlay
            visible={isVisible}
            windowBackgroundColor="rgba(255, 255, 255, .5)"
            overlayBackgroundColor="transparent"
            onBackdropPress={onClose}
            overlayStyle={styles.overlay}
        >
            {children}
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay: {
        width: '80%',
        height: 'auto',
        borderRadius: 10,
        padding: 20,
        backgroundColor: 'white',
        borderBlockColor: 'black',
        borderBlockWidth: 1,
    },
})
