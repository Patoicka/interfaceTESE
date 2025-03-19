import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles';

export const NavigateBar = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.navigate}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={styles.button.navigate}>
                    <Text style={styles.text.buttonNav}>
                        Inicio
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Students')}>
                <View style={styles.button.navigate}>
                    <Text style={styles.text.buttonNav}>
                        Estudiantes
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Events')}>
                <View style={styles.button.navigate}>
                    <Text style={styles.text.buttonNav}>
                        Eventos
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
