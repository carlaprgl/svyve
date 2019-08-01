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

import Category from "../../components/Explore/Category";
import TreesToSelect from "../../components/Explore/TreesToSelect";

class YourScore extends React.Component {
  static navigationOptions = {
    title: "Your Score",
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
      //show tree progress
      //leaves collected
      //choose different trees
      //By clicking on plant now --> redirected to your community forest
      //At bottom button to scan other products
      <View
        style={{
          flex: 1,
          justifyContent: "space-between"
        }}
      >
        <View
          style={{
            flex: 3,
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "5%",
            marginHorizontal: "10%"
          }}
        >
          <Text
            style={{
              color: "#3F4E47",
              fontSize: 22,
              fontWeight: "light",
              display: "flex",
              textAlign: "center",
              marginBottom: "2%"
            }}
          >
            Leaves collected
          </Text>
          <View
            style={{
              width: 70,
              height: 35,
              borderRadius: 10,
              backgroundColor: "#89A998",
              alignItems: "center",
              justifyContent: "center",
              /* marginTop: "5%",
              marginBottom: "2%", */
              resizeMode: "center"
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 22,
                fontWeight: "bold",
                /*   display: "flex", */
                textAlign: "center",
                alignItems: "center",
                marginBottom: "2%",
                marginTop: "2%"
              }}
            >
              100
            </Text>
          </View>
          <Text
            style={{
              color: "#3F4E47",
              fontSize: 16,
              lineHeight: 24,
              fontWeight: "normal",
              display: "flex",
              textAlign: "center",
              marginTop: "2%"
            }}
          >
            Now you can plant a REAL tree!
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-start",
              //marginBottom: "5%",
              marginHorizontal: "5%"
            }}
          >
            <View>
              <Text
                style={{
                  color: "#3F4E47",
                  fontSize: 16,
                  lineHeight: 24,
                  fontWeight: "normal",
                  display: "flex",
                  textAlign: "center",
                  marginTop: "2%"
                }}
              >
                Select the tree you want to plant:
              </Text>

              <View
                style={{
                  height: 500,
                  marginTop: "7%",
                  justifyContent: "space-between",
                  marginBottom: "5%"
                }}
              >
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "space-between",
                      height: 280,
                      width: 250,
                      marginLeft: 20,
                      borderWidth: 0.5,

                      borderRadius: 10,
                      backgroundColor: "#F1F1F1",
                      alignContent: "center"
                    }}
                  >
                    <View
                      style={{
                        flex: 2,
                        flexDirection: "column",
                        /* justifyContent: "space-between", */
                        alignItems: "center",
                        marginTop: "10%"
                      }}
                    >
                      <ProgressCircle
                        percent={100}
                        radius={70}
                        borderWidth={8}
                        color="#3F4E47"
                        shadowColor="white"
                        bgColor="#fff"
                      >
                        <View>
                          <View>
                            <Image
                              source={require("../../assets/images/beech.png")}
                              style={{
                                flex: 1,
                                borderRadius: 10,
                                resizeMode: "contain"
                              }}
                            />
                          </View>
                        </View>
                      </ProgressCircle>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "space-between",
                        paddingLeft: 5,
                        /* paddingTop: 25, */
                        marginTop: "20%",
                        alignItems: "center",
                        marginBottom: "25%"
                      }}
                    >
                      <Text
                        style={{
                          color: "#3F4E47",
                          fontSize: 20,
                          fontWeight: "bold",
                          display: "flex",
                          textAlign: "center"
                        }}
                      >
                        Beech
                      </Text>
                      <Button
                        style={{
                          height: 35,
                          width: 140,
                          textAlign: "center",
                          backgroundColor: "#89A998",
                          alignContent: "center",
                          marginTop: "5%",
                          resizeMode: "contain",
                          alignItems: "center",
                          /*    justifyContent:"center" */
                          resizeMode: "center"
                        }}
                        mode="contained"
                        onPress={() =>
                          this.props.navigation.navigate("Community")
                        }
                      >
                        <Image
                          style={{
                            width: 20,
                            height: 20,
                            marginTop: "1%",
                            resizeMode: "contain"
                          }}
                          source={require("../../assets/images/LeafBlack.png")}
                        />

                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: "normal",
                            color: "#000000"
                          }}
                        >
                          Plant Now
                        </Text>
                      </Button>
                    </View>
                  </View>

                  <View
                    style={{
                      flex: 2,
                      height: 350,
                      width: 250,
                      marginLeft: 20,
                      borderWidth: 0.5,
                      /* borderColor: "#89A998", */
                      borderRadius: 10,
                      backgroundColor: "#F1F1F1",
                      /* 
          borderWidth: 2 */ alignContent: "center"
                    }}
                  >
                    <View
                      style={{
                        flex: 2,
                        flexDirection: "column",
                        /* justifyContent: "space-between", */
                        alignItems: "center",
                        marginTop: "10%"
                      }}
                    >
                      <ProgressCircle
                        percent={88}
                        radius={70}
                        borderWidth={8}
                        color="#385723"
                        shadowColor="white"
                        bgColor="#fff"
                      >
                        <View>
                          <View>
                            <Image
                              source={require("../../assets/images/pine.png")}
                              style={{
                                flex: 1,
                                borderRadius: 10,
                                resizeMode: "contain"
                              }}
                            />
                          </View>
                        </View>
                      </ProgressCircle>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "space-between",
                        paddingLeft: 5,
                        /* paddingTop: 5, */
                        alignItems: "center",
                        marginBottom: "40%"
                      }}
                    >
                      <Text
                        style={{
                          color: "#89A998",
                          fontSize: 20,
                          fontWeight: "bold",
                          display: "flex",
                          textAlign: "center"
                        }}
                      >
                        Pine
                      </Text>
                      <Button
                        style={{
                          height: 40,
                          width: 140,
                          textAlign: "center",
                          backgroundColor: "#D3D3D3",
                          alignContent: "center",
                          marginBottom: "5%",
                          marginTop: "5%",
                          resizeMode: "contain",
                          alignItems: "center",
                          /* justifyContent: "center" */
                          resizeMode: "center"
                        }}
                        mode="contained"
                        onPress={() =>
                          this.props.navigation.navigate("Community")
                        }
                      >
                        <Image
                          style={{
                            width: 20,
                            height: 20,
                            marginTop: "1%",
                            resizeMode: "contain"
                          }}
                          source={require("../../assets/images/LeafWhite2.png")}
                        />

                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: "normal",
                            color: "white"
                          }}
                        >
                          115 leaves
                        </Text>
                      </Button>
                    </View>
                  </View>

                  <View
                    style={{
                      flex: 2,
                      height: 350,
                      width: 250,
                      marginLeft: 20,
                      borderWidth: 0.5,
                      /* borderColor: "#89A998", */
                      borderRadius: 10,
                      backgroundColor: "#F1F1F1",
                      /* 
          borderWidth: 2 */ alignContent: "center"
                    }}
                  >
                    <View
                      style={{
                        flex: 2,
                        flexDirection: "column",
                        /* justifyContent: "space-between", */
                        alignItems: "center",
                        marginTop: "10%"
                      }}
                    >
                      <ProgressCircle
                        percent={69}
                        radius={70}
                        borderWidth={8}
                        color="#385723"
                        shadowColor="white"
                        bgColor="#fff"
                      >
                        <View>
                          <View>
                            <Image
                              source={require("../../assets/images/oak.png")}
                              style={{
                                flex: 1,
                                borderRadius: 10,
                                resizeMode: "contain"
                              }}
                            />
                          </View>
                        </View>
                      </ProgressCircle>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "space-between",
                        paddingLeft: 5,
                        /* paddingTop: 5, */
                        alignItems: "center",
                        marginBottom: "40%"
                      }}
                    >
                      <Text
                        style={{
                          color: "#89A998",
                          fontSize: 20,
                          fontWeight: "bold",
                          display: "flex",
                          textAlign: "center"
                        }}
                      >
                        Oak
                      </Text>
                      <Button
                        style={{
                          height: 40,
                          width: 140,
                          textAlign: "center",
                          backgroundColor: "#D3D3D3",
                          alignContent: "center",
                          marginBottom: "5%",
                          marginTop: "5%",
                          resizeMode: "contain",
                          alignItems: "center",
                          /*  justifyContent: "center" */
                          resizeMode: "center"
                        }}
                        mode="contained"
                        onPress={() =>
                          this.props.navigation.navigate("Community")
                        }
                      >
                        <Image
                          style={{
                            width: 20,
                            height: 20,
                            marginTop: "1%",
                            resizeMode: "contain"
                          }}
                          source={require("../../assets/images/LeafWhite2.png")}
                        />

                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: "normal",
                            color: "white"
                          }}
                        >
                          145 leaves
                        </Text>
                      </Button>
                    </View>
                  </View>

                  <View
                    style={{
                      flex: 2,
                      height: 350,
                      width: 250,
                      marginLeft: 20,
                      borderWidth: 0.5,
                      /* borderColor: "#89A998", */
                      borderRadius: 10,
                      backgroundColor: "#F1F1F1",
                      /* 
          borderWidth: 2 */ alignContent: "center"
                    }}
                  >
                    <View
                      style={{
                        flex: 2,
                        flexDirection: "column",
                        /* justifyContent: "space-between", */
                        alignItems: "center",
                        marginTop: "10%"
                      }}
                    >
                      <ProgressCircle
                        percent={63}
                        radius={70}
                        borderWidth={8}
                        color="#385723"
                        shadowColor="white"
                        bgColor="#fff"
                      >
                        <View>
                          <View>
                            <Image
                              source={require("../../assets/images/beech.png")}
                              style={{
                                flex: 1,
                                borderRadius: 10,
                                resizeMode: "contain"
                              }}
                            />
                          </View>
                        </View>
                      </ProgressCircle>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "space-between",
                        paddingLeft: 5,
                        /* paddingTop: 5, */
                        alignItems: "center",
                        marginBottom: "40%"
                      }}
                    >
                      <Text
                        style={{
                          color: "#89A998",
                          fontSize: 20,
                          fontWeight: "bold",
                          display: "flex",
                          textAlign: "center"
                        }}
                      >
                        Oak
                      </Text>
                      <Button
                        style={{
                          height: 40,
                          width: 140,
                          textAlign: "center",
                          backgroundColor: "#D3D3D3",
                          alignContent: "center",
                          marginBottom: "5%",
                          marginTop: "5%",
                          resizeMode: "contain",
                          alignItems: "center",
                          /*   justifyContent: "center" */
                          resizeMode: "center"
                        }}
                        mode="contained"
                        onPress={() =>
                          this.props.navigation.navigate("Community")
                        }
                      >
                        <Image
                          style={{
                            width: 20,
                            height: 20,
                            marginTop: "1%",
                            resizeMode: "contain"
                          }}
                          source={require("../../assets/images/LeafWhite2.png")}
                        />

                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: "normal",
                            color: "white"
                          }}
                        >
                          160 leaves
                        </Text>
                      </Button>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            marginTop: "15%",
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          <IconButton
            reverse
            reverseColor="#89A998"
            icon={require("../../assets/images/BaumLogo.png")}
            size={70}
            color="#89A998"
            onPress={() => this.props.navigation.navigate("ScanProduct")}
          />
        </View>
      </View>
    );
  }
}

export default YourScore;

//define styles

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
    alignItems: "center"
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
    marginTop: "1%",
    height: "85%",
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap", //items are not forced into a single line
    padding: 5
  },
  bottomItem: {
    width: "50%", // 2 bottom  items per row
    height: "85%",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5
  },

  bottomItem2: {
    width: "50%", // 2 bottom  items per row
    height: "25%",
    paddingLeft: 5,
    paddingRight: 5
  },

  bottomItemInnerLeft: {
    flex: 1, // Take the entire space of the parent which is the bottomitem
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    shadowOffset: { width: -1, height: 4 },
    shadowColor: "grey",
    shadowOpacity: 0.5
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
    marginBottom: "10%",
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    backgroundColor: "#89A998",
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
    justifyContent: "center"
  },
  restekachel: {
    flex: 5,
    marginTop: "10%"
  },
  choosekachel: {
    marginTop: "25%",
    flex: 3
  }
});
