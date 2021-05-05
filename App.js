import 'react-native-gesture-handler'
import React from 'react'
import Theme from './src/context/theme'

import Navigation from './src/routes/Navigation'

export default function App() {
    return (
        <Theme>
            <Navigation theme="dark" />
        </Theme>
    )
}
