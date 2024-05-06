import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogInScreen } from '../screens/LogInScreen';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator>
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