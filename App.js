import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import GirisSayfasi from "./screens/GirisSayfasi";
import ForgotPassword from "./screens/ForgotPassword";
import Kardiyo from "./screens/Egzersizler/Kardiyo";
import Bacak from "./screens/Egzersizler/Bacak";
import Sırt from "./screens/Egzersizler/Sırt";
import Onkol from "./screens/Egzersizler/Onkol";
import Arkakol from "./screens/Egzersizler/Arkakol";




export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar hidden={false} translucent={true} />

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

        <Stack.Screen
          name="sifremiUnuttum"
          options={{ headerShown: false }}
          component={ForgotPassword}
        />

        <Stack.Screen
          name="kardiyo"
          options={{ headerShown: false }}
          component={Kardiyo}
        />

        <Stack.Screen
          name="bacak"
          options={{ headerShown: false }}
          component={Bacak}
        />

        <Stack.Screen
          name="sırt"
          options={{ headerShown: false }}
          component={Sırt}
        />

        <Stack.Screen
          name="önkol"
          options={{ headerShown: false }}
          component={Onkol}
        />

        <Stack.Screen
          name="arkakol"
          options={{ headerShown: false }}
          component={Arkakol}
        />

        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
