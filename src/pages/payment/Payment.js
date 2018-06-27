import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    FlatList,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';
import Modal from "react-native-modal";

import ServiceCall from '../../service/Service';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import CustomToolbar from '../component/CustomToolbar.js';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');
import { ResFontSizes, ResWidth, ResHeight } from '../component/index.js';
import Base from '../home/Base';
import SInfo from "react-native-sensitive-info";
import styles from "../verify/Style";

export default class Payment extends Base {


    toFixedValue = (value) => {
        return parseFloat(Math.round(value * 100) / 100).toFixed(2);
    }

    constructor(props) {
        super(props);
        this.state = {
            ModalVisibleStatus: false,
            comment: '',
            toggle: '',
            onSelects: false,
            radio: true,
            isLoading: false
        }
    }
    _showProgress = () => {
        this.setState({
            isLoading: true
        });
    }

    _hideProgress = () => {
        this.setState({
            isLoading: false
        });
    }
    Continuebutton = () => {
        this.ShowModalFunction(true);
    }
    ShowModalFunction(visible) {
        this.setState({ ModalVisibleStatus: visible });
    }
    validation = () => {
        if (this.state.radio) {
            return false;
        } else {
            if (this.state.onSelects) {
                if (this.state.comment.length > 0) {
                    return true;
                }
                else {
                    return false;
                }
            } else {
                return true;
            }
        }

    }
    onSelect = (index) => {
        this.setState({ radio: false });
        if (index == 0) {
            this.setState({ onSelects: false });
            this.setState({ toggle: 'Delivered' });
        } else {
            this.setState({ onSelects: true });
            this.setState({ toggle: 'Pending Payment' });
        }
    }
    successPickUp = (res) => {
        this.ShowModalFunction(false);
        this.props.navigation.goBack();
    }
    errorCallback = () => {
        alert("error");
    }
    submitbutton = (itemID) => {

        SInfo.getItem("Driver_ID", {}).then(value => {
            if (value != null) {
                if (this.validation()) {
                    const bodys = {
                        driver_id: value,
                        status: this.state.toggle,
                        comment: this.state.comment
                    }
                    ServiceCall.getInstance().getPickUp(bodys, itemID, this.successPickUp, this.errorCallback, this);
                }
                else {
                    this._showAlert('Please Enter Comments', "OK")
                }
            }
        });
    }

    render() {
        const { state } = this.props.navigation;
        var ress = state.params.Response;

        if (this.state.ModalVisibleStatus) {
            return (
                <Modal
                    isVisible={this.state.ModalVisibleStatus}>
                    <View style={styles.modalContent}>

                        <Text style={styles.TextStyle}>Are you sure you want to proceed?</Text>
                        <RadioGroup
                            size={16}
                            activeColor='#848484'
                            color="#424242"
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                alignItems: 'center'
                            }}
                            onSelect={(index, value) => this.onSelect(index)}>
                            <RadioButton value={'0'} >
                                <Text style={{ textAlign: 'auto', fontFamily: 'Montserrat', fontSize: 16 }}>YES</Text>
                            </RadioButton>
                            <RadioButton value={'1'}>
                                <Text style={{ textAlign: 'auto', fontFamily: 'Montserrat', fontSize: 16 }}>NO</Text>
                            </RadioButton>
                        </RadioGroup>
                        <Text style={styles.TextStyle}>Leave a Message</Text>
                        <TextInput multiline={true}
                            underlineColorAndroid='transparent'
                            placeholder='Enter your comment here...'
                            onChangeText={(text) => this.setState({ comment: text })}
                            style={{ height: ResHeight(15), width: ResWidth(75), borderColor: 'gray', borderWidth: 1, marginTop: 5 }}
                            numberOfLines={4} />
                        <TouchableOpacity
                            style={styles.submitbutton}
                            onPress={() => this.submitbutton(ress.billing.parent_id)}>
                            <LinearGradient
                                style={styles.submitbutton}
                                start={{ x: 0.0, y: 0.5 }}
                                end={{ x: 0.5, y: 1.0 }}
                                locations={[0.1, 0.75, 1]}
                                colors={['#88CD40', '#ABD043', '#CED346']}>
                                <Text style={styles.buttonText}>
                                    SUBMIT</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    {
                        this.state.isLoading ? <Base /> : null
                    }
                </Modal>);
        }
        return (

            <View style={styles.container}>
                <View style={styles.screens}>
                    <View style={styles.ItemView1}>
                        <Text style={styles.ItemView1text}>Mode of Payment</Text>
                        <Text style={styles.ItemView1text}>{ress.payment_method.label}</Text>
                    </View>

                    {/* <View style={styles.cardview}>
                            <Text style={styles.modetext}>Mode of Payment</Text>
                            <View style={styles.radioview}>
                                <RadioGroup
                                    size={16}
                                    selectedIndex={0}
                                    color='#000'
                                    thickness={1}
                                    style={styles.radiostyles}>
                                    <RadioButton value={'Cash'} style={{ padding: 5 }} >
                                        <Text style={styles.radiotext}>Cash on delivery</Text>
                                    </RadioButton>
                                    <RadioButton value={'Card'} style={{ padding: 5 }}>
                                        <Text style={styles.radiotext}>Debit/ Credit Card</Text>
                                    </RadioButton>
                                    <RadioButton value={'Others'} style={{ padding: 5 }}>
                                        <Text style={styles.radiotext}>Others</Text>
                                    </RadioButton>
                                </RadioGroup>
                            </View>
                        </View> */}
                    <View style={styles.cardview1}>
                        <Text style={styles.modetext}>Amount to be Paid</Text>
                        <Text style={styles.paidtext}>&#x20B9; {this.toFixedValue(ress.grand_total)}</Text>
                    </View>
                    {/* <View style={styles.cardview}>
                            <Text style={styles.modetext}>Leave a Message</Text>
                            <TextInput style={styles.input} />
                        </View> */}
                </View>
                <TouchableOpacity
                    onPress={() => this.Continuebutton()}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.5 }}
                        end={{ x: 0.5, y: 1.0 }}
                        locations={[0.1, 0.75, 1]}
                        colors={['#88CD40', '#ABD043', '#CED346']}
                        style={styles.button}>
                        <Text style={styles.buttontext}>CONTINUE</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

        );
    }
}

