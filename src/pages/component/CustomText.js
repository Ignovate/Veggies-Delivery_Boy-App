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

export default class CustomText extends Component{
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
            style={styles.linearGradient}
            >   
                <View style={styles.container}>
                <Text  style={this.props.style}>{this.props.text}</Text>
                </View>

            </LinearGradient>)
    }
}

const styles=StyleSheet.create({   
    linearGradient:{
        borderRadius: 5 ,    
    },
    container:{
        flex: 1,    
        borderRadius: 5 ,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
       
    },
});