import React, { Component } from "react";
import {
  View, 
  Text,
} from "react-native";

import ServiceCall from "../../service/Service.js";
import SmsListener from 'react-native-android-sms-listener'
import Base from '../home/Base';
import CodeInput from 'react-native-confirmation-code-input';
import SInfo from "react-native-sensitive-info";
import styles from '../login/Stylesss';
export default class OTPScreen extends Base {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
    this._onFulfill = this._onFulfill.bind(this);
    this.state = {
      otp: '',
      isLoading: false,
      session: ''
    }
  }

  componentDidMount() {
    this.setState({ session: this.props.navigation.state.params.Response });
    this.setState({ Driver: this.props.navigation.state.params.Driver });
    this.setState({ phone: this.props.navigation.state.params.phone });
    
    mySubScription = SmsListener.addListener(message => {
      // /Your password to Freshness is [\d]{6}. Use this as your OTP to gain access to Abundance of Freshness./
      let verificationCodeRegex = /[\d]{6}/;
      if (message.originatingAddress.substring(3) == "VEGGIE") {
        if (verificationCodeRegex.test(message.body)) {
          let verificationCode = message.body.match(verificationCodeRegex)[0];
          this.setState({
            code: verificationCode,
            code1: "*"
          });
          this._onFulfill(verificationCode);
        }
      }
    });
  }

  _sendSms=()=> {
    if (this.state.phone == "") {
      this._showAlert("Please enter Phone Number", "OK");
      return;
    }

    ServiceCall.getInstance().sendOTP(
      this.state.phone,
      this._sendOTPSuccess,
      this._sendOTPFailure,
      this,
    );
  }
  _sendOTPSuccess(responseData) {
    if (responseData.Status.toUpperCase() == "SUCCESS") {
      this.setState({ session: responseData.Details });
    } else if (responseData.Status.toUpperCase() == "ERROR") {
      this._showAlert(responseData.Details, "OK");
    }
  }

  _onFulfill = (code) => {    
    ServiceCall.getInstance().verifyOTP(
      code,
      this.state.session,
      this._verifyOTPSuccess,
      this._sendOTPFailure,
      this);
  }
  _verifyOTPSuccess = (responseData) => {       
    if (responseData.Status.toUpperCase() === "SUCCESS") {
      SInfo.setItem("MobileNo", this.state.phone, {});   
      SInfo.setItem("Driver_ID", this.state.Driver.data.id, {});
      SInfo.setItem("name", this.state.Driver.data.name, {});
      this._moveToHomePage();    
    } else if (responseData.Status.toUpperCase() === "ERROR") {
      this._showAlert(responseData.Details, "OK");
    }  
  }
  _sendOTPFailure() {

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

  render() {   
    return (
      <View style={styles.root}>       
        <View>
          <Text style={styles.otpText}>Enter OTP</Text>
          <View style={styles.codeInput}>
            <CodeInput
              ref="refName"
              autoFocus={false}
              activeColor={"#000000"}
              inactiveColor={"#C4C0BF"}
              keyboardType="numeric"
              className={"border-b"}
              space={8}
              size={24}
              codeLength={6}
              code={this.state.code}
              onFulfill={(code) => this._onFulfill(code)}
            >
              {this.state.code1}
            </CodeInput>
          </View>
          <Text style={styles.resendText} onPress={this._sendSms.bind(this)}>Resend Code</Text>
        </View>
        {this.state.progrstatus ? <Base /> : null}
      </View>
    );
  }
}


