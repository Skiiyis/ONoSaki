'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fetchWeather} from "./fetchService";

type State = {
    text: string;
}

class Container extends Component {
    state: State;

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.text}</Text>
            </View>
        );
    }

    componentWillMount() {
        this.fetchTest();
    }

    componentDidMount() {
        console.debug(this.state.text);
    }

    fetchTest() {
        fetch('https://www.sojson.com/open/api/weather/json.shtml?city=北京',
            {
                method: 'GET',
            })
            .then((response) => response.json())
            .then((response) => {
                this.state.text = `北京，${response.data.wendu}度，空气质量${response.data.quality}`;
                this.setState(this.state);
                console.log(response);//1
            })
            .catch((err) => {//2
                console.error(err);
            });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        padding: 20,
        width: 500,
    },
    button: {
        padding: 20,
        color: "red",
        backgroundColor: "yellow"
    }
});

module.exports = Container;