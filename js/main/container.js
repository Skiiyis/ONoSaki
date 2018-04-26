'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {ACTIONS} from "./reducers";

type Props = {
    text: string;
    fetchWeather: any;
};

class Container extends Component {
    props: Props;

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.text}</Text>
                <TouchableOpacity onPress={this.props.fetchWeather}>
                    <Text style={styles.text}>点击加载天气情况</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.weather.text
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeather: bindActionCreators(fetchWeather, dispatch),
    };
};

const fetchWeather = () => {
    return (dispatch, state) => {
        console.debug("fetchWeather");
        dispatch({
            type: ACTIONS.LOADING_WEATHER
        });
        fetch('https://www.sojson.com/open/api/weather/json.shtml?city=北京',
            {
                method: 'GET',
            })
            .then((response) => response.json())
            .then((response) => {
                dispatch({
                    type: ACTIONS.LOAD_WEATHER_SUCCESS,
                    data: response.data
                })
            })
            .catch((err) => {//2
                dispatch({
                    type: ACTIONS.LOAD_WEATHER_FAILURE,
                    error: err
                })
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

export default connect(mapStateToProps, mapDispatchToProps)(Container);