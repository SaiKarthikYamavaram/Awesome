import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NAVIGATION} from '../constants/navigationConstants';
import LoginScreen from '../screens/LoginScreen';
import AppStack from './stack/appStack';
import BottomSelector from '../components/BottomSelector';

const StackContainer = () => {
    const RootStack = createStackNavigator();
    return (
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName={NAVIGATION.LoginScreen}
                screenOptions={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS,
                    cardStyle: {
                        backgroundColor: '#fff',
                    },
                    animationEnabled: true,
                }}
            >
                <RootStack.Screen
                    name={NAVIGATION.LoginScreen}
                    component={LoginScreen}
                />
                <RootStack.Screen
                    name={NAVIGATION.App}
                    component={AppStack}
                />

            </RootStack.Navigator>
            <BottomSelector/>
        </NavigationContainer>
    );
};

export default StackContainer;
