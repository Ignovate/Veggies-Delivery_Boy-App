import React,{Component} from 'react';
import {
View,
StyleSheet,
Image,
Text,
Dimensions,
TouchableOpacity
}from 'react-native';
const { width, height } = Dimensions.get('window');

import LinearGradient from 'react-native-linear-gradient';

export default class CustomToolbar extends Component{
    constructor(props){
        super(props)
      }
    render(){
        return(
            <LinearGradient 
            start={{x: 0.0, y: 0.5}} 
            end={{x: 0.5, y: 1.0}}
            locations={[0.1, 0.75, 1]}
            colors={['#88CD40', '#ABD043', '#CED346']}
            style={styles.linearGradient}>           
            <View style={styles.container}>
            <View  style={styles.itemView}>
            <TouchableOpacity    
            style={{flex:0.2}}
              onPress={this.props.onPress}>
            <Image style={styles.arrow}            
                source={this.props.backarrow}/>
            </TouchableOpacity>
              <Text style={styles.titleText}>{this.props.title}</Text> 
            </View>
            <View style={styles.itemView1}>
                 <Image style={styles.logo} 
                source={this.props.logo}/>
                </View>
                 <View style={styles.itemView2}>
                 <TouchableOpacity    
                    onPress={this.props.onPresss}>
                 <Image style={styles.bell_icon} 
                source={this.props.bell}/>
                  </TouchableOpacity>
                </View>
            </View>
            </LinearGradient>
        );
    }
}
const styles=StyleSheet.create({   
    linearGradient:{
        width:width,
        height:height*(9/100),      
    },
    container:{
        flex: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin:2,
        marginLeft:5,
        marginRight:5,
    },
    logo:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bell_icon:{
        width:height/16,
        height:height/16, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemView:{
        flex:6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',      
    },
    itemView1:{
        flex:3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemView2:{
        flex:6,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    arrow:{
        marginLeft:10,
        width:width*8/100,
        height:width*6/100, 
        justifyContent: 'center',
        alignItems: 'flex-start',        
    },
    titleText:{
        flex:0.8,
        fontSize:Math.sqrt((height*height)+(width*width))*(2.7/100),
        color:'#006939',
        marginLeft:1,    
        fontFamily:'Montserrat',
        justifyContent: 'center',
        alignItems: 'center',         

    }
   

});