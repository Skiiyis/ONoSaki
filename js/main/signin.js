'use strict';
import React, {Component} from 'react';
import {Dimensions, Image, ImageBackground, ScrollView, Slider, StyleSheet, Text, View} from "react-native";

class SignInScene extends Component {
    props: any;

    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Image style={styles.banner} source={require('./res/sign-in-banner.png')}/>
                        <View style={styles.card}>
                            <Text style={styles.activityTitle}>五月我已持续分享5天</Text>
                            <Slider style={styles.slider}
                                    thumbTintColor="#FDD000"
                                    minimumTrackTintColor="#eee"
                                    thumbImage={require('./res/progress-icon.png')}
                                    maximumTrackTintColor="#FDD000"/>
                            <Text style={styles.activityDesc}>1000名书友已完成本期分享</Text>
                            <Image style={[styles.question]} source={require('./res/question.png')}/>
                            <View style={[styles.giftBg]}/>
                            <Image style={[styles.gift]} source={require('./res/gift.png')}/>
                            <Text style={styles.prizeCount}>限量1000份</Text>
                            <Text style={styles.needSharedDays}>21天</Text>
                        </View>
                        <View style={[styles.card, {marginTop: 15}]}>
                            <View style={[{
                                flexDirection: "row",
                                marginTop: 23,
                                justifyContent: "center"
                            }]}>
                                <Image style={[styles.point, {marginRight: 10}]}
                                       source={require('./res/title-point.png')}/>
                                <View>
                                    <Text style={styles.giftCardTitle}>
                                        奖品未领取
                                    </Text>
                                    <Text style={[styles.giftCardTitle, {fontWeight: "normal", marginTop: -2}]}>
                                        《你就是孩子最好的礼物》1本还未领
                                    </Text>
                                </View>
                                <Image style={[styles.point, {marginLeft: 10}]}
                                       source={require('./res/title-point.png')}/>
                            </View>
                            <Text style={[styles.giftCardDesc]}>
                                请在6月1日24点前填写收货地址，逾期失效
                            </Text>
                            <Text style={[styles.giftCardGetGift]}>
                                领取奖品
                            </Text>
                            <Image style={[styles.question]} source={require('./res/question.png')}/>
                        </View>
                        <View style={[styles.card, {marginTop: 15, marginBottom: 15}]}>
                            <View style={[{marginTop: 23, marginBottom: 23}]}>
                                <Text style={styles.giftCardTitle}>
                                    21天累计分享赢奖品
                                </Text>
                                <Text style={[styles.giftCardTitle, {
                                    color: "#B2B2B2",
                                    fontWeight: "normal",
                                    marginTop: 8,
                                    marginBottom: 10,
                                }]}>
                                    活动时间：北京时间5月1日-5月31日
                                </Text>
                                <Text style={[styles.giftCardGetGift, {marginBottom: 0, marginTop: 0}]}>
                                    开通VIP参与活动
                                </Text>
                            </View>
                            <Text style={styles.nextActivityText}>活动预热</Text>
                            <Image style={[styles.question]} source={require('./res/question.png')}/>
                        </View>
                        <View style={[{backgroundColor: "white", padding: 15}]}>
                            <Text style={[styles.activityTitle, {
                                marginTop: 0,
                                marginLeft: 0,
                                fontSize: 16,
                                fontWeight: "normal"
                            }]}>
                                我的积分：1000分
                            </Text>
                            <Text style={[styles.market]}>
                                积分商城
                            </Text>
                            <Text style={styles.pointCardText}>
                                已连续签到
                            </Text>
                            <View style={{alignSelf: "center", flexDirection: "row"}}>
                                <Text style={[styles.pointCardText, {fontSize: 40, marginTop: 0}]}>2</Text>
                                <Text style={[styles.pointCardText, {
                                    alignSelf: "flex-end",
                                    marginLeft: 4,
                                    marginBottom: 8
                                }]}>天</Text>
                            </View>
                            <Text style={[styles.pointCardText, {marginTop: 0, color: "#B2B2B2"}]}>
                                连续签到7日后每日得7分
                            </Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    marginTop: 13,
                                    justifyContent: "space-around",
                                    width: "auto"
                                }}>
                                <ImageBackground style={{width: 26, height: 26}}
                                                 source={require('./res/signin-serial-day-text-bg.png')}>
                                    <Text style={styles.signInDaysText}>
                                        +1
                                    </Text>
                                </ImageBackground>
                                <ImageBackground style={{width: 26, height: 26}}
                                                 source={require('./res/signin-serial-day-text-bg-disable.png')}>
                                    <Text style={styles.signInDaysText}>
                                        +2
                                    </Text>
                                </ImageBackground>
                                <ImageBackground style={{width: 26, height: 26}}
                                                 source={require('./res/signin-serial-day-text-bg-disable.png')}>
                                    <Text style={styles.signInDaysText}>
                                        +3
                                    </Text>
                                </ImageBackground>
                                <ImageBackground style={{width: 26, height: 26}}
                                                 source={require('./res/signin-serial-day-text-bg-disable.png')}>
                                    <Text style={styles.signInDaysText}>
                                        +4
                                    </Text>
                                </ImageBackground>
                                <ImageBackground style={{width: 26, height: 26}}
                                                 source={require('./res/signin-serial-day-text-bg-disable.png')}>
                                    <Text style={styles.signInDaysText}>
                                        +5
                                    </Text>
                                </ImageBackground>
                                <ImageBackground style={{width: 26, height: 26}}
                                                 source={require('./res/signin-serial-day-text-bg-disable.png')}>
                                    <Text style={styles.signInDaysText}>
                                        +6
                                    </Text>
                                </ImageBackground>
                                <ImageBackground style={{width: 26, height: 26}}
                                                 source={require('./res/signin-serial-day-text-bg-disable.png')}>
                                    <Text style={styles.signInDaysText}>
                                        +7
                                    </Text>
                                </ImageBackground>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.title}>
                    <View style={[styles.buttonBackground, {marginLeft: 12}]}/>
                    <View style={[styles.buttonBackground, {marginRight: 12}]}/>
                </View>
                <View style={styles.title}>
                    <Image style={[styles.button, {marginLeft: 12}]}
                           source={require('./res/back-icon.png')}/>
                    <Image style={[styles.button, {marginRight: 12}]}
                           source={require('./res/share-icon.png')}/>
                </View>
            </View>
        )
    }
}

const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    banner: {
        width: windowWidth,
        height: windowWidth,
    },
    giftCardGetGift: {
        fontSize: 14,
        alignSelf: "center",
        color: "#030303",
        textAlign: "center",
        marginTop: 10,
        minWidth: 150,
        marginBottom: 25,
        borderWidth: 1,
        padding: 10,
        borderColor: "#030303",
        borderRadius: 20,
    },
    signInDaysText: {
        width: 26,
        height: 26,
        fontSize: 12,
        textAlign: "center",
        textAlignVertical: "center",
    },
    giftCardDesc: {
        fontSize: 14,
        alignSelf: "center",
        color: "#B2B2B2",
        marginTop: 3,
    },
    giftCardTitle: {
        color: "#4C4948",
        fontSize: 14,
        alignSelf: "center",
        fontWeight: "bold",
    },
    activityTitle: {
        color: "#4C4948",
        fontSize: 17,
        marginLeft: 15,
        marginTop: 10,
        fontWeight: "bold",
    },
    pointCardText: {
        color: "#4C4948",
        alignSelf: "center",
        marginTop: 15
    },
    market: {
        color: "#4C4948",
        fontSize: 14,
        position: "absolute",
        right: 15,
        top: 15,
        borderRadius: 20,
        borderColor: "#EEE",
        textAlign: "center",
        textAlignVertical: "center",
        transform: [{translateY: -4}],
        borderWidth: 1,
        width: 86,
        height: 30
    },
    nextActivityText: {
        backgroundColor: "#FFDD00",
        borderTopLeftRadius: 8,
        textAlignVertical: "center",
        width: 55,
        height: 20,
        textAlign: "center",
        borderBottomRightRadius: 8,
        color: "white",
        fontSize: 10,
        position: "absolute",
    },
    prizeCount: {
        position: "absolute",
        color: "#B2B2B2",
        fontSize: 10,
        right: 0,
        transform: [
            {translateY: 30},
            {translateX: -14}
        ],
        top: "50%",
    },
    needSharedDays: {
        position: "absolute",
        color: "#4C4948",
        fontSize: 13,
        right: 0,
        transform: [
            {translateY: -40},
            {translateX: -25}
        ],
        top: "50%",
    },
    activityDesc: {
        color: "#4C4948",
        fontSize: 14,
        marginLeft: 15,
        marginBottom: 15,
    },
    title: {
        flex: 1,
        flexDirection: "row",
        position: "absolute",
        justifyContent: "space-between",
        width: windowWidth,
        height: 44,
    },
    slider: {
        marginTop: 50,
        marginBottom: 32,
        marginLeft: 15,
        marginRight: 15,
    },
    button: {
        alignSelf: "center",
        width: 30,
        height: 30,
    },
    point: {
        width: 7,
        alignSelf: "center",
        height: 7,
    },
    question: {
        position: "absolute",
        top: 10,
        right: 10,
        width: 20,
        height: 20,
    },
    giftBg: {
        position: "absolute",
        top: "50%",
        transform: [
            {translateY: -13}
        ],
        right: 20,
        width: 40,
        height: 40,
        backgroundColor: "#eee",
        borderRadius: 20,
    },
    gift: {
        position: "absolute",
        top: "50%",
        right: 28,
        transform: [
            {translateY: -5}
        ],
        width: 24,
        height: 24,
    },
    buttonBackground: {
        opacity: 0.5,
        alignSelf: "center",
        width: 30,
        height: 30,
        backgroundColor: "white",
        borderRadius: 20,
    },
    card: {
        backgroundColor: 'white',
        width: windowWidth - 40,
        marginTop: -35,
        borderRadius: 8,
        alignSelf: 'center',
        elevation: 1.1,
    }
});

module.exports = SignInScene;