import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Text, View } from 'react-native';
import { Header } from './Components/Header';
import { Home } from './Pages/Home';
import { NavigateBar } from './Components/NavigateBar';
import { Footer } from './Components/Footer';
import { Students } from './Pages/Students';
import { Events } from './Pages/Events';

export default function App() {
  return (
    <View style={styles.main}>
      <Header />
      <NavigateBar />
      <Home />
      <Students />
      <Events />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}