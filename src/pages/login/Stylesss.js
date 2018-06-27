import { Platform, StyleSheet } from "react-native";
import { ResWidth, ResHeight, ResFontSizes } from '../component';
export default StyleSheet.create({
    contain: {
        width: ResWidth(100),
        height: ResHeight(100),
        backgroundColor: "#FDFA91",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputView: {
        marginTop: ResHeight(4),
        width: ResWidth(90),
        backgroundColor: "#FDFA91",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextInput: {
        textAlign: 'left',
        height: ResHeight(8),
        borderWidth: 1,
        fontSize: ResFontSizes(2),
        marginTop: ResHeight(3),
        fontFamily: 'Montserrat',
        width: ResWidth(80),
        borderColor: '#FFFFFF',
        borderRadius: 5,
        backgroundColor: "#FFFFFF",
        paddingLeft: 8,

    },
    linearGradient: {
        width: ResWidth(80),
        marginTop: ResHeight(3),
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 15,
    },
    buttonText: {
        fontSize: ResFontSizes(2.5),
        fontFamily: 'Montserrat',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    line: {
        marginTop: ResHeight(3),
        width: ResWidth(80),
        height: 1.5,
        backgroundColor: '#88CD40',
    },
    image1: {
        width: ResWidth(45),
        height: ResWidth(45),
        alignSelf: "center",
    },
    root: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#FDFA91",
    },
    otpText: {
        alignSelf: "center",
        backgroundColor: "transparent",
        fontSize: ResFontSizes(2.5),
        marginBottom: "5%",
        fontWeight: "bold",
        color: "green"

    },
    codeInput: {       
        alignSelf: "center",
        width: ResWidth(50),
        height: ResHeight(10),
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
        padding: 6,
      },
      resendText: {
        alignSelf: "center",
        backgroundColor: "transparent",
        fontSize: 18,
        marginTop: 20,
        color: "blue"
      },

});