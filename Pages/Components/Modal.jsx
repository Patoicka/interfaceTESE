
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../../styles'

export const Modal = ({ tittle, onView, onCancel, children, }) => {

    return (
        <>
            {onView ?
                <View style={styles.modal.main}>
                    <View style={{ position: 'relative', justifyContent: 'flex-start', height: '100%', paddingTop: 15 }}>
                        <TouchableOpacity onPress={onCancel} style={{ padding: 10, position: 'absolute', right: 0 }}>
                            <Image
                                source={require('../../assets/images/x.png')}
                                style={{ width: 20, height: 20 }}
                            />
                        </TouchableOpacity>

                        <Text style={styles.modal.text.tittle}>
                            {tittle}
                        </Text>
                        <View style={styles.modal.children}>
                            {children}
                        </View>
                    </View>
                </View >
                : null}
        </>
    )
}
