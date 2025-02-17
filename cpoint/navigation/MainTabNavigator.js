//import
import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";

import BrowseProduct from "../screens/BrowseProduct/BrowseProduct";
import Profile from "../screens/Profile/Profile";
import Community from "../screens/Community/Community";
import YourScore from "../screens/YourScore/YourScore";
import ScanProduct from "../screens/ScanProduct/ScanProduct";
import ScanProduct2 from "../screens/ScanProduct2/ScanProduct2";
import ScanProduct3 from "../screens/ScanProduct3/ScanProduct3";
import Comparison4 from "../screens/Comparison4/Comparison4";
import Info1 from "../screens/Info1/Info1";

//create the Navigator

const HomeStack = createStackNavigator({
  ScanProduct: ScanProduct,
  BrowseProduct: BrowseProduct,
  YourScore: YourScore,
  ScanProduct2: ScanProduct2,
  ScanProduct3: ScanProduct3,
  Comparison4: Comparison4,
  Info1: Info1,
  Community: Community
});

HomeStack.navigationOptions = {
  tabBarLabel: "Svyve it!",
  //params: { nextRoute: false },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-leaf" : "md-information-circle"}
    />
  )
};

const ProfileStack = createStackNavigator({
  Profile: Profile
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Your Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-link"}
    />
  )
};

const CommunityStack = createStackNavigator({
  Community: Community
});

CommunityStack.navigationOptions = {
  tabBarLabel: "Community",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-contacts" : "md-options"}
    />
  )
};

export default createBottomTabNavigator({
  CommunityStack,
  HomeStack,
  ProfileStack
});
