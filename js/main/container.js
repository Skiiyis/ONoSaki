'use strict';
import React, {Component} from 'react';
import {Alert, SectionList, StyleSheet, Text, View} from 'react-native';

class Container extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: 'D', data: [{key: 'david'}, {key: 'dopa'}]},
                        {title: 'J', data: [{key: 'json'}, {key: 'jackson'}, {key: 'joye'}]}
                    ]}
                    renderItem={
                        ({item}) => <Text style={styles.text}>{item.key}</Text>
                    }
                    renderSectionHeader={
                        ({section}) => <Text style={styles.button}>{section.title}</Text>
                    }
                >
                </SectionList>
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
        padding: 20,
        color: "red",
        backgroundColor: "yellow"
    }
});

module.exports = Container;