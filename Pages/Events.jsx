import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles'
import { ModalDeportivos } from './Components/ModalDeportivos';
import { ModalCulturales } from './Components/ModalCulturales';
import { ModalAcademics } from './Components/ModalAcademics';

export const Events = () => {

    const [modalDep, setModalDep] = useState(false);
    const [modalCulture, setModalCulture] = useState(false);
    const [modalAcedemics, setModalAcademics] = useState(false);

    const openModalD = () => {
        setModalDep(true);
    };
    const openModalC = () => {
        setModalCulture(true);
    };
    const openModalA = () => {
        setModalAcademics(true);
    };

    return (
        <>
            <View style={styles.body.main}>
                <Text style={styles.text.welcome}>
                    Eventos
                </Text>
                <View style={styles.events.main}>
                    <View style={styles.events.containCards}>
                        <TouchableOpacity style={styles.events.card} onPress={openModalD}>
                            <Text style={styles.text.buttonCard}>
                                Deportivos
                            </Text>
                            <Image
                                source={require('../assets/images/teseCanchas.jpg')}
                                style={{ width: 150, height: 150, borderRadius: 10, marginVertical: 20 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.events.card} onPress={openModalC}>
                            <Text style={styles.text.buttonCard}>
                                Culturales
                            </Text>
                            <Image
                                source={require('../assets/images/teseAudi.jpg')}
                                style={{ width: 150, height: 150, borderRadius: 10, marginVertical: 20 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.events.cardHorizontal} onPress={openModalA}>
                        <Text style={styles.text.buttonCard}>
                            Academicos
                        </Text>
                        <Image
                            source={require('../assets/images/teseBiblio.jpg')}
                            style={{ width: 150, height: 150, borderRadius: 10, marginVertical: 20 }}
                        />
                    </TouchableOpacity>
                </View>
            </View >

            <ModalDeportivos
                onView={modalDep}
                tittle={'Eventos Deportivos'}
                onCancel={() => setModalDep(false)}
            />
            <ModalCulturales
                onView={modalCulture}
                tittle={'Eventos Culturales'}
                onCancel={() => setModalCulture(false)}
            />
            <ModalAcademics
                onView={modalAcedemics}
                tittle={'Eventos Academicos'}
                onCancel={() => setModalAcademics(false)}
            />
        </>
    )
}
