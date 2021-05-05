import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const settingsStyles = StyleSheet.create({
    container: {},
    section: {
        alignItems: 'center',
    },
    title: {
        color: '#c4c4c4',
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {},
    inputGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },
    text: {
        fontSize: 18,
        color: '#c4c4c4',
        width: 150,
    },
    input: {
        width: 150,
        height: 40,
        borderWidth: 1,
        borderColor: '#341D91',
        color: '#c4c4c4',
    },
    appliButton: {
        backgroundColor: '#341D91',
        width: 150,
        height: 50,
        color: '#c4c4c4',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginLeft: (width - 150) / 2,
    },
})

export default settingsStyles
