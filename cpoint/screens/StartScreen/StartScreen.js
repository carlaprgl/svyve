//import necessary packages
import React, { Fragment } from "react";

import { createStackNavigator, createAppContainer } from "react-navigation"; // Version can be specified in package.json

import * as WebBrowser from "expo-web-browser";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View
} from "react-native";

import { Button } from "react-native-paper";
import { ProgressBar, Colors } from "react-native-paper";
import { Headline } from "react-native-paper";
import { Title } from "react-native-paper";

import styles from "./styles";

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //after 2.5 seconds switching to next screen

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("ScanProduct");
    }, 2500);
  }

  pressingScreen = () => {
    this.props.navigation.navigate("ScanProduct");
  };

  render() {
    return (
      //Show svyve Logo when opening the App
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#8AAA98"
        }}
      >
        <Image
          source={require("../../assets/images/Svyve_white.png")}
          style={{
            transform: [{ scale: 0.08 }],
            resizeMode: "contain",
            alignSelf: "center"
          }}
        />

        <Button onPress={() => this.props.navigation.navigate("App")}>
          Svive
        </Button>
      </View>
    );
  }
}

export default StartScreen;
