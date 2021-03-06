/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import App from './js/main/container'
import MainScene from "./js/main/main";
import SettingsScene from "./js/main/settings";
import SignInScene from "./js/main/signin";
import {StackNavigator} from "react-navigation";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "./js/main/reducers";
import {Provider} from "react-redux";
import {createLogger} from "redux-logger";

type State = {
    store: any;
};

const Navs = StackNavigator(
    {
        Container: {screen: App},
        Main: {screen: MainScene},
        Settings: {screen: SettingsScene},
        SignIn: {screen: SignInScene}
    }, {
        initialRouteName: "SignIn",
        headerMode: "none",
    }
);

export default class Root extends Component {
    state: State;

    constructor() {
        super();
        this.state = {}
    }

    render() {
        var store = applyMiddleware(thunk, createLogger())(createStore)(reducers);
        return (
            <Provider store={store}>
                <Navs/>
            </Provider>
            /*<Navigator
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
        </Navigator>*/
        );
    }
}


global.log = (...args) => {
    console.log('------------------------------');
    console.log(...args);
    console.log('------------------------------');
    return args[args.length - 1];
};

