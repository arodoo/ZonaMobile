import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "../screens";
import { screenName } from "../utilities/config";

const Stack = createNativeStackNavigator();

export const ProfileStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name={screenName.profile.profile}
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    title: "Profile",
                }}
            />
        </Stack.Navigator>
    );
}