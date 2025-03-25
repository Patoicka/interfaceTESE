import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ScrollView, SafeAreaView } from 'react-native';

import { Home } from './Pages/Home';
import { Students } from './Pages/Students';
import { Events } from './Pages/Events';

import { Header } from './Components/Header';
import { NavigateBar } from './Components/NavigateBar';
import { Footer } from './Components/Footer';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { styles } from './styles';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.main}>
          <SafeAreaView style={styles.container}>
            <Header />
            <NavigateBar />
            <ScrollView contentContainerStyle={styles.body}>
              <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
              >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Students" component={Students} />
                <Stack.Screen name="Events" component={Events} />
              </Stack.Navigator>
            </ScrollView>
            <Footer />
          </SafeAreaView>

        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
