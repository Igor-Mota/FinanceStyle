import React, { useState, useEffect } from 'react'
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Keyboard,
} from 'react-native'
import { Container, Text } from '../../components/themes/themees'
import { Picker } from '@react-native-picker/picker'

const AddNew = () => {
    const [money, setMoney] = useState('Quantia gasta')
    const [selectedValue, setSelectedValue] = useState('dinheiro')
    const [task, setTask] = useState('Almoco')

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow)
        Keyboard.addListener('keyboardDidHide', _keyboardDidHide)

        return () => {
            Keyboard.removeListener('keyboardDidShow', _keyboardDidShow)
            Keyboard.removeListener('keyboardDidHide', _keyboardDidHide)
        }
    })

    const [keyboardStatus, setKeyboardStatus] = useState(undefined)
    const _keyboardDidShow = () => setKeyboardStatus('Keyboard Shown')
    const _keyboardDidHide = () => setKeyboardStatus('Keyboard Hidden')
    return (
        <Container h={1000}>
            <View style={addStyles.container}>
                <View>
                    <Text style={addStyles.title}>ADICIONAR</Text>
                </View>
                <ScrollView
                    style={
                        (keyboardStatus === 'Keyboard Shown') &
                        addStyles.keyBoardScroll
                    }
                >
                    <View style={addStyles.form}>
                        <TextInput
                            onChangeText={(text) => setMoney(text)}
                            value={money}
                            style={addStyles.input}
                        />

                        <View
                            style={{
                                borderWidth: 1,
                                borderColor: '#341D91',
                                borderRadius: 8,
                            }}
                        >
                            <Picker
                                selectedValue={selectedValue}
                                dropdownIconColor="#FFFFFF"
                                style={addStyles.input}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedValue(itemValue)
                                }
                            >
                                <Picker.Item
                                    label="Dinheiro"
                                    value="dinheiro"
                                />
                                <Picker.Item label="Cartao" value="cartao" />
                            </Picker>
                        </View>

                        <TextInput
                            onChangeText={(text) => setTask(text)}
                            value={task}
                            style={addStyles.input}
                        />

                        <TouchableOpacity style={addStyles.button}>
                            <Text style={addStyles.buttonText}>CADASTRAR</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </Container>
    )
}
export default AddNew

const addStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 60,
    },
    title: {
        color: '#c4c4c4',
        fontSize: 20,
    },
    form: {
        marginTop: 50,
        width: 320,
        height: 400,
        borderRadius: 8,
        backgroundColor: '#ffffff10',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    input: {
        width: 250,
        height: 50,
        backgroundColor: '#ffffff10',
        borderWidth: 1,
        borderColor: '#341D91',
        borderRadius: 4,
        color: '#c4c4c4',
        fontSize: 18,
        padding: 5,
    },
    button: {
        width: 240,
        height: 50,
        backgroundColor: '#341D91',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
    },
    buttonText: {
        color: '#c4c4c4',
        fontSize: 18,
    },
    keyBoardScroll: {
        height: 600,
    },
})
