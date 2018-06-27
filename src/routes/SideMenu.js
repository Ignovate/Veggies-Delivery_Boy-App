
import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./Style";
import { NavigationActions } from "react-navigation";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import IconAwesome from "react-native-vector-icons/FontAwesome";
import SInfo from "react-native-sensitive-info";
import Base from "../pages/home/Base";
import Service from "../service/Service";
class SideMenu extends Base {
    instance;
    constructor() {
        super();
        instance = this;
    }
    static fetchDetails() {
        SInfo.getItem("name", {}).then(value => {
            instance.setState({
                name: value
            });
        });
        SInfo.getItem("photo", {}).then(value => {
            instance.setState({
                photo: value
            });
        });
    }
    navigateToScreen = route => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
      };
      render() {
        const { navigate } = this.props.navigation;
        return (
          <View style={styles.root}>
            <Image
              style={styles.bg}
              source={require("../../assets/sidebg.png")}
            />
            <ScrollView style={{ marginBottom: 10 }}>
              <View style={styles.imageContainer}>
    
                {instance.state.photo == null ?
                  <Image
                    style={styles.imageCircle}
                    source={require("../../assets/profile.png")}
                    resizeMode="cover"
                  />
                  : <Image
                    style={styles.imageCircle}
                    resizeMode="cover"
                    source={{ uri: instance.state.photo }}
                  />
                }    
                <Text style={styles.userName}>{instance.state.name == null ? "USER NAME" : instance.state.name}</Text>
                {/* <Image
                  style={styles.editIcon}
                  source={require("../../../assets/icon-edit.png")}
                /> */}
              </View>
    
              <View style={styles.itemsParent}>
                {/* <TouchableOpacity
                  style={{ flexDirection: "row", marginLeft: 10 }}
                  onPress={() => navigate("Home")}
                >
                  <Image
                    style={styles.menuIcon}
                    source={require("../../assets/history.png")}
                  />
                  <Text style={styles.menuNames}>Home</Text>
                </TouchableOpacity> */}
    
                <TouchableOpacity
                  style={{ flexDirection: "row", marginLeft: 10, marginTop: 30 }}
                  onPress={() => navigate("TodaysSpecial", { id: -1, title: "Todays Special" })}
                >
                  <Image
                    style={styles.menuIcon}
                    source={require("../../assets/history.png")}
                  />
                  <Text style={styles.menuNames}>History</Text>
                </TouchableOpacity>
    
              </View>
            </ScrollView>
          </View>
        );
      }
    }

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;