import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
    BackHandler
} from 'react-native';
import SInfo from "react-native-sensitive-info";
import ServiceCall from '../../service/Service.js'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');
import { ResFontSizes, ResWidth, ResHeight } from '../component/index.js';
import Base from '../home/Base';
import Modal from 'react-native-modal';
import styles from './Style';
export default class Verification extends Base {


    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {
            ModalVisibleStatus: false,
            comment: '',
            toggle: '',
            onSelects: false,
            radio: true,
            isLoading: false,

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
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    handleBackButtonClick() {
        this.ShowModalFunction(false);
        return true;
    }

    
    _onPressVerify = () => {
        this.ShowModalFunction(true);
    }

    ShowModalFunction(visible) {
        this.setState({ ModalVisibleStatus: visible });
    }
    successPickUp = (res) => {
        this.props.navigation.goBack();
        this.ShowModalFunction(false);
    }

    errorCallback = () => {
        alert("error");
    }
    onSelect = (index) => {
        this.setState({ radio: false });
        if (index == 0) {
            this.setState({ onSelects: false });
            this.setState({ toggle: 'Verified' });
        } else {
            this.setState({ onSelects: true });
            this.setState({ toggle: 'Not Verified' });
        }
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
    itemTotal = (ress) => {
        var sum = 0;
        for (var i = 0; i < ress.items.length; i++) {
            sum += parseInt(ress.items[i].row_total);
        }
        return parseFloat(Math.round(sum * 100) / 100).toFixed(2);
    }

    toFixedValue = (value) => {
        return parseFloat(Math.round(value * 100) / 100).toFixed(2);
    }


    render() {
        const { state } = this.props.navigation;
        var ress = state.params.Response;
        if (this.state.ModalVisibleStatus) {
            return (
                <Modal
                    isVisible={this.state.ModalVisibleStatus}
                // animationInTiming={1000}
                // animationOutTiming={1000}
                // backdropTransitionInTiming={500}
                // backdropTransitionOutTiming={1000}
                >

                    <View style={styles.modalContent}>

                        <Text style={styles.TextStyle}>All Products are verified?</Text>
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
                        <TextInput
                            multiline={true}
                            placeholder='Enter your comment here...'
                            underlineColorAndroid='transparent'
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
                </Modal>)

        }
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        < View style={styles.contain}>
                            <View style={styles.main}>
                                <View style={styles.ItemView}>
                                    <Text style={styles.title}>ORDER NO : </Text>
                                    <Text style={styles.title}>{ress.order_number}</Text>
                                </View>
                                <View style={styles.verifytext}>
                                    <Text style={styles.ItemView1text}>Mode of Delivery</Text>
                                    <Text style={styles.ItemView1text}>{ress.shipping_method.label}</Text>
                                </View>
                                <View style={styles.ItemView2}>
                                    <View style={styles.ItemView21}>
                                        <Text style={styles.ItemView2text}>Delivery Address</Text>
                                    </View>
                                    <Text style={styles.ItemView2text1}>{ress.shipping.street + ',\n' + ress.shipping.city + ', ' + ress.shipping.region + ',\n' + ress.shipping.postcode + '.\n Phone : ' + ress.shipping.telephone}</Text>

                                </View>
                                <View style={styles.ItemView2}>
                                    <View style={styles.ItemView21}>
                                        <Text style={styles.ItemView2text}>Product details</Text>
                                    </View>
                                    <View style={styles.ItemView31}>
                                        <Text style={styles.ItemView3text}>Products </Text>
                                        <Text style={styles.ItemView3text1}>Unit </Text>
                                        <Text style={styles.ItemView3text}>Price </Text>
                                    </View>
                                    <FlatList
                                        data={ress.items}
                                        keyExtractor={(item) => item.item_id}
                                        renderItem={({ item }) =>
                                            <View style={styles.ItemView31}>
                                                <Text style={styles.tbvalues1} > {item.product_name} </Text>
                                                <Text style={styles.tbvalues2} > {item.qty + " kg"} </Text>
                                                <Text style={styles.tbvalues1} >&#x20B9; {this.toFixedValue(item.row_total) + "/-"}</Text>
                                            </View>}
                                    />
                                    <View style={styles.underline} />
                                    <View style={styles.ItemView41}>
                                        <Text style={styles.tbvalue1} > {'Item Total'} </Text>
                                        <Text style={styles.tbvalue2} >&#x20B9; {this.itemTotal(ress)} </Text>
                                    </View>
                                    <View style={styles.ItemView41}>
                                        <Text style={styles.tbvalue1} > {'Tax'} </Text>
                                        <Text style={styles.tbvalue2} >&#x20B9; {this.toFixedValue(ress.tax_amount)} </Text>
                                    </View>
                                    <View style={styles.ItemView41}>
                                        <Text style={styles.tbvalue1} > {'Delivery Charges'} </Text>
                                        <Text style={styles.tbvalue2} >&#x20B9; {this.toFixedValue(ress.shipping_method.value)} </Text>
                                    </View>
                                    <View style={styles.underline} />
                                    <View style={styles.ItemView41}>
                                        <Text style={styles.totaltxt} > {'To Pay'} </Text>
                                        <Text style={styles.total} >&#x20B9; {this.toFixedValue(ress.grand_total)} </Text>
                                    </View>
                                    {/* <View style={styles.ItemView41}>
                                <Text style={styles.tbvalue1} > {'You Saved'} </Text>
                                <Text style={styles.tbvalue2} >&#x20B9; {'24.00'} </Text>
                            </View> */}
                                </View>
                            </View>

                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity onPress={this._onPressVerify}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.5 }}
                        end={{ x: 0.5, y: 1.0 }}
                        locations={[0.1, 0.75, 1]}
                        colors={['#88CD40', '#ABD043', '#CED346']}
                        style={styles.linearGradient}>
                        <Text style={styles.buttonText}>
                            VERIFY NOW
                            </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}

