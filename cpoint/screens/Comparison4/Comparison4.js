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
  Modal,
  Icon,
  Alert
} from "react-native";

import { Button, Provider, IconButton } from "react-native-paper";
import { ProgressBar, Colors } from "react-native-paper";
import { Headline } from "react-native-paper";
import { Title } from "react-native-paper";

import { Paragraph, Dialog, Portal } from "react-native-paper";

import { Avatar, Card } from "react-native-paper";

import ScProducts from "../../components/Explore/ScProducts";
import ScProducts2 from "../../components/Explore/ScProducts2";
import ScProducts3 from "../../components/Explore/ScProducts3";

export default class Comparison4 extends React.Component {
  static navigationOptions = {
    title: "Product Comparison",
    headerStyle: {
      backgroundColor: "#89A998"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  state = {
    visible: false
  };

  //define Dialog

  _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => this.setState({ visible: false });

  render() {
    return (

      //define screen
      //define CO2 scale: low to high emissions - green to red
      //Scrollview: get products ordered after their emissions on the CO2 scale
      //define info & choose buttons for each product
      //after choosing product --> get tranfered to an alert saying how much leaves you earned
      //when clicking on the info button --> go to more info about product
      //define button to go back to scanner to scan another product

      <View style={styles.container}>

        <Text style={styles.title}>Low CO2 emissions</Text>

        <View style={styles.bottom2}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-start"
            }}
          >
            <ScrollView scrollEventThrottle={16}>
              <View>
                <View>
                  <ScrollView
                    vertical={true}
                    showsVerticalScrollIndicator={false}
                  >
                    <View
                      style={{
                        flex: 1,
                        height: 170,
                        width: 330,
                        marginLeft: 5,
                        borderWidth: 2,
                        borderColor: "#69C881",
                        backgroundColor: "#69C881",
                        borderRadius: 10
                        // alignItems: "left"
                        // marginLeft: "9%"
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <ScProducts //#07B053
                          imageUri={require("../../assets/images/Bodensee2.jpg")}
                        />
                        <View
                          style={{
                            flex: 1,
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "10%",
                            marginBottom: "10%",
                            marginHorizontal: "5%"
                          }}
                        >
                          <View
                            style={{
                              flex: 1,
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center"
                            }}
                          >
                            <Image
                              style={{
                                width: 20,
                                height: 20,
                                color: "#000000"
                              }}
                              source={require("../../assets/images/co2Black.png")}
                            />
                            <Text
                              style={{
                                fontStyle: "bold",
                                color: "#000000",
                                fontSize: 15
                              }}
                            >
                              : 0,6kg
                            </Text>
                          </View>

                          <View
                            style={{
                              flex: 1,
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center"
                            }}
                          >
                            <Image
                              style={{
                                width: 20,
                                height: 20,
                                color: "#000000"
                              }}
                              source={require("../../assets/images/AverageBlack.png")}
                            />
                            <Text
                              style={{
                                fontStyle: "bold",
                                color: "#880013",
                                fontSize: 15
                              }}
                            >
                              : +122%
                            </Text>
                          </View>

                          <View
                            style={{
                              flex: 1,
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center"
                            }}
                          >
                            <Image
                              style={{ width: 20, height: 20 }}
                              source={require("../../assets/images/LeafBlack.png")}
                            />
                            <Text
                              style={{
                                fontStyle: "bold",
                                color: "#000000",

                                fontSize: 15
                              }}
                            >
                              4 Leaves
                            </Text>
                          </View>

                          <IconButton
                            style={{
                              marginTop: "10%",
                              backgroundColor: "#5CB072"
                            }}
                            icon={require("../../assets/images/iGreyLight.png")}
                            size={40}
                            color="#000000"
                            onPress={() =>
                              this.props.navigation.navigate("Info1")
                            }
                          />
                        </View>

                        <Button
                          style={{
                            width: 100,
                            height: 35,
                            backgroundColor: "#5CB072",
                            justifyContent: "center",
                            marginTop: "2%",
                            marginBottom: "2%",
                            marginRight: "3%"
                          }}
                          mode="outlined"
                          onPress={() =>
                            Alert.alert(
                              "Chosen Apple",
                              `By choosing the Jonagold apple you are earning 4 leaves for your virtual tree!`,
                              [
                                {
                                  text: "See your tree progress",
                                  onPress: () =>
                                    this.props.navigation.navigate("YourScore")
                                }
                              ],
                              { cancelable: false }
                            )
                          }
                          color="#000000"
                        >
                          Choose
                        </Button>
                      </View>
                    </View>
                    {/*   </View> */}

                    <View
                      style={{
                        flex: 1,
                        height: 170,
                        width: 330,
                        marginLeft: 5,
                        borderWidth: 2,
                        borderColor: "#B1CC9E",
                        backgroundColor: "#B1CC9E",
                        borderRadius: 10,
                        marginTop: "3%"
                        // alignItems: "left"
                        // marginLeft: "9%"
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <ScProducts //#07B053
                          imageUri={require("../../assets/images/SouthAfrica2.jpg")}
                        />
                        <View
                          style={{
                            flex: 1,
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "10%",
                            marginBottom: "10%",
                            marginHorizontal: "5%"
                          }}
                        >
                          <View
                            style={{
                              flex: 1,
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center"
                            }}
                          >
                            <Image
                              style={{
                                width: 20,
                                height: 20,
                                color: "#FFFFFF"
                              }}
                              source={require("../../assets/images/co2Black.png")}
                            />
                            <Text
                              style={{
                                fontStyle: "bold",
                                color: "#000000",
                                fontSize: 15
                              }}
                            >
                              : 1,6kg
                            </Text>
                          </View>

                          <View
                            style={{
                              flex: 1,
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center"
                            }}
                          >
                            <Image
                              style={{
                                width: 20,
                                height: 20,
                                color: "#000000"
                              }}
                              source={require("../../assets/images/AverageBlack.png")}
                            />
                            <Text
                              style={{
                                fontStyle: "bold",
                                color: "#880013",
                                fontSize: 15
                              }}
                            >
                              : +529%
                            </Text>
                          </View>

                          <View
                            style={{
                              flex: 1,
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center"
                            }}
                          >
                            <Image
                              style={{ width: 20, height: 20 }}
                              source={require("../../assets/images/LeafBlack.png")}
                            />
                            <Text
                              style={{
                                fontStyle: "bold",
                                color: "#000000",

                                fontSize: 15
                              }}
                            >
                              2 Leaves
                            </Text>
                          </View>
                          <IconButton
                            style={{
                              marginTop: "10%",
                              backgroundColor: "#A0B98F"
                            }}
                            icon={require("../../assets/images/iBlack.png")}
                            size={40}
                            color="#000000"
                            onPress={() =>
                              this.props.navigation.navigate("Info1")
                            }
                          />
                        </View>

                        <Button
                          style={{
                            width: 100,
                            height: 35,
                            backgroundColor: "#A0B98F",
                            justifyContent: "center",
                            marginTop: "2%",
                            marginBottom: "2%",
                            marginRight: "3%"
                          }}
                          mode="outlined"
                          onPress={() =>
                            this.props.navigation.navigate("YourScore")
                          }
                          color="#000000"
                        >
                          Choose
                        </Button>
                      </View>
                    </View>
                    {/* </View> */}

                    <View
                      style={{
                        flex: 1,
                        height: 170,
                        width: 330,
                        marginLeft: 5,
                        borderWidth: 2,
                        borderColor: "#F2B488",
                        backgroundColor: "#F2B488",
                        borderRadius: 10,
                        marginTop: "3%"
                        // alignItems: "left"
                        // marginLeft: "9%"
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <ScProducts //#07B053
                          imageUri={require("../../assets/images/NewZealand2.jpg")}
                        />
                        <View
                          style={{
                            flex: 1,
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "10%",
                            marginBottom: "10%",
                            marginHorizontal: "5%"
                          }}
                        >
                          <View
                            style={{
                              flex: 1,
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center"
                            }}
                          >
                            <Image
                              style={{
                                width: 20,
                                height: 20,
                                color: "#FFFFFF"
                              }}
                              source={require("../../assets/images/co2Black.png")}
                            />
                            <Text
                              style={{
                                fontStyle: "bold",
                                color: "#000000",
                                fontSize: 15
                              }}
                            >
                              : 2,3kg
                            </Text>
                          </View>

                          <View
                            style={{
                              flex: 1,
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center"
                            }}
                          >
                            <Image
                              style={{
                                width: 20,
                                height: 20,
                                color: "#000000"
                              }}
                              source={require("../../assets/images/AverageBlack.png")}
                            />
                            <Text
                              style={{
                                fontStyle: "bold",
                                color: "#880013",
                                fontSize: 15
                              }}
                            >
                              : +825%
                            </Text>
                          </View>

                          <View
                            style={{
                              flex: 1,
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center"
                            }}
                          >
                            <Image
                              style={{ width: 20, height: 20 }}
                              source={require("../../assets/images/LeafBlack.png")}
                            />
                            <Text
                              style={{
                                fontStyle: "bold",
                                color: "#000000",

                                fontSize: 15
                              }}
                            >
                              1 Leave
                            </Text>
                          </View>
                          <IconButton
                            style={{
                              marginTop: "10%",
                              backgroundColor: "#D9A078"
                            }}
                            icon={require("../../assets/images/iBlack.png")}
                            size={40}
                            color="#000000"
                            onPress={() =>
                              this.props.navigation.navigate("Info1")
                            }
                          />
                        </View>

                        <Button
                          style={{
                            width: 100,
                            height: 35,
                            backgroundColor: "#D9A078",
                            justifyContent: "center",
                            marginTop: "2%",
                            marginBottom: "2%",
                            marginRight: "3%"
                          }}
                          mode="outlined"
                          onPress={() =>
                            this.props.navigation.navigate("YourScore")
                          }
                          color="#000000"
                        >
                          Choose
                        </Button>

                      </View>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </ScrollView>
          </View>

          <Text style={styles.title2}>High CO2 emissions</Text>
        </View>
      </View>
    );
  }
}

//define styles of buttons, texts,...

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
  },
  top2: {
    flex: 1,
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  title: {
    fontStyle: "normal",
    color: "#07B053",
    justifyContent: "center",
    fontSize: 15,
    marginTop: "3%",
    marginHorizontal: "7%",
    fontWeight: "bold"
  },
  titleGreen: {
    fontStyle: "normal",
    color: "#3F4E47",
    justifyContent: "center",
    fontSize: 15,
    marginTop: "3%",
    marginHorizontal: "7%",
    fontWeight: "bold"
  },
  title2: {
    fontStyle: "normal",
    color: "red",
    justifyContent: "center",
    fontSize: 15,
    marginHorizontal: "3%",
    fontWeight: "bold",
    marginBottom: "3%",
    marginTop: "2%"
  },
  titleAttention: {
    fontStyle: "normal",
    color: "#3F4E47",
    justifyContent: "center",
    fontSize: 15,
    marginTop: "3%",
    marginHorizontal: "10%"
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
    /*     marginTop: "5%",
    height: "100%", */
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
