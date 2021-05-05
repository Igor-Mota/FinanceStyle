import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

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
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: windowHeight,
        backgroundColor: themes['blue'].background,
        paddingRight: 15,
        paddingLeft: 15,
        flex: 1,
    },
})

export default styles
