import React from 'react';
import { Modal } from './Modal';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from '../../styles';

const imageMap = {
    'soccerBall': require('../../assets/images/modals/soccerBall.png'),
    'futbolBall': require('../../assets/images/modals/futbolBall.png'),
    'voleyball': require('../../assets/images/modals/voleyball.png'),
    'basketball': require('../../assets/images/modals/basketball.png'),
};

export const ModalDeportivos = ({ onView, tittle, onCancel }) => {
    const { eventsDep } = useSelector(state => state.tese);

    const renderEvents = eventsDep.map(event => {
        return (
            <TouchableOpacity style={styles.card} key={event.id}>
                <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
                    <View style={{ width: '60%' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{event.title}</Text>
                        <Text>Fecha: {event.date}</Text>
                    </View>
                    <View style={{ width: '40%', position: 'relative' }}>
                        <Image
                            source={imageMap[event.image.split('/').pop().split('.')[0]]}
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: 60,
                                height: 60,
                                borderRadius: 10,
                                alignSelf: 'flex-start'
                            }}
                        />
                    </View>
                </View>
                <Text>{event.description}</Text>
            </TouchableOpacity>
        );
    });

    return (
        <Modal onView={onView} tittle={tittle} onCancel={onCancel}>
            <View style={styles.modalEvent}>{renderEvents}</View>
        </Modal>
    );
};
