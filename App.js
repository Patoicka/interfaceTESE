import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, View, StyleSheet } from 'react-native';

// Importa las pantallas
import { Home } from './Pages/Home';
import { Students } from './Pages/Students';
import { Events } from './Pages/Events';

// Importa los componentes
import { Header } from './Components/Header';
import { NavigateBar } from './Components/NavigateBar';
import { Footer } from './Components/Footer';

// Crea el stack navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>

        <Header />

        <NavigateBar />

        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Students" component={Students} />
          <Stack.Screen name="Events" component={Events} />
        </Stack.Navigator>

        <Footer />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
