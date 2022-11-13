import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NAVIGATION} from '../../constants/navigationConstants';
import NewInvoice from '../../screens/NewInvoice';


const Stack = createStackNavigator();
class InvoiceStack extends React.Component {
	render() {
		return (
			<Stack.Navigator
				initialRouteName={NAVIGATION.Invoice}
				screenOptions={{
					headerShown: false,
					...TransitionPresets.SlideFromRightIOS,
					cardStyle: {
						backgroundColor: "#fff",
					},
					animationEnabled: true,
				}}
			>
				<Stack.Screen
					name={NAVIGATION.Invoice}
					component={NewInvoice}
				/>

			</Stack.Navigator>
		);
	}
}

export default InvoiceStack;
