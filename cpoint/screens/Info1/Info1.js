//import necessary packages

import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation"; // Version can be specified in package.json
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

import * as WebBrowser from "expo-web-browser";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  ImageBackground,
  ImageComponent,
  Modal
} from "react-native";

import { Button, Provider, IconButton } from "react-native-paper";
import { ProgressBar, Colors } from "react-native-paper";
import { Headline } from "react-native-paper";
import { Title, Icon } from "react-native-paper";

import { Paragraph, Dialog, Portal } from "react-native-paper";

import { Avatar, Card } from "react-native-paper";

import ScProducts from "../../components/Explore/ScProducts";
import ScProducts2 from "../../components/Explore/ScProducts2";
import ScProducts3 from "../../components/Explore/ScProducts3";
import Category from "../../components/Explore/Category";

export default class Info1 extends React.Component {
  static navigationOptions = {
    title: "More Info",
    headerStyle: {
      backgroundColor: "#89A998"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (

      //define screen


      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "left",
            marginHorizontal: "5%"
          }}
        >
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
              source={require("../../assets/images/LeafDarkGreen.png")}
            />
            <Text style={styles.title}>Increase your tree by 4 leaves</Text>
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
              source={require("../../assets/images/co2DarkGreen.png")}
            />
            <Text style={styles.title}>0,6kg CO2 emissions for 1kg apples</Text>
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
              source={require("../../assets/images/CarDarkGreen.png")}
            />
            <Text style={styles.title}>Equivalent to 3,75km driven by car</Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              marginHorizontal: "5%",
              marginTop: "17%"
            }}
          >
            <Image
              style={{ width: 300, height: 170 }}
              source={require("../../assets/images/co2Chart4.png")}
            />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            marginHorizontal: "5%",
            marginTop: "15%"
          }}
        >
          <ScrollView scrollEventThrottle={16}>
            <View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginTop: "2%",
                  overflow: "visible"
                }}
              >
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("../../assets/images/Attention.png")}
                />
                <Text style={styles.titleAttention}>
                  Apples are not seasonal in Germany +122% emissions than
                  average
                </Text>
              </View>

              <Text
                style={{
                  color: "#3F4E47",
                  fontSize: 16,
                  lineHeight: 24,
                  fontWeight: "normal",
                  display: "flex",
                  textAlign: "left",
                  marginTop: "1%"
                }}
              >
                Now Seasonal:
              </Text>

              <View style={{ height: 130, marginTop: 12 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    imageUri={require("../../assets/images/Straw2.png")}
                  />
                  <Category
                    imageUri={require("../../assets/images/Apri2.png")}
                  />
                  <Category
                    imageUri={require("../../assets/images/Cher3.png")}
                  />
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    flex: 1,
    height: "2%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#89A998"
    // borderBottomColor: "white",
    // borderLeftColor: "#89A998",
    // borderRightColor: "#89A998",
    // borderTopColor: "#89A998",
    // borderWidth: 1
  },
  top2: {
    flex: 1,
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
    // borderBottomColor: "white",
    // borderLeftColor: "#89A998",
    // borderRightColor: "#89A998",
    // borderTopColor: "white",
  },
  title: {
    fontStyle: "normal",
    color: "#3F4E47",
    justifyContent: "center",
    fontSize: 15,
    marginTop: "3%",
    marginHorizontal: "10%"
  },
  titleAttention: {
    fontStyle: "normal",
    color: "#D35150",
    justifyContent: "center",
    fontSize: 15,
    marginTop: "3%",
    marginHorizontal: "10%"
  },
  title2: {
    fontStyle: "normal",
    color: "red",
    justifyContent: "center",
    fontSize: 15,
    marginHorizontal: "9%",
    marginTop: "2%",
    fontWeight: "bold",
    marginBottom: "3%"
  },
  center: {
    flex: 4,
    height: "35%",
    backgroundColor: "#89A998",
    alignItems: "center",
    justifyContent: "center"
  },
  bottom: {
    flex: 11,
    marginTop: "5%",
    height: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap", //items are not forced into a single line
    padding: 5
  },
  bottom2: {
    flex: 1,
    marginTop: "2%",
    marginHorizontal: "5%",
    flexWrap: "wrap" //items are not forced into a single line
    // padding: 5
  },
  bottomItem: {
    width: "35%", // 2 bottom  items per row
    height: "97%",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    backgroundColor: "#FFF"
  },

  bottomItem2: {
    width: "65%", // 2 bottom  items per row
    height: "97%",
    paddingLeft: 5,
    paddingRight: 5
  },

  bottomItemInnerLeft: {
    flex: 1, // Take the entire space of the parent which is the bottomitem
    backgroundColor: "#FFF"
    /*     borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 10,
    shadowOffset: { width: -1, height: 4 },
    shadowColor: "grey",
    shadowOpacity: 0.5 */
  },
  bottomItemInnerRight: {
    flex: 1, // Take the entire space of the parent which is the bottomitem
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    shadowOffset: { width: -1, height: 4 },
    shadowColor: "grey",
    shadowOpacity: 1
  },

  bottomItemInner2Left: {
    flex: 1, // Take the entire space of the parent which is the bottomitem
    backgroundColor: "white",
    borderBottomColor: "#0080ff",
    borderLeftColor: "#0080ff",
    borderRightColor: "#0080ff",
    borderTopColor: "#0080ff",
    borderWidth: 1,
    borderRadius: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    marginTop: "5%"
  },
  bottomItemInner2Right: {
    flex: 1, // Take the entire space of the parent which is the bottomitem
    backgroundColor: "white",
    borderBottomColor: "#cc3399",
    borderLeftColor: "#cc3399",
    borderRightColor: "#cc3399",
    borderTopColor: "#cc3399",
    borderWidth: 1,
    borderRadius: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    marginTop: "5%"
  },
  productTitle1: {
    paddingTop: 3,
    color: "#0080ff",
    marginLeft: "5%",
    fontStyle: "normal",
    alignItems: "center",
    justifyContent: "center"
  },
  productTitle2: {
    paddingTop: 3,
    color: "#cc3399",
    marginLeft: "5%",
    fontStyle: "normal",
    alignItems: "center",
    justifyContent: "center"
  },
  productSpecs: {
    paddingTop: 3,
    paddingTop: 3,
    marginLeft: "5%",
    fontStyle: "normal",
    fontSize: 14
  },
  productSpecs2: {
    paddingTop: 3,
    paddingTop: 3,
    marginLeft: "5%",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14
  },
  end: {
    flex: 1,
    height: "5%",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: 100,
    backgroundColor: "#8AAA98",
    marginTop: "5%",
    marginLeft: "5%",
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    backgroundColor: "#69C881",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  modal2: {
    backgroundColor: "#B1CC9E",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  modal3: {
    backgroundColor: "#F2B488",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  bottomco2: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  co2button: {
    marginBottom: 280,
    width: 350,
    height: 50,
    backgroundColor: "white",
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#89A998"
  },
  buttonContainer: {
    alignItems: "center"
  },
  kachel: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  restekachel: {
    flex: 5,
    marginTop: "10%"
  },
  choosekachel: {
    marginTop: "25%",
    flex: 3
  },
  bottomco2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: "2%"
  }
});
