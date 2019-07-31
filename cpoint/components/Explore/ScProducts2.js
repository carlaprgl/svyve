import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Provider, IconButton } from "react-native-paper";

class ScProducts2 extends Component {
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

      /*         <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: "2%",
            marginHorizontal: "2%",
            alignItems: "center"
          }}
        >
          <Button
            style={{
              width: 100,
              height: 35,
              borderColor: "#90CF96",
              justifyContent: "center",
              alignItems: "center"
            }}
            mode="outlined"
            onPress={() => this.props.navigation.navigate("YourScore")}
            color="#90CF96"
          >
            Choose
          </Button>
          <IconButton
            icon={require("../../assets/images/i.png")}
            size={30}
            color="#90CF96"
            onPress={() => this.props.navigation.navigate("Comparison")}
          />
        </View>

      </View>  */
    );
  }
}
export default ScProducts2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
