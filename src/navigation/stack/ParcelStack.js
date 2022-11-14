import React from 'react';
import {TransitionPresets} from '@react-navigation/stack';
import {NAVIGATION} from '../../constants/navigationConstants';
import NewInvoice from '../../screens/NewInvoice';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Program = createNativeStackNavigator();

const ParcelStack = () => {
  return (
    <Program.Navigator
      initialRouteName={NAVIGATION.Parcel}
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
        cardStyle: {
          backgroundColor: "#fff",
        },
        animationEnabled: true,
      }}
    >
      <Program.Screen
        name={NAVIGATION.Parcel}
        component={NewInvoice}
      />
    </Program.Navigator>
  );
};

export default ParcelStack;
