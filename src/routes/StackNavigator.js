import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import IconAwesome from "react-native-vector-icons/FontAwesome";
import { StackNavigator } from "react-navigation";
import { Login, OTPScreen } from '../pages/login/index';
import Home from '../pages/home/Tabs';
import Verification from '../pages/verify/Verfication';
import Payment from '../pages/payment/Payment';
import DrawerButton from '../pages/component/DrawerButton';
import Style from '../styles/Style'
import { ResWidth } from '../pages/component'
export const stackNavigator = (signedIn = false) => {

    return StackNavigator(
        {
            login: {
                screen: Login,
                navigationOptions: {
                    headerLeft: null,
                    drawerLockMode: "locked-closed"
                }
            },
            otp: {
                screen: OTPScreen,
                navigationOptions: {
                    headerLeft: null,
                    drawerLockMode: "locked-closed"
                }
            },
            Home: {
                screen: Home,
                navigationOptions: {
                    headerTitle: (
                        <View style={{ flex: 1, alignItems: "center" }}>
                            <Image style={{ width: ResWidth(12), height: ResWidth(12) }} source={require('../../assets/icon.png')} />
                        </View>),
                    drawerLockMode: "locked-closed",
                    // headerLeft: (
                    // <DrawerButton navigationProps={ navigation } />),
                    headerStyle: Style.titleHeader,
                    headerTitleStyle: Style.headerTitle

                }
            },
            verify: {
                screen: Verification,
                navigationOptions: {
                    headerTitle: ('Verification'),
                    headerStyle: Style.titleHeader,
                    headerTitleStyle: Style.headerTitle
                }

            },
            payment: {
                screen: Payment,
                navigationOptions:
                {
                    headerTitle: ('Payment'),
                    headerStyle: Style.titleHeader,
                    headerTitleStyle: Style.headerTitle
                }

            }
        },

        {
            initialRouteName: signedIn ? "Home" : "login",
            headerMode: "screen",
            cardStyle: {
                backgroundColor: "transparent"
            }
        });

}
export default stackNavigator;