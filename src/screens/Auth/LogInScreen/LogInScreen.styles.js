import { StyleSheet } from 'react-native';
import  {colors}  from '../../../styles/colors';

export const styles = StyleSheet.create({
    content: {
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 40,
    },
    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center',
    },
    btnRegister: {
        backgroundColor: colors.color2,
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 10,
    },
})