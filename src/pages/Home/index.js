import React, { useState } from 'react'
import {
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native'

import languages from '../../languages.json'

import HomeSpeending from '../../components/HomeSpeending'

import {
    Container,
    H1,
    H2,
    H3,
    Text,
    Header,
    Main,
} from '../../components/themes/themees'

import { useTheme } from '../../context/theme'
import colorss from '../../utils/selectTheme'

function Home(props) {
    let date = new Date()
    const actualyMounth = date.getMonth()
    const { height } = Dimensions.get('window')
    const [mounthSelected, setMouthSelected] = useState(`${actualyMounth}`)
    const [Speendings, setSpeendings] = useState([])

    const tempSpeending = [
        { icon: 'icon', task: 'Comida', money: '150,00', key: '1' },
        { icon: 'icon', task: 'Academia', money: '150,00', key: '2' },
        { icon: 'icon', task: 'Comida', money: '150,00', key: '3' },
        { icon: 'icon', task: 'Comida', money: '150,00', key: '4' },
        { icon: 'icon', task: 'Comida', money: '150,00', key: '5' },
        { icon: 'icon', task: 'Comida', money: '150,00', key: '6' },
        { icon: 'icon', task: 'Comida', money: '150,00', key: '7' },
        { icon: 'icon', task: 'Comida', money: '150,00', key: '8' },
    ]
    const mounthList = [
        { key: 'jan', id: '0' },
        { key: 'fev', id: '1' },
        { key: 'mar', id: '2' },
        { key: 'abr', id: '3' },
        { key: 'mai', id: '4' },
        { key: 'jun', id: '5' },
        { key: 'jul', id: '6' },
        { key: 'ago', id: '7' },
        { key: 'set', id: '8' },
        { key: 'out', id: '9' },
        { key: 'nov', id: '10' },
        { key: 'dez', id: '11' },
    ]
    const speending = []
    const cores = colorss(useTheme())

    return (
        <Container h={height}>
            <Header>
                <View>
                    <View style={{ marginTop: 50 }}>
                        <H2>{languages['pt-br'].home['bem-vindo']}</H2>
                    </View>
                    <H1>Usuario</H1>
                </View>
                <View>
                    <View style={styles.userImage}></View>
                </View>
            </Header>
            <Main>
                <H3>Gasto este mes</H3>
                <Text style={{ fontSize: 36 }}>3.999,00</Text>
            </Main>

            <View style={styles.sectionMounths}>
                <FlatList
                    data={mounthList}
                    horizontal
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            key={item.id}
                            style={
                                mounthSelected != item.id
                                    ? styles.mounths
                                    : styles.mounthSelected
                            }
                            onPress={(event) => {
                                setMouthSelected(item.id)
                            }}
                        >
                            <Text>{item.key}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View style={styles.sectionLastSpeeding}>
                <View style={styles.sectionLastSpeedingLine} />
                <FlatList
                    data={tempSpeending}
                    renderItem={({ item }) => (
                        <HomeSpeending
                            key={item.key}
                            icon={item.icon}
                            task={item.task}
                            money={item.money}
                        />
                    )}
                />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 40,
        backgroundColor: '#fff',
        marginTop: 50,
    },
    sectionMounths: {
        marginTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
    },
    mounths: {
        width: 40,
        height: 25,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mounthSelected: {
        width: 40,
        height: 25,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#ffffff10',
        borderRadius: 10,
        paddingBottom: 10,
        paddingTop: 8,
        marginBottom: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionLastSpeeding: {
        width: 320,
        height: 280,
        backgroundColor: '#ffffff10',
        borderRadius: 40,
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center',
    },
    sectionLastSpeedingLine: {
        width: 200,
        height: 1,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#c4c4c4',
    },
})

export default Home
