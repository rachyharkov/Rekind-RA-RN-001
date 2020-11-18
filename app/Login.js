import React from 'react';
import {AsyncStorage, View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Button} from 'react-native';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';

//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Homescreen';


const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	inputbox: {
		width: 300,
		backgroundColor: 'gray',
		borderRadius: 25,
		paddingHorizontal: 16,
		fontSize: 15,
		color: '#ffffff',
		marginVertical: 10,
		marginBottom: 10

	},

	btnlogin: {
		width:300,
		backgroundColor:'#1c313a',
		borderRadius: 25,
		marginVertical: 10,
		paddingVertical: 16,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
	},

	titleloginscreenwrapper: {
		position: 'absolute',
		left: 30,
		top: 100
	},

	titlelogin: {
		fontSize: 32
	},

	formloginwrapper: {
		position: 'absolute',
		top: 180
	},

	bottommessagewrapper: {
		position: 'absolute',
		bottom: 5
	},

	bottommessage: {
		fontSize: 12,
		textAlign: 'center',
		paddingHorizontal: 10,
		color: 'gray'
	}

});



export default class Login extends React.Component {
	emailInput = null;

	render() {

		return(
			<View style={styles.container}>

		      	<View style={styles.titleloginscreenwrapper}>
		  			<Text style={styles.titlelogin}>Welcome!</Text>
		  		</View>

		  		<Formik initialValues={{ email: '', password: ''}} validationSchema={Yup.object({email: Yup.string().required('Required').email('Invalid Email'), password: Yup.string().required('Required'),})} 

		  			onSubmit={(values, formikActions) => {
		  					setTimeout(() => {
		  						//Alert.alert(JSON.stringify(values));
		  						//LAKUKAN SESUATU
		  						alert('you input ' + values.email);
                  console.log('Login Button FIRED!');
		  						//formikActions.setSubmitting(false );

		  					}, 0);
		  				}}>
		  					
  				{ props => (

  						<View style={styles.formloginwrapper}>
					      	<TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email" placeholderTextColor="#ffffff" selectionColor="#fff" keyboardType='email-address' onChangeText={props.handleChange('email')} Value={props.values.email} returnKeyType='next' onSubmitEditing={() => { 
					      			//bagusnya kalo user teken enter langsung fokus ke kolom selanjutnya
					      			this.passwordInput.focus()
					      		}}/>

					      		{/*show errornya*/}
					      		
					      		{props.touched.email && props.errors.email ? (
					      			<Text style={{color: 'red'}}>{props.errors.email}</Text>
					      			): null}

					      	<TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Password" placeholderTextColor="#ffffff" selectionColor="#fff" secureTextEntry={true} onChangeText={props.handleChange('password')} ref={el => this.passwordInput = el }/>
					      		{props.touched.password && props.errors.password ? (
				                	<Text style={styles.error}>{props.errors.password}</Text>
				              		) : null}

					      <TouchableOpacity style={styles.btnlogin} onPress={props.handleSubmit} activeOpacity={0.5}>
  								<Text style={{color: 'white'}}>Login</Text>
  							 </TouchableOpacity>

				  		</View>
  					)}

  				</Formik>

  				

  				<View style={styles.bottommessagewrapper}>
		  			<Text style={styles.bottommessage}>If you find any trouble, please kindly to contact ICT Development Departement</Text>
		  		</View>

		    </View>
		)
	}
}