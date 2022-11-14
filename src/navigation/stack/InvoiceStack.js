import React from 'react';
import {TransitionPresets} from '@react-navigation/stack';
import {NAVIGATION} from '../../constants/navigationConstants';
import InvoiceScreen from '../../screens/InvoiceScreen';
import NewInvoice from '../../screens/NewInvoice';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

class InvoiceStack extends React.Component {
    render() {
        return (
            <Stack.Navigator
                initialRouteName={NAVIGATION.Invoice}
                screenOptions={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS,
                    cardStyle: {
                        backgroundColor: '#fff',
                    },
                    animationEnabled: true,
                }}
            >
                <Stack.Screen
                    name={NAVIGATION.Invoice}
                    component={InvoiceScreen}
                />

                <Stack.Screen
                    name={NAVIGATION.NewInvoice}
                    component={NewInvoice}
                />

            </Stack.Navigator>
        );
    }
}

export default InvoiceStack;
