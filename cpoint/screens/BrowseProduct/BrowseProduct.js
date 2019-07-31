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
import { ProgressBar, Colors, Switch } from "react-native-paper";
import { Headline } from "react-native-paper";
import { Title } from "react-native-paper";
import { Dropdown } from "react-native-material-dropdown";

import styles from "./styles";

//define class

class BrowseProduct extends React.Component {
  //when accessing the backend and the mongoDB --> calling the products

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
          productBarcode: "",
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

  //handle information provided manually through this screen by the user

  handleInput(text, property) {
    const { selectedProducts, activeProduct, selectedPackaging } = this.state;
    selectedProducts[activeProduct][property] = text;
    this.setState({ selectedProducts });
  }

  handleAddProduct() {
    const { selectedProducts, activeProduct, selectedPackaging } = this.state;
    const newProduct = {
      productName: "",
      id: activeProduct + 1,
      productCountry: "",
      selectedPackaging: false
    };
    selectedProducts[activeProduct + 1] = newProduct;
    const newActiveProduct = activeProduct + 1;
    this.setState({ selectedProducts, activeProduct: newActiveProduct });
  }

  //Fetch

  handleFetchBackend(url, method) {
    const options = {
      method: method,
      body: JSON.stringify(this.state.selectedProducts),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };

    console.log("options", options);
    console.log("url", url);

    fetch("http://localhost:3000/api/co2/getCo2ScoresForProducts", options)
      .then(res => res.json())
      .then(resJson => {
        console.log("resJson", resJson);
        this.props.navigation.navigate("Comparison", resJson);
      });
  }

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

    //return content and functions of screen

    return (
      //define screen
      //define dropdown menus for country and product
      //define toggle button for packaging
      //define button to browse another product => first product browsed is remembered
      //define button to move to next screen

      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly"
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "10%",
            marginBottom: "1%"
          }}
        >
          <Text
            style={{
              color: "#89A998",
              width: 375,
              height: 29,
              fontSize: 30,
              lineHeight: 29,
              fontWeight: "normal",
              display: "flex",
              textAlign: "center"
            }}
          >
            Browse Product
          </Text>
        </View>
        {productList}
        <View>
          <Button
            style={{
              width: 5,
              backgroundColor: "#8AAA98",
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: "5%",
              marginHorizontal: "5%"
            }}
            onPress={() => this.handleAddProduct()}
          >
            <Text
              style={{
                color: "#FFF"
              }}
            >
              +
            </Text>
          </Button>
          <Text
            style={{
              color: "#89A998",
              width: 375,
              height: 29.73,

              fontSize: 20,
              lineHeight: 24,
              fontWeight: "normal",
              display: "flex",
              textAlign: "left"
            }}
          >
            Select Product
          </Text>
          <Dropdown
            label="Select"
            data={products}
            value={productName}
            onChangeText={text => this.handleInput(text, "productName")}
          />

          <Text
            style={{
              color: "#89A998",
              width: 375,
              height: 29.73,
              fontSize: 20,
              lineHeight: 24,
              fontWeight: "normal",
              display: "flex",
              textAlign: "left"
            }}
          >
            Select Country
          </Text>

          <Dropdown
            label="Select"
            value={productCountry}
            onChangeText={text => this.handleInput(text, "productCountry")}
            data={countries}
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            margin: "15%",
            alignitems: "left"
          }}
        >
          <Text
            style={{
              color: "#89A998",
              width: 375,
              height: 29.73,

              fontSize: 20,
              lineHeight: 24,
              fontWeight: "normal",
              display: "flex",
              textAlign: "left"
            }}
          >
            Plastic packaging? (Yes/No)
          </Text>
          {/* selectedPackaging auf das Gegenteil von selectedPackaging setzen */}
          <Switch
            style={{
              flexDirection: "column"
            }}
            value={selectedPackaging}
            onValueChange={() => {
              value = { selectedPackaging };
              this.setState({ selectedPackaging: !selectedPackaging });
            }}
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
            marginBottom: "5%",
            marginHorizontal: "5%"
          }}
        >
          <Button
            style={{
              width: 100,
              justifyContent: "flex-end",
              backgroundColor: "#8AAA98",
              marginBottom: "1%",
              marginHorizontal: "1%"
            }}
            mode="contained"
            onPress={() => this.props.navigation.navigate("Comparison")}
          >
            Svyve
          </Button>
        </View>
      </View>
    );
  }
}

export default BrowseProduct;
