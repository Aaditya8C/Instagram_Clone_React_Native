import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LogBox } from "react-native";
import HomeScreen from "./Modules/screens/HomeScreen";
import LoginScreen from "./Modules/screens/LoginScreen";
import RegisterScreen from "./Modules/screens/RegisterScreen";
import CreatePostScreen from "./Modules/screens/CreatePostScreen";

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

const screenOptions = {
  headerShown: false,
};
export const SignedInStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="CreatePostScreen"
          options={{ headerShown: false }}
          component={CreatePostScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const SignedOutStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          options={{ headerShown: false }}
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
