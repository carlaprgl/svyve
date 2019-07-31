import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Modal } from "react-native";
import { Button, Provider, IconButton } from "react-native-paper";
import { createStackNavigator, createAppContainer } from "react-navigation"; // Version can be specified in package.json

class ScProducts extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              width: 100,
              height: 150,
              resizeMode: "cover",
              borderRadius: 10
            }}
          />
        </View>
      </View>
    );
  }
}
export default ScProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
