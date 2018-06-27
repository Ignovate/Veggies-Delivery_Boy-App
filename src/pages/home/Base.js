import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import {
  Alert,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  BackAndroid,
  NetInfo,
  TextInput,
  PermissionsAndroid
} from "react-native";

import BarIndicator  from "../component/BarIndicator";
import {StackActions, NavigationActions } from "react-navigation";
import { InteractionManager } from "react-native";
import Permissions from 'react-native-permissions'

export default class Base extends React.Component {
  static navigationOptions = {
    headerStyle: {
      position: "absolute",
      top: 0,
      left: 0
    },
    headerBackTitleStyle: {
      opacity: 0
    },
    headerTintColor: "#fff"
  };

  constructor(props) {
    super(props);

    this.state = {
      _showAlert_value: "",
      _value: ""
    };
  }

  async _permissions() {

    try {
      permissions = [
        PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      ];
      const granted = await PermissionsAndroid.requestMultiple(permissions);

      Permissions.checkMultiple(['camera', 'photo', 'contacts', 'notification']).then(response => {
        //response is an object mapping type to permission
      })
    } catch (err) {
   
      console.warn(err);
    }

  }

  _showAlert(message, button) {
    Alert.alert("", message, [{ text: button, onPress: () => { } }], {
      cancelable: false
    });
  }

  _showAlertWithCallBack(message, positiveButton, positiveCallback) {
    Alert.alert(
      "",
      message,
      [{ text: positiveButton, onPress: () => positiveCallback() }],
      { cancelable: false }
    );
  }

  _showAlertTwoButtons(
    message,
    positiveButton,
    positiveCallback,
    negativeButton,
    negativeButtonCallBack
  ) {
    Alert.alert(
      "",
      message,
      [
        { text: positiveButton, onPress: () => positiveCallback() },
        { text: negativeButton, onPress: () => negativeButtonCallBack() }
      ],
      { cancelable: false }
    );
  } 

  _moveToHomePage =()=> {
    const resetAuthStack = StackActions.reset({
      index: 0,
      routeName: "stackNavigator",
      actions: [
        NavigationActions.navigate({routeName: 'Home'}),
    ]     
    });
    this.props.navigation.dispatch(resetAuthStack);  
  }

 


  render() {
    return <BarIndicator color="#036937" style={styles.progress} count={4} />;
  }
}

const styles = StyleSheet.create({
  progress: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.6)",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});
