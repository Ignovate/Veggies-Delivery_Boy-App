import React,{Component} from "react";
import {View,TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
//import Color from "../styles/Color";
import PropTypes from "prop-types";

class DrawerButton extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.navigate('DrawerOpen');
  }
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={() => this.toggleDrawer()}
        >
          <Icon name="md-menu" size={40} color="white" />
        </TouchableOpacity>
      </View>
    )
  }
}

export default DrawerButton;
