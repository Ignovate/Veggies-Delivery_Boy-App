import { Platform,StyleSheet } from "react-native";
import { Color } from "../styles/Color";
import {ResWidth,ResHeight,ResFontSizes} from '../pages/component';

export default StyleSheet.create({
  headerView: {
    flexDirection: "row"
  },
  headerTitle: {    
    position: 'absolute',    
    alignSelf: "center",
    resizeMode: "center", 
    fontSize:ResFontSizes(2.5), 
   
  },
  titleHeader: {  
    flex:1,
    backgroundColor: '#5B9502',     
    ...Platform.select({
      ios: {
        borderBottomWidth: 0
      }
    }),
   
  },
  navigationTitle: {
    fontWeight: "200",
    fontSize: 24,
    color: Color.white,
    alignSelf: "center",
    marginLeft: 15,
  },
  navigationHeader: {
    elevation: 0,
    shadowOpacity: 0,
    shadowColor: "transparent",
    backgroundColor: Color.white,
    borderBottomWidth: 0
  },
  icons: {
    padding: 5,
    marginLeft: 10
  },
  rightIcon: {
    marginRight: 20,
    color: Color.white
  },
  rightlastIcon: {
    marginRight: 30,
    color: Color.white, 
  },
  rightlastText: {
    marginRight: 20,
    color: Color.white
  }
});
