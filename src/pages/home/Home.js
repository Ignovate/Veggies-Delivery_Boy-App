
import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { 
  View,
  Platform,
  Image
} from "react-native";
import Tabs from './Tabs';
import styles from "../../styles/Style"
import LinearGradient from 'react-native-linear-gradient';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    
}
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          start={{ x: 0.0, y: 0.5 }}
          end={{ x: 0.5, y: 1.0 }}
          locations={[0.1, 0.75, 1]}
          colors={['#88CD40', '#ABD043', '#CED346']}
          style={{
            width: "100%",
            height: Platform.OS === 'ios' ? 64 : 50,
            alignItems: "center",
            justifyContent: "center",
            bottom: 0
          }}/>
            <Image
          source={require("../../../assets/icon.png")}
          style={styles.headerTitle}
        />
        <Tabs/>
      </View>
    );
  }
}




