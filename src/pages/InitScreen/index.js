import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import Logoinicio from '../../assets/LogoInicio.png'

export default function InitScreen({ children, navigation }) {
    function navigateToHome() {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 20)
    }

    return (
        <View style={styles.container}>
            {children}
            <Image source={Logoinicio} />
            {navigateToHome()}
        </View>
    )
}
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#050A30',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
