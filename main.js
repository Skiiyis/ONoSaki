/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import App from './js/main/container'

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
            <App/>
        );
    }
}


global.log = (...args) => {
    console.log('------------------------------');
    console.log(...args);
    console.log('------------------------------');
    return args[args.length - 1];
};

