import {
    TouchableOpacity
} from 'react-native'
import { TabNavigator } from 'react-navigation'; 
import Assigned from './Assigned';
import InProgress from './InProgress';
import Verified from './Verified';
import Delivered from './Delivered';
import { ResFontSizes, ResHeight } from '../component/index.js';

const Tabs = TabNavigator(
    {
        Assigned: { screen: Assigned,
            navigationOptions: { title: 'Assigned' } },
        PickedUp: { screen: InProgress,
            navigationOptions: { title: 'Picked Up' } },
        Verified: { screen: Verified ,
            navigationOptions: { title: 'Verified' }},
        Delivered: { screen: Delivered,
            navigationOptions: { title: 'Delivered' } },
    },
    {
        headerMode: "none",
        initialRouteName: 'Assigned',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            scrollEnabled: true,
            indicatorStyle: {
                backgroundColor: "#00693e"
            },
            activeTintColor: '#00693e',
            inactiveTintColor: '#00693e',
            labelStyle: {
                fontSize: ResFontSizes(2),
                fontWeight: 'bold',
                fontFamily: 'Montserrat'
            },
            style: {
                backgroundColor: '#FFF88A',
                height: ResHeight(7),
            },
        },
    }
);

export default Tabs;