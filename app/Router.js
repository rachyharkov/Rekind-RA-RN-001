import { StackNavigator } from "react-navigation";

import Login from "./Login";
import HomeScreen from "./Homescreen";

export const LamanLogin = StackNavigator({

	Login: {
		screen: Login,
		navigationOptions: {
			title: "Welcome"
		}
	}

})