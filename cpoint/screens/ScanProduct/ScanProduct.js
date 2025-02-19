//import necessary packages

import * as React from "react";
import { Text, View, StyleSheet, Button, Alert, Image } from "react-native";
import { IconButton } from "react-native-paper";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

import { BarCodeScanner } from "expo-barcode-scanner";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

export default class ScanProduct extends React.Component {
  //define header
  static navigationOptions = {
    title: "Scan Product",
    headerStyle: {
      backgroundColor: "#89A998"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  //set permissions to use camera
  //scanner
  state = {
    hasCameraPermission: null,
    scanned: false
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };

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

  //handle scanned information

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
    //define scanner and what to do when product has been scanned

    const {
      hasCameraPermission,
      scanned,
      nextRoute,
      products,
      countries,
      activeProduct,
      selectedProducts
    } = this.state;

    const selectedProduct = selectedProducts[activeProduct];
    const { id } = selectedProduct;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        <View style={styles.topIcon}>
          {scanned && (
            <Image
              style={{ width: 55, height: 55 }}
              source={require("../../assets/images/NewZealand2.jpg")}
            />
          )}
        </View>

        <View style={styles.bottomco2}>
          <IconButton
            reverse
            reverseColor="#89A998"
            icon={require("../../assets/images/BaumLogo.png")}
            size={100}
            color="#89A998"
            onPress={() =>
              Alert.alert(
                "Scanned Product",
                `Apple from New Zealand with Packaging has been scanned!`,
                [
                  {
                    text: "Scan Again",
                    onPress: () =>
                      this.props.navigation.navigate("ScanProduct2")
                  },
                  {
                    text: "Svyve",
                    onPress: () => this.props.navigation.navigate("Comparison4")
                  }
                ],
                { cancelable: false }
              )
            }
          />
        </View>
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    Alert.alert(
      "Scanned Product",
      `Apple from New Zealand with Packaging has been scanned!`,
      [
        {
          text: "Scan Again",
          onPress: () => this.props.navigation.navigate("ScanProduct2")
        },
        {
          text: "Svyve",
          onPress: () => this.props.navigation.navigate("Comparison")
        }
      ],
      { cancelable: false }
    );
  };
}

//define stlyes
const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  top: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#89A998"
  },

  title: {
    fontStyle: "normal",
    alignItems: "center"
  },

  topIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "5%"
  },

  bottomRight: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: "8%"
  },
  bottomco2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: "8%"
  }
});
