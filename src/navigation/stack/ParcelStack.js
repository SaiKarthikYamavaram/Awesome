import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NAVIGATION} from '../../constants/navigationConstants';
import NewInvoice from '../../screens/NewInvoice';

const Program = createStackNavigator();

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
