/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import App from './js/main/container'
import {Navigator} from "react-native-deprecated-custom-components";
import MainScene from "./js/main/main";
import SettingsScene from "./js/main/settings";

type State = {
    store: any;
};

export default class Root extends Component {
    state: State;

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <Navigator
                initialRoute={{name: "AppScreen", title: 'my first Screen'}}
                renderScene={(route, navigator) => {
                    if (route.name === "MainScene") {
                        return <MainScene navigator={navigator} route={route}/>
                    }
                    if (route.name === "SettingsScene") {
                        return <SettingsScene navigator={navigator} route={route}/>
                    }
                    return <App navigator={navigator} route={route}/>
                }}
            >
            </Navigator>
        );
    }
}


global.log = (...args) => {
    console.log('------------------------------');
    console.log(...args);
    console.log('------------------------------');
    return args[args.length - 1];
};

