import React from 'react'
import { Button, View } from 'react-native'

const buttonMouth = ({ title, key, onPress }) => {
    let backgroundColor = '#fff'
    let styles = {
        backgroundColor: backgroundColor,
        borderWidth: 2,
        borderColor: '#fff',
        width: 500,
        height: 500,
    }

    return <View style={styles} onPress={() => {}}></View>
}

export default buttonMouth
