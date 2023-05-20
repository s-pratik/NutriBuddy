import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./Components/Splash";
import Home from "./Components/Home";
import Nutrition from "./Components/Nutrition";
import Recipie from "./Components/Recipie";
import Reminder from "./Components/Reminder";
import Dietplan from "./Components/Dietplan";
import Register from "./Components/Register";
import Login from "./Components/Login";
import loginNew from "./Components/loginNew";
import newLogin from "./Components/newLogin";
import newRegister from "./Components/newRegister";
import Rdetails from "./Components/Rdetails";
import Dashboard from "./Components/Dashboard";
import firstHomeScreen from "./Components/firstHomeScreen";
import Instructions from "./Components/Instructions";
import NutriDetails from "./Components/NutriDetails";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Nutrition"
          component={Nutrition}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Recipie"
          component={Recipie}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Dietplan"
          component={Dietplan}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Reminder"
          component={Reminder}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Rdetails"
          component={Rdetails}
          options={{ title: "Details", headerShown: false }}
        />
        <Stack.Screen
          name="Instructions"
          component={Instructions}
          options={{ title: "Instructions", headerShown: false }}
        />
        <Stack.Screen
          name="NutriDetails"
          component={NutriDetails}
          options={{ title: "NutriDetails", headerShown: false }}
        />

        <Stack.Screen
          name="newRegister"
          component={newRegister}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="loginNew"
          component={loginNew}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="newLogin"
          component={newLogin}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="firstHomeScreen"
          component={firstHomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
