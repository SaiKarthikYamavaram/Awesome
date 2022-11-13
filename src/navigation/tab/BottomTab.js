import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBoardStack from '../stack/DashboardStack';
import {NAVIGATION} from '../../constants/navigationConstants';
import ParcelStack from '../stack/ParcelStack';
import ReportStack from '../stack/ReportStack';
import {Icon, Text} from '@ui-kitten/components';

const Tab = createBottomTabNavigator();

const TabIcon = ({name, label = name, focused}) => (
    <>
        <Icon style={styles.icon} name={name} fill={focused ? '#3366ff' : '#8F9BB3'}/>
        <Text style={[styles.labelStyle, {
            color: focused ? '#3366ff' : '#8F9BB3',
            fontWeight: focused ? 'bold' : 'normal',
        }]}>{label}</Text>
    </>
);

class BottomTab extends React.Component {

    render() {
        return (
            <Tab.Navigator
                initialRouteName={NAVIGATION.DashboardTab}
                backBehavior='firstRoute'
                screenOptions={{
                    style: {
                        backgroundColor: '#4F9EAD',
                        height: 60,
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 10,
                    },
                    activeTintColor: '#165764',
                    inactiveTintColor: 'rgb(225,255,255)',
                    safeAreaInsets: {bottom: 7, top: 0},
                    keyboardHidesTabBar: true,
                    tabBarShowLabel: false,
                    headerShown: false,
                }}>
                <Tab.Screen
                    name={NAVIGATION.DashboardTab}
                    component={DashBoardStack}

                    options={() => ({
                        tabBarIcon: (parameters) => <TabIcon label='Dashboard' name='home' {...parameters} />,
                        tabBarHideOnKeyboard: true,
                    })}
                />
                <Tab.Screen
                    name={NAVIGATION.InvoiceTab}
                    component={ParcelStack}
                    options={() => ({
                        tabBarIcon: (parameters) => (
                            <TabIcon label='Invoice' name='book'  {...parameters} />
                        ),
                        tabBarHideOnKeyboard: true,


                    })}
                />
                <Tab.Screen
                    name={NAVIGATION.ParcelTab}
                    component={ParcelStack}
                    options={() => ({
                        tabBarIcon: (parameters) => (
                            <TabIcon label='Parcel' name='car'  {...parameters} />
                        ),
                        tabBarHideOnKeyboard: true,

                    })}
                />

                <Tab.Screen
                    name={NAVIGATION.ReportsTab}
                    component={ReportStack}
                    options={() => ({
                        tabBarIcon: (parameters) => (
                            <TabIcon label='Report' name='credit-card' {...parameters} />
                        ),
                        tabBarHideOnKeyboard: true,
                    })}
                />

            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 32,
        height: 32,
        paddingTop: 4,
    },
    labelStyle: {
        fontSize: 13,
    },
});

export default BottomTab;
