import React from 'react'
import { Image, Text, View } from 'react-native';
import { styles } from '../styles';

export const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.text.footer}>
                TECNOLOGICO DE ESTUDIOS SUPERIORES DE ECATEPEC
            </Text>
            <Text style={styles.text.footer}>
                <Image style={{ height: 10, width: 10 }} source={require('../assets/images/pin.png')} />
                Valle de Anáhuac S/N, Ecatepec de Morelos, Estado de México
            </Text>
        </View>
    );
}
