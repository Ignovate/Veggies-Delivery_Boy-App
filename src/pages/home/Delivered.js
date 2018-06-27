import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    FlatList,
    TouchableOpacity
} from 'react-native';
import ServiceCall from '../../service/Service.js'
const { width, height } = Dimensions.get('window');
import SInfo from "react-native-sensitive-info";
import styles from './Style';
export default class Delivered extends Component {

    constructor(props) {
        super(props);
        this.state = {
            FlatListItems: [],
            driverID: '',
            isLoading: false,
        }
    }

    successCallbackverify = (Responses) => {

        this.props.navigation.navigate('payment', { Response: Responses });
    }
    GetPayment = (key) => {
        ServiceCall.getInstance().getVerify(key, this.successCallbackverify, this.errorCallback, this)

    }

    _showProgress = () => {
        // this.setState({
        //   isLoading: true
        // });
    }

    _hideProgress = () => {
        // this.setState({
        //   isLoading: false
        // });
    }

    successCallback = (Response) => {
        var count = Object.keys(Response).length;
        var tempDataArray = [];
        for (var i = 0; i < count; i++) {
            if (Response[i].driver_status == 'Delivered') {
                tempDataArray.push({
                    id: Response[i].id,
                    order_number: Response[i].order_number,
                    store_name: Response[i].store_name,
                    customer_name: Response[i].customer_name,
                    phone: Response[i].phone,
                    status: Response[i].status,
                    driver_status: Response[i].driver_status,
                });
            }
        }
        this.setState({
            FlatListItems: tempDataArray
        });
    }
    errorCallback = () => {

    }
    componentDidMount = () => {
        this.fetchData();
    }
    fetchData = () => {
        SInfo.getItem("Driver_ID", {}).then(value => {
            if (value != null) {
                ServiceCall.getInstance().getHome(value, this.successCallback, this.errorCallback, this);
            }
        });
    }
    // onRefresh = () => {
    //   this.setState({ isLoading: true }, function () {
    //     this.fetchData()
    //   });
    // }
    shouldComponentUpdate() {
        this.fetchData()
        return true;
    }
    render() {
        return (
            <View style={styles.MainContainer}>
                {
                    this.state.FlatListItems.length > 0 ?
                        <FlatList
                            // onRefresh={() => this.onRefresh()}
                            //refreshing={this.state.isLoading}
                            data={this.state.FlatListItems}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item }) =>
                                <View style={styles.cardview}>
                                    <View style={{ flex: 0.6, flexDirection: 'column', justifyContent: 'center' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={styles.itemTitle}>
                                                {item.order_number} </Text>
                                        </View>
                                        <Text style={styles.item}>
                                            {item.customer_name + ", " + item.store_name + ", " + item.phone} </Text>
                                    </View>
                                    <View style={{ flex: 0.4, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                      
                                        <TouchableOpacity>
                                            <Text style={styles.pickButton}>
                                                {item.driver_status} </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            } /> :
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.itemTitle}>No Orders Found</Text>
                        </View>}
            </View>
        );
    }
}

