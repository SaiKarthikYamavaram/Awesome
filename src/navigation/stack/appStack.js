import React, {useEffect, useState} from 'react';
import {NAVIGATION} from '../../constants/navigationConstants';
import BottomTab from '../tab/BottomTab';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../drawer/CustomDrawer';
import {Icon} from '@ui-kitten/components';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    const [branch, setBranch] = useState(null);
    const [branchList, setBranchList] = useState([]);

    useEffect(() => {
        //    todo update branch related API's according to screen if needed
    }, [branch]);

    useEffect(() => {
        //    todo replace with fetch branches from API
        setBranchList(getBranches());
    }, []);

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
                headerTitle: (props) => (<></>),
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

//todo delete this
const getBranches = () => [
    'branch1',
    'branch2',
    'branch3',
    'branch4',
    'branch5',
    'branch6',
    'branch7',
    'branch8',
    'branch9',
    'branch10',
];


export default AppStack;
