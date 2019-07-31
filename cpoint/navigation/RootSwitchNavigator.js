import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import StartScreen from "../screens/StartScreen/StartScreen";

// This is our root navigator object
export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Start: StartScreen,
      App: MainTabNavigator
    },
    {
      initialRouteName: "Start"
    }
  )
);
