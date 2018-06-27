import React, { Component } from 'react';
import { 
  View,
  Text,  
  FlatList,
  TouchableOpacity
} from 'react-native';
import ServiceCall from '../../service/Service';
import SInfo from "react-native-sensitive-info";
import styles from './Style';
export default class InProgress extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],     
      isLoading: false,
    }
  }

  successCallback = (Response) => {
    var count = Object.keys(Response).length;
    var tempDataArray = [];
    for (var i = 0; i < count; i++) {
      if (Response[i].driver_status == 'Picked Up' || Response[i].driver_status == 'Not Verified') {
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
  errorCallback = () => {
  }

  componentDidMount = () => {
    this.fetchData();
  }
  successCallbackverify = (Responses) => {     
    this.props.navigation.navigate('verify', { Response: Responses });
  }
  GetVerifyw = (key) => {
    ServiceCall.getInstance().getVerify(key, this.successCallbackverify, this.errorCallback, this);
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
  shouldComponentUpdate(){
    this.fetchData()
  return true;
  }

  render() {
    return (
      <View style={styles.MainContainer}>
       {
        this.state.FlatListItems.length>0?
        <FlatList
         // onRefresh={() => this.onRefresh()}
         // refreshing={this.state.isLoading}
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
                {/* <Text style={styles.itemTime}>
                  {'40 sec ago'} </Text> */}
                <TouchableOpacity onPress={() => this.GetVerifyw(item.id)} >
                  <Text style={styles.pickButton}>
                    {'VERIFY'} </Text>
                </TouchableOpacity >
              </View>
            </View>
          }
        />:
          <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <Text style={styles.itemTitle}>No Orders Found</Text>
          </View>}
       
      </View>
    );
  }
}

