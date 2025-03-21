
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../../styles'

export const Modal = ({ tittle, onView, onCancel, children, }) => {

    return (
        <>
            {onView ?
                <View style={styles.modal.main}>
                    <View style={{ position: 'relative', paddingVertical: 20 }}>
                        <TouchableOpacity onPress={onCancel}>
                            <Image
                                source={require('../../assets/images/x.png')}
                                style={{ width: 15, height: 15, position: 'absolute', top: -20, right: 10 }} />
                        </TouchableOpacity>
                        <Text style={styles.modal.text.tittle}>
                            {tittle}
                        </Text>
                        {children}
                    </View>
                </View>
                : null}
        </>
    )
}
