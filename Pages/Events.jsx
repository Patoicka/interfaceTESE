import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles'

export const Events = () => {
    return (
        <View style={styles.body.main}>
            <Text style={styles.text.welcome}>
                Eventos
            </Text>
            <View style={styles.events.main}>
                <View style={styles.events.containCards}>
                    <TouchableOpacity style={styles.events.card}>
                        <Text style={styles.text.buttonForm}>
                            Buscar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.events.card}>
                        <Text style={styles.text.buttonForm}>
                            Buscar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}
