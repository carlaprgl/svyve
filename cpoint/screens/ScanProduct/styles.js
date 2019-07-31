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
import { Dropdown } from "react-native-material-dropdown";

import styles from "./styles";

class BrowseProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextRoute: "Comparison",
      multipleProducts: false,
      activeProduct: 0,
      selectedProducts: [
        {
          id: 0
        }
      ]
    };
  }

  handleInput(text, property) {
    const { selectedProducts, activeProduct } = this.state;
    selectedProducts[activeProduct][property] = text;
    this.setState({ selectedProducts });
  }

  handleAddProduct() {
    const { selectedProducts, activeProduct } = this.state;
    const newProduct = {
      id: activeProduct + 1
    };
    selectedProducts[activeProduct + 1] = newProduct;
    const newActiveProduct = activeProduct + 1;
    this.setState({ selectedProducts, activeProduct: newActiveProduct });
  }

  render() {
    const {
      nextRoute,
      products,
      countries,
      activeProduct,
      selectedProducts
    } = this.state;

    const selectedProduct = selectedProducts[activeProduct];
    const { id } = selectedProduct;

    // const { nextRoute } = this.props.navigation.navigate.state;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly"
        }}
      >
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
