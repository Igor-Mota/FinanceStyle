import React, { useState, useEffect } from 'react'
import { View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import styles from '../../styles/index'
import settingsStyles from './styles'

import { Container, Text } from '../../components/themes/themees'
import { useTheme } from '../../context/theme'

const UserSettings = () => {
    const [selectedValue, setSelectedValue] = useState('dinheiroa')

    const [theme, setTheme] = useState('blue')
    const { changeTheme, setChangeTheme } = useTheme()
    const [selectedTheme, setSelectedTheme] = useState(changeTheme)

    console.log(changeTheme)
    function appli() {
        setChangeTheme(selectedTheme)
        console.log(changeTheme)
    }

    return (
        <Container h={1000}>
            <View style={{ marginBottom: 80 }} />
            <ScrollView style={settingsStyles.container}>
                <View style={settingsStyles.section}>
                    <Text style={settingsStyles.title}>
                        Configuracoes do app
                    </Text>
                    <View style={{ marginBottom: 30 }} />
                    <View style={settingsStyles.content}>
                        <View style={settingsStyles.inputGroup}>
                            <Text style={settingsStyles.text}>
                                Nome de usuario
                            </Text>
                            <TextInput style={settingsStyles.input} />
                        </View>
                        <View style={settingsStyles.inputGroup}>
                            <Text style={settingsStyles.text}>
                                Foto de perfil
                            </Text>
                            <TouchableOpacity
                                style={settingsStyles.input}
                                value="selecione a Imagem"
                            />
                        </View>
                        <View style={settingsStyles.inputGroup}>
                            <Text style={settingsStyles.text}>Linguagem</Text>
                            <View
                                style={{
                                    borderColor: '#341D91',
                                    borderWidth: 1,
                                }}
                            >
                                <Picker
                                    selectedValue={selectedValue}
                                    dropdownIconColor="#FFFFFF"
                                    style={settingsStyles.input}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedValue(itemValue)
                                    }
                                >
                                    <Picker.Item
                                        label="Portugues"
                                        value="pt-br"
                                    />
                                    <Picker.Item label="Eglish" value="en-eu" />
                                </Picker>
                            </View>
                        </View>
                        <View style={settingsStyles.inputGroup}>
                            <Text style={settingsStyles.text}>Tema</Text>
                            <View
                                style={{
                                    borderColor: '#341D91',
                                    borderWidth: 1,
                                }}
                            >
                                <Picker
                                    selectedValue={selectedTheme}
                                    dropdownIconColor="#FFFFFF"
                                    style={settingsStyles.input}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedTheme(itemValue)
                                    }
                                >
                                    <Picker.Item label="escuro" value="dark" />
                                    <Picker.Item label="azul" value="blue" />
                                    <Picker.Item label="roxo" value="purple" />
                                    <Picker.Item label="ligth" value="ligth" />
                                </Picker>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 30 }} />
                <View style={settingsStyles.section}>
                    <Text style={settingsStyles.title}>
                        Configuracoes de gastos
                    </Text>
                    <View style={{ marginBottom: 30 }} />
                    <View style={settingsStyles.content}>
                        <View style={settingsStyles.inputGroup}>
                            <Text style={settingsStyles.text}>
                                Limite do cartao
                            </Text>
                            <TextInput style={settingsStyles.input} />
                        </View>
                        <View style={settingsStyles.inputGroup}>
                            <Text style={settingsStyles.text}>
                                Limite de gastos
                            </Text>
                            <TextInput style={settingsStyles.input} />
                        </View>
                        <View style={settingsStyles.inputGroup}>
                            <Text style={settingsStyles.text}>Linguagem</Text>
                            <View
                                style={{
                                    borderColor: '#341D91',
                                    borderWidth: 1,
                                }}
                            >
                                <Picker
                                    selectedValue={selectedValue}
                                    dropdownIconColor="#FFFFFF"
                                    style={settingsStyles.input}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedValue(itemValue)
                                    }
                                >
                                    <Picker.Item label="Este mes" value="0" />
                                    <Picker.Item label="Sempre" value="0" />
                                </Picker>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={settingsStyles.appliButton}
                    onPress={() => {
                        appli()
                    }}
                >
                    <Text style={settingsStyles.title}>APLICAR</Text>
                </TouchableOpacity>
                <View style={{ height: 50 }} />
            </ScrollView>
        </Container>
    )
}

export default UserSettings
