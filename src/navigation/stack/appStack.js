import React from 'react';
import {NAVIGATION} from '../../constants/navigationConstants';
import BottomTab from '../tab/BottomTab';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../drawer/CustomDrawer';
import {Icon, Layout, Text} from '@ui-kitten/components';
import {useDispatch, useSelector} from 'react-redux';
import {Pressable} from 'react-native';
import {showBottomSheet} from '../../redux/slice/counterSlice';

const Drawer = createDrawerNavigator();

const BranchHeader = () => {
    const currentBranch = useSelector((state) => state.counter.currentBranch);
    const dispatch = useDispatch();
    return (<Pressable onPress={() => dispatch(showBottomSheet())}>
        <Layout style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text category="h5">
                {currentBranch != null ? currentBranch : 'Select branch'}
            </Text>
            <Icon name="arrow-ios-downward-outline" fill='black' style={{width: 24, height: 24}}/>
        </Layout>
    </Pressable>);
};


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
                headerTitle: () => <BranchHeader/>,
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
