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

class BrowseProduct extends React.Component {
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
          productBarcode:"",
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
    return (
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
/*This is an example of AutoComplete Input/ AutoSuggestion Input*/
// import React, { Component } from "react";
// //import react in our code.
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// //import all the components we are going to use.
// import Autocomplete from "react-native-autocomplete-input";
// //import Autocomplete component

// const API = "https://swapi.co/api";
// //Demo base API to get the data for the Autocomplete suggestion
// class BrowseProduct extends Component {
//   constructor(props) {
//     super(props);
//     //Initialization of state
//     //films will contain the array of suggestion
//     //query will have the input from the autocomplete input
//     this.state = {
//       products: [
//         {
//           title: "Tomato",
//           country: "",
//           packaging: false
//         },
//         {
//           title: "Potato",
//           country: "",
//           packaging: false
//         },
//         {
//           title: "Toast",
//           country: "",
//           packaging: false
//         }
//       ],
//       query: ""
//     };
//   }
//   componentDidMount() {
//     //First method to be called after components mount
//     //fetch the data from the server for the suggestion
//   }
//   findProduct(query) {
//     //method called everytime when we change the value of the input
//     if (query === "") {
//       //if the query is null then return blank
//       return [];
//     }

//     const { products } = this.state;
//     //making a case insensitive regular expression to get similar value from the film json
//     console.log("query", query);
//     const regex = new RegExp(query.trim(), "i");
//     //return the filtered film array according the query from the input
//     return products.filter(product => product.title.search(regex) >= 0);
//   }

//   render() {
//     const { query } = this.state;
//     const products = this.findProduct(query);
//     const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

//     return (
//       <View style={styles.container}>
//         <Autocomplete
//           autoCapitalize="none"
//           autoCorrect={false}
//           containerStyle={styles.autocompleteContainer}
//           //data to show in suggestion
//           data={
//             products.length === 1 && comp(query, products[0].title)
//               ? []
//               : products
//           }
//           //default value if you want to set something in input
//           defaultValue={query}
//           /*onchange of the text changing the state of the query which will trigger
//           the findFilm method to show the suggestions*/
//           onChangeText={text => this.setState({ query: text })}
//           placeholder="Enter the film title"
//           renderItem={({ title, country }) => (
//             //you can change the view you want to show in suggestion from here
//             <TouchableOpacity onPress={() => this.setState({ query: title })}>
//               <Text style={styles.itemText}>
//                 {title} ({country})
//               </Text>
//             </TouchableOpacity>
//           )}
//         />
//         <View style={styles.descriptionContainer}>
//           {products.length > 0 ? (
//             <Text style={styles.infoText}>{this.state.query}</Text>
//           ) : (
//             <Text style={styles.infoText}>Enter The Film Title</Text>
//           )}
//         </View>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#F5FCFF",
//     flex: 1,
//     padding: 16,
//     marginTop: 40
//   },
//   autocompleteContainer: {
//     backgroundColor: "#ffffff",
//     borderWidth: 0
//   },
//   descriptionContainer: {
//     flex: 1,
//     justifyContent: "center"
//   },
//   itemText: {
//     fontSize: 15,
//     paddingTop: 5,
//     paddingBottom: 5,
//     margin: 2
//   },
//   infoText: {
//     textAlign: "center",
//     fontSize: 16
//   }
// });
// export default BrowseProduct;
// this.handleFetchBackend(
//   "http://localhost:3000/api/co2/getCo2ScoresForProducts",
//   "POST"

/* {this.handleFetchBackend(
              "http://localhost:3000/api/co2/getCo2ScoresForProducts",
              "POST"
            )} */
