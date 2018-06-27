/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Root from './src/routes/routes';
import SInfo from "react-native-sensitive-info";

class App extends Component {

  componentDidMount() {
      SplashScreen.hide();
  }

  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentWillMount() {
    SInfo.getItem("MobileNo", {}).then(value => {
      if (value != "" && value != "null" && value != null) {
        this.setState({ signedIn: true, checkedSignIn: true })
      } else {
        this.setState({ signedIn: false, checkedSignIn: true })
      }
    });
  }
  render() {
    const { checkedSignIn, signedIn } = this.state;
    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Layout = Root(signedIn);
    return <Layout />;

  }
}

export default App;
