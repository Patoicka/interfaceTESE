import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import { Home } from './Pages/Home';
import { Students } from './Pages/Students';
import { Events } from './Pages/Events';

import { Header } from './Components/Header';
import { NavigateBar } from './Components/NavigateBar';
import { Footer } from './Components/Footer';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1, paddingTop: 40 }}>

          <Header />

          <View style={{ width: '100%', alignItems: 'center' }}>
            <NavigateBar />
          </View>

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
    </Provider>
  );
};

export default App;
