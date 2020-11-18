/**
 * @format
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { fromLeft } from 'react-navigation-transitions';

import Splash from './app/Splash';
import Login from './app/Login';

class Main extends Component{
    constructor(){
        super();

        this.state = {currentScreen: 'Splash'};

        console.log('Running the 3 seconds!')
        setTimeout(()=>{
            console.log('Done 3 seconds')
            this.setState({currentScreen: 'Login'})

        },3000);
    }
    render(){

        const {currentScreen} = this.state;
        
        //let mainScreen = currentScreen === 'Splash' ? <Splash/> : <Login/>;
        
        let mainScreen = currentScreen === 'Splash' ? <Splash/> :  <Login/>;

        return mainScreen;        
    }
}

AppRegistry.registerComponent(appName, () => Main);
