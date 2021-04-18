import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screen/Login";
import OtpScreen from "../screen/OtpScreen";
import BottomTabScreen from "./BottomTabScreen";
import ProfileForm from "../screen/ProfileForm";

export default function MainScreen() {
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#ffffff"
          },
          // headerBackTitleVisible: true,
          headerTintColor: "rgba(105,105,105, .9)"
        }}
      >
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            headerBackTitleVisible: false
          }}
        />
        <RootStack.Screen
          name="BottomTabScreen"
          component={BottomTabScreen}
          options={{
            headerShown: false,
            headerBackTitleVisible: false
          }}
        />

        <RootStack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{
            headerTitle: "OTP Screen",
            headerShown: true,
            // tabBarLabel: "Home!",
            // tabBarVisible: false,
            // headerTintColor: "rgba(0,0,0, .9)",
            headerBackTitleVisible: false
          }}
        />
        <RootStack.Screen
          name="ProfileForm"
          component={ProfileForm}
          options={{
            headerTitle: "Profile Form",
            headerShown: true,
            // tabBarLabel: "Home!",
            // tabBarVisible: false,
            // headerTintColor: "rgba(0,0,0, .9)",
            headerBackTitleVisible: false
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
