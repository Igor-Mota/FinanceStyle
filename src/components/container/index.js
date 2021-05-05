import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { useTheme } from '../../context/theme'

function Container({ children }) {
    const { changeTheme } = useTheme()

    const { height } = Dimensions.get('window')
    const themes = {
        dark: {
            background: '#050A30',
            textColor: '#c4c4c4',
        },
        blue: {
            background: '#0191AE',
            textColor: '#c4c4c4',
        },
        aqua: {},
        ciano: {},
    }
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: height,
            backgroundColor: themes[changeTheme].background,
            paddingRight: 7,
            paddingLeft: 7,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
    })
    return <View style={styles.container}>{children}</View>
}
export default Container
