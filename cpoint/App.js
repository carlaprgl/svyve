//import necessary packages
import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation"; // Version can be specified in package.json

import * as WebBrowser from "expo-web-browser";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { Button } from "react-native-paper";
import { ProgressBar, Colors } from "react-native-paper";
import { Headline } from "react-native-paper";
import { Title } from "react-native-paper";

import RootSwitchNavigator from "./navigation/RootSwitchNavigator";

console.disableYellowBox = true;

//create StyleSheet

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  browseButtonStyle: {
    position: "absolute",
    width: 163,
    height: 184,
    left: 17,
    bottom: 10,
    backgroundColor: "#8AAA98"
  }
});

export default class App extends React.Component {
  render() {
    return <RootSwitchNavigator />;
  }
}
