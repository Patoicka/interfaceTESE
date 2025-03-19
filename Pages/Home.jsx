import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from '../styles';

export const Home = () => {
    return (
        <View style={styles.body.main}>
            <Text style={styles.text.welcome}>
                Bienvenido a nuestra página
            </Text>
            <View style={styles.body.welcome}>
                <Text style={styles.text.description}>
                    Desde aqui podras echar un vistazo a nuestros proximos eventos,
                    conocer fechas de egreso de algunos de nuestros estudiantes y encontrar
                    datos relacionados a nosotros.
                </Text>
                <View style={styles.body.icon}>
                    <Image
                        style={{ height: 130, width: 130 }}
                        source={require('../assets/images/student.png')}
                    />
                    <Image
                        style={{ height: 130, width: 130 }}
                        source={require('../assets/images/calendar.png')}
                    />
                </View>
                <Text style={styles.text.others}>
                    Navega entre nuestras diferentes secciones para encontrar
                    la información que estas buscando. En caso de ser neceserio puedes
                    contactar a nuestro número de contacto.
                </Text>
            </View>
        </View>
    );
};
