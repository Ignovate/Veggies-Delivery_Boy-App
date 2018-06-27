import { Platform, StyleSheet } from "react-native";
import { ResWidth, ResHeight, ResFontSizes } from '../component';
export default StyleSheet.create({
    contain: {
        flex: 1,
        marginBottom: ResHeight(5),
    },
    main: {
        margin: 10,
    },
    ItemView: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    ItemView2: {
        padding: 10,
        marginTop: 10,
        flexDirection: 'column',
        backgroundColor: '#ffffffff',
        borderWidth: 0.3,
        borderRadius: 3,
        borderColor: '#ddd',
        borderBottomWidth: 0.3,
        shadowColor: '#BBBDBE',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 3,
    },
    ItemView3: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    ItemView21: {
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: ResFontSizes(2.5),
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
    },
    ItemView1text: {
        fontSize: ResFontSizes(2),
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
    },
    ItemView2text: {
        fontSize: ResFontSizes(2.5),
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ItemView2text1: {
        fontSize: ResFontSizes(2),
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
    },
    ItemView3text: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: ResFontSizes(2),
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
    },
    ItemView3text1: {
        flex: 0.2,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: ResFontSizes(2),
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
    },
    ItemView31: {
        width: ResWidth(80),
        paddingTop: 6,
        marginLeft: ResWidth(5),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    tbvalue1: {
        flex: 0.7,
        fontSize: ResFontSizes(2),
        paddingRight: 20,
        textAlign: 'right',
        fontFamily: 'Montserrat',
    },
    tbvalue2: {
        flex: 0.3,
        justifyContent: 'flex-end',
        fontSize: ResFontSizes(2),
        fontFamily: 'Montserrat',
    },
    totaltxt: {
        flex: 0.7,
        fontSize: ResFontSizes(2),
        paddingRight: 20,
        textAlign: 'right',
        fontFamily: 'Montserrat',
        fontWeight: 'bold'
    },
    total: {
        flex: 0.3,
        justifyContent: 'flex-end',
        fontSize: ResFontSizes(2),
        fontFamily: 'Montserrat',
        fontWeight: 'bold'
    },
    underline: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 1,
        backgroundColor: '#000000'
    },
    ItemView41: {
        flex: 1,
        paddingTop: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    tbvalues1: {
        flex: 0.4,
        textAlign: 'center',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: ResFontSizes(2),
        fontFamily: 'Montserrat',
    },
    tbvalues2: {
        flex: 0.2,
        textAlign: 'center',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: ResFontSizes(2),
        fontFamily: 'Montserrat',
    },

    buttonText: {
        fontSize: ResFontSizes(2.5),
        fontFamily: 'Montserrat',
        textAlign: 'center',
        padding: 10,
        color: '#006939',
        backgroundColor: 'transparent',
    },
    linearGradient: {
        width: ResWidth(100),
        height: ResHeight(7),
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextStyle: {
        padding: 5,
        fontFamily: 'Montserrat',
        textAlign: 'center',
        fontSize: ResFontSizes(3),
        color: "#000000",
    },
    submitbutton: {
        width: ResWidth(75),
        height: ResHeight(8),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },

    container: {
        flex: 1,
    },
    screens: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    button: {
        width: ResWidth(100),
        height: ResHeight(7),
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    buttontext: {
        fontSize: ResFontSizes(2.5),
        fontFamily: 'Montserrat',
        color: '#006939',
    },

    cardview1: {
        marginTop: 15,
        width: ResWidth(95),
        height: '25%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#ffffffff',
        borderWidth: 0.3,
        borderRadius: 3,
        borderColor: '#ddd',
        borderBottomWidth: 0.3,
        shadowColor: '#BBBDBE',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 3,
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 15,
        paddingLeft: 15,
    },
    modetext: {
        flex: 1.5,
        fontSize: ResFontSizes(2.5),
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        color: '#000',
    },
    radioview: {
        flex: 3.5,
        width: '100%',
        flexDirection: 'column',

    },
    radiostyles: {
        flex: 1,
        flexDirection: 'column',

    },
    radiotext: {
        fontSize: 16,
        fontFamily: 'Montserrat',
        color: '#000',
    },
    paidtext: {
        flex: 1,
        fontSize: ResFontSizes(2),
        fontFamily: 'Montserrat',
        color: '#707171',
    },

    ItemView1: {
        width: ResWidth(95),
        padding: 10,
        height: '15%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffffff',
        borderWidth: 0.3,
        borderRadius: 3,
        borderColor: '#ddd',
        borderBottomWidth: 0.3,
        shadowColor: '#BBBDBE',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 3,
        paddingTop: 15,
        paddingBottom: 15

    },
    verifytext: {

        padding: 10,
        height: '15%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffffff',
        borderWidth: 0.3,
        borderRadius: 3,
        borderColor: '#ddd',
        borderBottomWidth: 0.3,
        shadowColor: '#BBBDBE',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 3,
        paddingTop: 15,
        paddingBottom: 15

    },



});