import React from 'react';
import {TransitionPresets} from '@react-navigation/stack';
import {NAVIGATION} from '../../constants/navigationConstants';
import DashboardScreen from '../../screens/DashboardScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

class DashBoardStack extends React.Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName={NAVIGATION.Dashboard}
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
          cardStyle: {
            backgroundColor: "#fff",
          },
          animationEnabled: true,
        }}
      >
        <Stack.Screen name={NAVIGATION.Dashboard} component={DashboardScreen} />
      </Stack.Navigator>
    );
  }
}

export default DashBoardStack;
