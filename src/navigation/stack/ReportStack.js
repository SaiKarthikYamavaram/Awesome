import React from 'react';
import {TransitionPresets} from '@react-navigation/stack';
import {NAVIGATION} from '../../constants/navigationConstants';
import NewInvoice from '../../screens/NewInvoice';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
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
