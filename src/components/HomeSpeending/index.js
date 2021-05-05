import React from 'react'
import { View } from 'react-native'
import { Text } from '../themes/themees'
import styles from './styles'

import { useTheme } from '../../context/theme'
import colors from '../../utils/selectTheme'

import { MaterialIcons } from '@expo/vector-icons'

function HomeSpeending({ icon, task, money }) {
    const coloIcons = colors(useTheme().changeTheme)

    return (
        <View style={styles.container}>
            <View style={styles.leftContent}>
                <View style={{ marginRight: 10 }}>
                    <MaterialIcons
                        name="fastfood"
                        size={36}
                        color={coloIcons.text}
                    />
                </View>
                <Text>{task}</Text>
            </View>
            <View style={styles.rightContent}>
                <Text>{money}</Text>
            </View>
        </View>
    )
}

export default HomeSpeending
