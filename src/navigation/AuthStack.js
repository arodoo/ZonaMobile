import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogInScreen } from '../screens';

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
        </Stack.Navigator>
    );
}