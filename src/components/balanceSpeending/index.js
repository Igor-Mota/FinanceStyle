import React, { useState, useMemo, useEffect } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { Text } from '../themes/themees'
import colors from '../../utils/selectTheme'
import { useTheme } from '../../context/theme'

const balanceSpeending = () => {
    const iconColors = colors(useTheme().changeTheme)

    const speending = [
        { cartao: 'cartao', money: '150,00', id: '1' },
        { cartao: 'cartao', money: '150,00', id: '2' },
        { cartao: 'cartao', money: '150,00', id: '3' },
        { cartao: 'cartao', money: '150,00', id: '4' },
        { cartao: 'cartao', money: '150,00', id: '5' },
        { cartao: 'cartao', money: '150,00', id: '6' },
        { cartao: 'cartao', money: '150,00', id: '7' },
        { cartao: 'cartao', money: '150,00', id: '8' },
    ]
    return (
        <FlatList
            data={speending}
            renderItem={({ item }) => (
                <View style={styles.container} key={item.id}>
                    <View style={styles.leftContent}>
                        <Ionicons
                            name="ios-card-sharp"
                            size={36}
                            color={iconColors.text}
                        />
                        <Text>{item.cartao}</Text>
                    </View>
                    <View
                        style={{
                            width: 54,
                            height: 3,
                            backgroundColor: iconColors.text,
                            marginLeft: 15,
                            marginRight: 15,
                        }}
                    ></View>

                    <View>
                        <Text>R$ {item.money}</Text>
                    </View>
                </View>
            )}
        />
    )
}
export default balanceSpeending

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 55,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: '#c4c4c4',
        fontSize: 18,
        marginLeft: 15,
    },
    line: {
        width: 54,
        height: 3,
        backgroundColor: '#c4c4c4',
        marginLeft: 15,
        marginRight: 15,
    },
})
