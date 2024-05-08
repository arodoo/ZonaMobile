import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens";
import { screenName } from "../utilities/config";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screenName.home.home}
                component={HomeScreen}
                options={{
                    title: "Home",
                }}
            />
        </Stack.Navigator>
    );
};