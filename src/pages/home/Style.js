import { Platform, StyleSheet } from "react-native";
import { ResWidth, ResHeight, ResFontSizes } from '../component';
export default StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor:"#EEECEC"
      },
      cardview: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#ffffffff',
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 8,
        padding: 3,
        paddingRight:15,
      },
      itemTitle: {
        padding: 6,
        fontSize: ResFontSizes(2.5),
        fontFamily: 'Montserrat'
      },
      item: {
        padding: 6,
        fontSize:  ResFontSizes(2),
        fontFamily: 'Montserrat'
      },
      pickButton: {        
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        fontSize:  ResFontSizes(2.5),
        fontFamily: 'Montserrat',
        backgroundColor: '#fff898',
        color: '#00693e'
      }
});