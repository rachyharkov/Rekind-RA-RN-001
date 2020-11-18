import React from 'react';
import { AppRegistry, Text, View, Image, Animated, StyleSheet } from 'react-native';


const styles = StyleSheet.create({

	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ecf0f1'
	},

	splashtitle:{
		fontSize: 24,
		color: '#34495e',
		fontWeight: 'bold',
		position: 'absolute',
		bottom: 100
	}	

})

class Splash extends React.Component {
	render() {
		return(
			<View style={styles.container}>
		    	<Image source={require('./assets/Images/rekind-logo.png')} style={{width: 140, height: 200, marginTop: -100}} />
		      	<Text style={styles.splashtitle}>Rekind Attendance</Text>
    		</View>
		)
	}
}

export default Splash;