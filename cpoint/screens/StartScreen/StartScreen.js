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
      //<TouchableHighlight onPress={this.pressingScreen}>
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
      //</TouchableHighlight>
    );
  }
}

export default StartScreen;

/*<View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#8AAA98" }}>
        <Text>Start Screen</Text>
        <Image source={require("../../assets/images/SVYVE.png")} />
        <Button onPress={() => this.props.navigation.navigate("App")}>
          Svive
        </Button>
      </View>*/
/*<View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#8AAA98"}}>
        <View></View>
          <Image source={require("../../assets/images/Svyve_white.png")}
          style={{flex: 1, width: 0, height: 0, resizeMode: 'contain'}} />
      </View>*/
