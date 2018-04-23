'use strict';
import React, {Component} from 'react';
import {Alert, Button, CheckBox, FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native';

class Container extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: "john snow"},
                        {key: "john lanrcelot"},
                        {key: "john joy"},
                        {key: "john helloKetty"},
                        {key: "john snow"},
                        {key: "john lanrcelot"},
                        {key: "john joy"},
                        {key: "john helloKetty"},
                        {key: "john snow"},
                        {key: "john lanrcelot"},
                        {key: "john joy"},
                        {key: "john helloKetty"},
                        {key: "john snow"},
                        {key: "john lanrcelot"},
                        {key: "john joy"},
                        {key: "john helloKetty"},
                        {key: "john snow"},
                        {key: "john lanrcelot"},
                        {key: "john joy"},
                        {key: "john helloKetty"},
                        {key: "john snow"},
                        {key: "john lanrcelot"},
                        {key: "john joy"},
                        {key: "john helloKetty"},
                        {key: "john snow"},
                        {key: "john lanrcelot"},
                        {key: "john joy"},
                        {key: "john helloKetty"},
                    ]}
                    renderItem={({item}) => <Text style={styles.text}>{item.key}</Text>}
                >
                </FlatList>
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