import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles'

export const Students = () => {

    const [matricula, setMatricula] = useState();
    const [errorMsj, setErrorMsj] = useState('');

    const onChangeMatricula = (e) => {
        if (isNaN(e)) {
            setErrorMsj('Solo se admiten números');
        } else {
            setErrorMsj('');
            setMatricula(e);
            if (e.length > 9) {
                setErrorMsj('Máximo 9 caracteres');
            } else setErrorMsj('');
        };
    };

    return (
        <View style={styles.body.main}>
            <Text style={styles.text.welcome}>
                Estudiantes
            </Text>
            <View style={styles.students.main}>
                <Text style={styles.text.span}>
                    Ingresar los datos del estudiante
                </Text>
                <View style={styles.students.form}>
                    <Text style={styles.text.label}> Matricula </Text>
                    <TextInput style={styles.input.studentForm} placeholder='Ingresar matricula' onChangeText={onChangeMatricula} />
                    {errorMsj.length > 0 && (
                        <Text style={styles.text.warn}>
                            {errorMsj}
                        </Text>
                    )}
                    <TouchableOpacity style={styles.button.studentForm} disabled={!!errorMsj}>
                        <Text style={styles.text.buttonForm}>
                            Buscar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}
