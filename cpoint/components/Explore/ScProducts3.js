import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Provider, IconButton } from "react-native-paper";

class ScProducts3 extends Component {
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
              resizeMode: "cover"
            }}
          />
        </View>
      </View>
    );
  }
}
export default ScProducts3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
