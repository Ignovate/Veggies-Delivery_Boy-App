import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,  
  TouchableOpacity
} from 'react-native';
const { width, height } = Dimensions.get('window');
import ServiceCall from '../../service/Service.js'
import SideMenu from '../../routes/SideMenu'
import SInfo from "react-native-sensitive-info";
import styles from './Style';
export default class Assigned extends Component {


  constructor(props) {
    super(props);
    instance = this;

    this.state = {
      FlatListItems: [],        
      isLoading:false,     
        }
  }

  _showProgress = () => {
    //this.setState({isLoading:true});
  }

  _hideProgress = () => {
   // this.setState({isLoading:false});
  }
  successCallback = (Response) => {
    var count = Object.keys(Response).length;
    var tempDataArray = [];
    for (var i = 0; i < count; i++) {
      if (Response[i].driver_status == null) {
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
  fetchData() {
    SInfo.getItem("Driver_ID", {}).then(value => {
      if (value != null) {       
        ServiceCall.getInstance().getHome(value, this.successCallback, this.errorCallback, this);
      }
    });
  }
  successPickUp = (res) => {  
   this.fetchData();
  }
  componentDidMount = () => {
    this.fetchData();
    SideMenu.fetchDetails();
  }
  GetPickup = (itemID) => {   
    SInfo.getItem("Driver_ID", {}).then(value => {
      if (value != null) {
        const req = {
          driver_id: value,
          status: "Picked Up",
          comment: "Item picked"
        }
        ServiceCall.getInstance().getPickUp(req, itemID, this.successPickUp, this.errorCallback, this);
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
                  {/* <Image source={require('./Images/right_arrow.png')} /> */}
                </View>
                <Text style={styles.item}>
                  {item.customer_name + ", " + item.store_name + ", " + item.phone} </Text>
              </View>
              <View style={{ flex: 0.4, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={() => this.GetPickup(item.id)}>
                  <Text style={styles.pickButton}>
                    {'PICKUP'} </Text>
                </TouchableOpacity>
              </View>
            </View>
          }
        />    :
          <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <Text style={styles.itemTitle}>No Orders Found</Text>
          </View>
      }     
      </View>
    );
  }
}

