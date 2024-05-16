import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },

    container:{
        flex: 1,
        borderRadius: 20,
        overflow: 'hidden',
    },
    buttonContainer: {
        position: 'absolute',
        top: 20,
        right: 10,
        zIndex: 1,
    },
})