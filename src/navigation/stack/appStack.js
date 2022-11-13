import React from 'react';
import {NAVIGATION} from '../../constants/navigationConstants';
import BottomTab from '../tab/BottomTab';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../drawer/CustomDrawer';
import {Icon} from '@ui-kitten/components';

const Drawer = createDrawerNavigator();

const AppStack = () => {

    return (
        <Drawer.Navigator
            initialRouteName={NAVIGATION.BottomTab}
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                drawerActiveBackgroundColor: '#3366ff',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontFamily: 'Roboto-Medium',
                    fontSize: 15,
                },
            }}>
            <Drawer.Screen name={NAVIGATION.BottomTab} options={{
                drawerIcon: ({color}) => (
                    <Icon name='home-outline' style={{width: 24, height: 24}} fill={color}/>
                ),
                title: 'DashBoard',
                drawerLabel: 'Dashboard',
            }} component={BottomTab}/>
        </Drawer.Navigator>
    );
};


export default AppStack;
