import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import GirisSayfasi from './screens/GirisSayfasi';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
       <StatusBar
        backgroundColor="red"
        barStyle={Platform.OS === "ios" ? "dark-content" : "dark-content"}
        hidden={false}
        translucent={false}
      />

    <Stack.Navigator>


      <Stack.Screen
        name="login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />

<Stack.Screen
        name="anasayfa"
        options={{ headerShown: false }}
        component={HomeScreen}
      />


<Stack.Screen
        name="kayit"
        options={{ headerShown: false }}
        component={RegisterScreen}
      />

<Stack.Screen
        name="giris"
        options={{ headerShown: false }}
        component={GirisSayfasi}
      />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-around',
    
  },
});


