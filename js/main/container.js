'use strict';
import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

class Container extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hello world!</Text>
                <Text style={styles.text}>Hello world!</Text>
                <Image source={require('./res/sunny.png')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        padding: 20,
        width: 500,
    }
});

module.exports = Container;