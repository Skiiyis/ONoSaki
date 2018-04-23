'use strict';
import React, {Component} from 'react';
import {Alert, Button, CheckBox, Image, ScrollView, StyleSheet, Text, View} from 'react-native';

class Container extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.text}>Hello world!</Text>
                    <Text style={styles.text}>Hello world!</Text>
                    <Image source={require('./res/sunny.png')}/>
                    <Image source={require('./res/sunny.png')}/>
                    <Image source={require('./res/sunny.png')}/>
                    <Image source={require('./res/sunny.png')}/>
                    <Image source={require('./res/sunny.png')}/>
                    <Image source={require('./res/sunny.png')}/>
                    <Image source={require('./res/sunny.png')}/>
                    <Image source={require('./res/sunny.png')}/>
                    <Button color="red" title="Click Me" onPress={onButtonPress}/>
                    <CheckBox/>
                </ScrollView>
            </View>
        );
    }
}

const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        padding: 20,
        width: 500,
    },
    button: {
        color: "red",
        backgroundColor: "yellow"
    }
});

module.exports = Container;