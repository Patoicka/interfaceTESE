import React from 'react'
import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles'

export const NavigateBar = () => {
    return (
        <View style={styles.navigate}>
            <TouchableOpacity>
                <View style={styles.button.navigate}>
                    <Text style={styles.text.buttonNav}>
                        Inicio
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.button.navigate}>
                    <Text style={styles.text.buttonNav}>
                        Estudiantes
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.button.navigate}>
                    <Text style={styles.text.buttonNav}>
                        Eventos
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
