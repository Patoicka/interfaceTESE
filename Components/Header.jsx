import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";
import Icon from 'react-native-vector-icons/FontAwesome';

export const Header = () => {
    return (
        <View style={styles.header.main}>
            <Image style={{ height: 70, width: 70 }} source={require('../assets/images/teseLogo.png')} />
            <Text style={styles.text.header}>
                TESE
            </Text>
            <Text style={{ height: 70, width: 70 }} />
        </View>
    );
};
