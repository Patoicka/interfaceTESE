import { Image, Text, View, SafeAreaView } from "react-native";
import { styles } from "../styles";

export const Header = () => {
    return (
        <SafeAreaView style={styles.header}>
            <Image style={{ height: 70, width: 70 }} source={require('../assets/images/teseLogo.png')} />
            <Text style={styles.text.header}>
                Tecnologico de Estudios Superiores de Ecatepec
            </Text>
            <Text style={{ height: 70, width: 70 }} />
        </SafeAreaView>
    );
};
