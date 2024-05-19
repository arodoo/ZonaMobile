import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {  } from "../screens"
import { screenName } from "../utilities/config"
import { EmergencyPhoneScreen } from "../screens"
const Stack = createNativeStackNavigator()

export const EmergencyPhoneStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name={screenName.phoneNumbers.phoneNumbers}
                component={EmergencyPhoneScreen}
                options={{
                    headerShown: false,
                    title: "EmergencyPhone",
                }}
            />
        </Stack.Navigator>
    )
}