/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {Provider} from "react-redux";

type State = {
    store: any;
};

function setup() {
    class Root extends Component {
        state: State;

        constructor() {
            super();
            this.state = {
                store:configureStore()
            }
        }

        render() {
            return (
                <Provider store={this.state.store}>
                    <App/>
                </Provider>
            );
        }
    }

    return Root;
}


global.log = (...args) => {
    console.log('------------------------------');
    console.log(...args);
    console.log('------------------------------');
    return args[args.length - 1];
};

module.exports = setup;

