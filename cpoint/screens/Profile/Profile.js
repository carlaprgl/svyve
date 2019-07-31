//import necessary packages

import React, { Component } from "react";
import { Text, View } from "react-native";

import { createStackNavigator, createAppContainer } from "react-navigation"; // Version can be specified in package.json
import ProgressCircle from "react-native-progress-circle";

import * as WebBrowser from "expo-web-browser";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ImageComponent,
  Modal,
  Alert
} from "react-native";

import { Button, IconButton } from "react-native-paper";
import { ProgressBar, Colors } from "react-native-paper";
import { Headline } from "react-native-paper";
import { Title } from "react-native-paper";
import { Dropdown } from "react-native-material-dropdown";

import Category from "../../components/Explore/Category";
import TreesToSelect from "../../components/Explore/TreesToSelect";

export default class Profile extends Component {
  static navigationOptions = {
    title: "Team SVYVE",
    headerStyle: {
      backgroundColor: "#89A998"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              marginTop: "1%",
              resizeMode: "cover",
              alignContent: "center",
              justifyContent: "center",
              borderRadius: 10,
              borderWidth: 10,
              borderColor: "#89A998",
              height: 400,
              width: 350
            }}
            source={require("../../assets/images/GroupPhoto.jpg")}
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
            marginHorizontal: "5%",
            marginTop: "2%"
          }}
        >
          <Text
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "left",
              color: "#89A998",
              fontStyle: "bold",
              fontSize: 20
            }}
          >
            Follow us:
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "left"
            }}
          >
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../../assets/images/Insta.png")}
            />
            <Text
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "left",
                marginHorizontal: "5%",
                color: "#89A998",
                fontStyle: "normal",
                fontSize: 16
              }}
            >
              Instagram: _svyve_
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: "1%"
            }}
          >
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../../assets/images/Face.png")}
            />
            <Text
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "left",
                marginHorizontal: "5%",
                color: "#89A998",
                fontStyle: "normal",
                fontSize: 16
              }}
            >
              Facebook: Svyve
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: "2%"
            }}
          >
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../../assets/images/Link.png")}
            />
            <Text
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "left",
                marginHorizontal: "5%",
                color: "#89A998",
                fontStyle: "normal",
                fontSize: 16
              }}
            >
              LinkedIn: Svyve
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
