import React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

import BalanceData from '../../components/balanceSpeending'

import {
    Container,
    Text,
    H2,
    Round2,
    Round,
} from '../../components/themes/themees'

import colors from '../../utils/selectTheme'
import { useTheme } from '../../context/theme'

const Balance = () => {
    const themeColors = colors(useTheme().changeTheme)

    const { height } = Dimensions.get('window')
    return (
        <Container h={height}>
            <View style={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Round>
                        <Round2>
                            <Text>Balanco</Text>
                            <Text>R$150,00</Text>
                            <View />
                        </Round2>
                    </Round>
                    <View style={{ marginLeft: 10 }}>
                        <View
                            style={{
                                marginTop: 30,
                                display: 'flex',
                                flexDirection: 'row',
                            }}
                        >
                            <View>
                                <Ionicons
                                    name="ios-card-sharp"
                                    size={42}
                                    color={themeColors.text}
                                />
                            </View>
                            <View
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginLeft: 5,
                                }}
                            >
                                <H2>R$ 200,00</H2>
                                <Text style={{ fontSize: 12 }}>
                                    Cartao de credito
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                marginTop: 30,
                                display: 'flex',
                                flexDirection: 'row',
                            }}
                        >
                            <View>
                                <FontAwesome5
                                    name="money-bill-wave"
                                    size={32}
                                    color={themeColors.text}
                                />
                            </View>
                            <View
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginLeft: 5,
                                }}
                            >
                                <H2>R$ 200,00</H2>
                                <Text style={{ fontSize: 16 }}>Dinheiro</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        width: 320,
                        height: 300,
                        backgroundColor: '#ffffff10',
                        borderRadius: 20,
                        marginTop: 25,
                    }}
                >
                    <View
                        style={{
                            width: 200,
                            height: 3,
                            backgroundColor: themeColors.text,
                            marginTop: 30,
                            marginBottom: 30,
                        }}
                    ></View>
                    <BalanceData />
                </View>
            </View>
        </Container>
    )
}

export default Balance
