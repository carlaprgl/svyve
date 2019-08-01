//import necessary packages

import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation"; // Version can be specified in package.json
import ProgressCircle from "react-native-progress-circle";

import * as WebBrowser from "expo-web-browser";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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

//define screen
//define dropdown button for selecting communities - join forests
//see you forest and your tree planting
//define button to go back to scanner to scan another product

export default class Community extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSwitchOn: false,
      nextRoute: "YourResults",
      multipleProducts: false,
      activeProduct: 0,
      selectedPackaging: false,
      selectedProducts: [
        {
          id: 0,
          productName: "",
          productCountry: "",
          productPackaging: false
        }
      ],
      products: [
        {
          value: "Apple"
        },
        {
          value: "Banana"
        },
        {
          value: "Cucumber"
        }
      ],
      countries: [
        {
          value: "Australia"
        },
        {
          value: "Germany"
        },
        {
          value: "Spain"
        },
        {
          value: "Turkey"
        },
        {
          value: "Ukraine"
        }
      ]
    };
  }

  static navigationOptions = {
    title: "Your Community Forests",
    headerStyle: {
      backgroundColor: "#89A998"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    const {
      isSwitchOn,
      nextRoute,
      products,
      countries,
      activeProduct,
      selectedProducts,
      selectedPackaging
    } = this.state;

    const selectedProduct = selectedProducts[activeProduct];
    const { productName, productCountry, productPackaging } = selectedProduct;

    // const { nextRoute } = this.props.navigation.navigate.state;

    const productList = selectedProducts.map(product => (
      <TouchableOpacity
        key={product.productName}
        onPress={() => this.setState({ activeProduct: product.id })}
        style={
          product.id == activeProduct ? { backgroundColor: "#89A998" } : null
        }
      >
        <Text>{product.productName + " " + product.productCountry}</Text>
      </TouchableOpacity>
    ));

    return (
      <View>
        <Button
          style={{
            height: 55,

            textAlign: "center",
            backgroundColor: "#89A998",
            alignContent: "center",
            marginBottom: "1%",
            marginTop: "5%",

            alignItems: "center",
            /*    justifyContent:"center" */
            resizeMode: "strech"
          }}
          mode="contained"
          onPress={() => this.props.navigation.navigate("YourScore")}
        >
          <Image
            style={{
              width: 20,
              height: 20,
              marginTop: "1%",
              resizeMode: "contain"
            }}
            source={require("../../assets/images/communityWhite.png")}
          />

          <Text
            style={{
              fontSize: 16,
              fontWeight: "normal",
              color: "black"
            }}
          >
            Join Forests
          </Text>
        </Button>

        <View>
          <Text
            style={{
              color: "#3F4E47",
              /*   width: 375,
                    height: 29.73, */

              fontSize: 16,
              /* lineHeight: 24, */
              fontWeight: "normal",
              /*      display: "flex", */
              textAlign: "left",
              marginTop: "1%",
              marginBottom: "1%"
            }}
          >
            Select Community Forest
          </Text>
          <Dropdown
            label="CDTM Forest"
            data={products}
            value={productName}
            onChangeText={text => this.handleInput(text, "productName")}
            style={{ marginTop: "1%", marginBottom: "1%" }}
          />

          <Text
            style={{
              color: "#3F4E47",
              /*    width: 375,
                    height: 29.73, */
              fontSize: 16,
              /*  lineHeight: 24, */
              fontWeight: "normal",
              /*    display: "flex", */
              textAlign: "left",
              marginTop: "1%",
              marginBottom: "1%"
            }}
          >
            Location
          </Text>

          <Dropdown
            label="Yucatán, Mexico"
            value={productCountry}
            onChangeText={text => this.handleInput(text, "productCountry")}
            data={countries}
            style={{ marginTop: "1%", marginBottom: "1%" }}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              marginTop: "1%",
              resizeMode: "cover",
              alignContent: "center",
              justifyContent: "center",
              height: 250,
              width: 290
            }}
            source={require("../../assets/images/Forest3.png")}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "#3F4E47",
              /*   width: 375,
                    height: 29.73, */

              fontSize: 16,
              /* lineHeight: 24, */
              fontWeight: "bold",
              /*      display: "flex", */
              textAlign: "left",
              marginBottom: "5%"
            }}
          >
            Total CO2 offset: 1800 kg/year
          </Text>
        </View>
      </View>
    );
  }
}
