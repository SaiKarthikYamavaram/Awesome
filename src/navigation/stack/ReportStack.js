import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NAVIGATION} from '../../constants/navigationConstants';
import NewInvoice from '../../screens/NewInvoice';

const Stack = createStackNavigator();
class ReportStack extends React.Component {
	render() {
		return (
			<Stack.Navigator
				initialRouteName={NAVIGATION.Reports}
				screenOptions={{
					headerShown: false,
					...TransitionPresets.SlideFromRightIOS,
					cardStyle: {
						backgroundColor: "#fff",
					},
					animationEnabled: true,
				}}>
				<Stack.Screen
					name={NAVIGATION.Reports}
					component={NewInvoice}
				/>


			</Stack.Navigator>
		);
	}
}

export default ReportStack;
