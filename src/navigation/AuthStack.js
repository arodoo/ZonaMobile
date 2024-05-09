import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogInScreen, RegisterScreen, ForgotPassword } from '../screens';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="LogIn"
                component={LogInScreen}
                options={{
                    title: 'Iniciar sesión',
                }}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    title: 'Registro',
                }}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{
                    title: 'Recuperar contraseña',
                }}
            />
        </Stack.Navigator>
    );
}