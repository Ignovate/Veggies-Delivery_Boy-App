import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import Base from "../home/Base.js";
import LinearGradient from 'react-native-linear-gradient';
import { ResFontSizes, ResWidth, ResHeight } from '../component/index.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ServiceCall from '../../service/Service';
import styles from '../login/Stylesss';

export default class Login extends Base {

    static navigationOptions = {
        header: null,
    }
    constructor(props) {
        super(props);
        this._showProgress = this._showProgress.bind(this);
        this._hideProgress = this._hideProgress.bind(this);
      
        this.state = {
            name: '',
            mobile: '',
            isLoading: false,
            DriverResponse: ''

        }
    }

    _showProgress() {
        this.setState({
            isLoading: true
        });
    }

    _hideProgress() {
        this.setState({
            isLoading: false
        });
    }

    phonenumber = () => {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (this.state.mobile.match(phoneno)) {
            return true;
        }
        else if (this.state.mobile == undefined) {
            return false;
        } else {
            return false;
        }
    }


    successCallbackOTP = (response) => {      
         
        this.props.navigation.navigate('otp', { Response: response.Details, Driver: this.state.DriverResponse,phone:this.state.mobile });
    }

    errorCallbackOTP = (response) => {
        
    }


    successCallback = (v) => {
        this.setState({ DriverResponse: v });
        ServiceCall.getInstance().sendOTP(this.state.mobile, this.successCallbackOTP, this.errorCallbackOTP,this);

    }

    errorCallback = (v) => {
        this._hideProgress();
        alert("error");
    }

    _onPressLogin = () => {
        if (this.phonenumber()) {          
            ServiceCall.getInstance().getDriverDetails(this.state.mobile, this.successCallback, this.errorCallback,this);
        } else {
            this._showAlert("Enter Your Phone Number","OK");   
        }

    }

    render() {
        return (
            <KeyboardAwareScrollView >
                <View style={styles.contain}>
                    <Image
                        style={styles.image1}
                        source={require('../../../assets/icon.png')}
                        resizeMode="stretch" />
                    <View style={styles.inputView}>
                        <TextInput
                            placeholder="Mobile Number"
                            underlineColorAndroid='transparent'
                            returnKeyType="done"
                            maxLength={10}
                            keyboardType={'phone-pad'}
                            onChangeText={text => this.setState({ mobile: text })}
                            style={styles.TextInput} />
                    </View>
                    <View style={styles.line} />
                    <TouchableOpacity onPress={this._onPressLogin}>
                        <LinearGradient
                             start={{ x: 0.0, y: 1.0 }}
                             end={{ x: 1.0, y: 1.0 }}
                            colors={['#006838', '#5B9502']}
                            style={styles.linearGradient}>
                            <Text style={styles.buttonText}>
                                Get OTP
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    {
                        this.state.isLoading ? <Base /> : null
                    }
                </View>

            </KeyboardAwareScrollView>

        );

    }
}

