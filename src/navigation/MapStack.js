import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MapScreen } from "../screens";
import { screenName } from "../utilities/config";

const Stack = createNativeStackNavigator();

export const MapStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name={screenName.map.map}
                component={MapScreen}
                options={{
                    headerShown: false,
                    title: "Map",
                }}
            />
        </Stack.Navigator>
    );
}