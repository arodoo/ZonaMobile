import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatScreen, ChatsScreen } from "../screens";
import { screenName } from "../../src/utilities";

const Stack = createNativeStackNavigator();

export const ChatsStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name={screenName.chats.chats}
                component={ChatsScreen}
                options={{
                    headerShown: false,
                    title: "Chats",
                }}
            />
            <Stack.Screen
                name={screenName.chats.chat}
                component={ChatScreen}
                options={{
                    headerShown: false,
                    title: "Chat",
                }}
            />
        </Stack.Navigator>
    );
}
