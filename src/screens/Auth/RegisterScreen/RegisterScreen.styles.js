import { StyleSheet } from "react-native";
import { colors } from '../../../styles/colors';


export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 40,
        backgroundColor: 'rgba(0,0,0,0.5)',

    },
    form: {
        backgroundColor: '#ECF0F1',
        borderRadius: 10,
        padding: 20,
    },
    textRegister: {
        textAlign: 'center',
        marginBottom: 30,
    },
    btnRegister: {
        backgroundColor: colors.color2,
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 10,
    },
    actionsView: {
        marginTop: 20,
    },
    textAction: {
        textAlign: 'center',
        marginTop: 1,
    },
    btnAction: {
        color: colors.color2,
        fontWeight: 'bold',
    },
})