import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from "react-native";

class MainScene extends Component {
    props: any;

    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.back}>
                    <Text>Hi! My name is MainScene.</Text>
                </TouchableOpacity>
            </View>
        )
    }

    back = () => {
        this.props.navigation.pop();
        //this.props.navigator.pop();
    }
}

module.exports = MainScene;