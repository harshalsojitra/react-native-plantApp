import React from 'react';
import {Image} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Forgot from '../screens/Forgot';
import Browse from '../screens/Browse';
import Explore from '../screens/Explore';
import Settings from '../screens/Settings';
import Product from '../screens/Product';

import { theme } from '../constants';

const screens = createStackNavigator({
	Welcome,
	Login,
	SignUp,
	Forgot,
	Explore,
	Settings,
	Browse,
	Product
} , {
	defaultNavigationOptions: {
		headerStyle: {
			height: theme.sizes.base * 4,
			backgroundColor: theme.colors.white,
			borderBottomColor: "transparent",
			elevation: 0,
		},
		headerBackImage: <Image source={require('../assets/icons/back.png')} />,
		headerBackTitle: null,
		headerLeftContainerStyle: {
			alignItems: 'center',
			marginLeft: theme.sizes.base * 2,
			paddingRight: theme.sizes.base,
		},
		headerRightContainerstyle: {
			alignItems: 'center',
			paddingRight: theme.sizes.base,
		},

	}
});

export default createAppContainer(screens);
