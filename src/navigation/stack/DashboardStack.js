import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NAVIGATION} from '../../constants/navigationConstants';
import DashboardScreen from '../../screens/DashboardScreen';


const Stack = createStackNavigator();

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
