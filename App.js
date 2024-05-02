import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import GirisSayfasi from "./screens/GirisSayfasi";
import Kardiyo from "./screens/Egzersizler/Kardiyo";
import Bacak from "./screens/Egzersizler/Bacak";
import Sırt from "./screens/Egzersizler/Sırt";
import Onkol from "./screens/Egzersizler/Onkol";
import Arkakol from "./screens/Egzersizler/Arkakol";
import Gogus from "./screens/Egzersizler/Gogus";
import Aletler from "./screens/Aletler";
import ForgotPassword from "./screens/ForgotPassword";
import Dambil from "./screens/Aletler/Dambil";
import Karın from "./screens/Egzersizler/Karın";
import omuz from "./screens/Egzersizler/Omuz";
import Deadlift from "./screens/Egzersizler/Deadlift";
import Plank from "./screens/Egzersizler/Plank";
import Kalça from "./screens/Egzersizler/Kalça";
import Barfiks from "./screens/Egzersizler/Barfiks";
import Fitnesseldiveni from "./screens/Aletler/Fitnesseldiveni";
import Fitnessipi from "./screens/Aletler/Fitnessipi";
import Bisiklet from "./screens/Aletler/Bisiklet";
import Pilatestopu from "./screens/Aletler/Pilatestopu";
import Fitnessbarı from "./screens/Aletler/Fitnessbarı";
import Girya from "./screens/Aletler/Girya";
import Steptahtası from "./screens/Aletler/Steptahtası";
import Mekikaleti from "./screens/Aletler/Mekikaleti";
import Fitnessplakaları from "./screens/Aletler/Fitnessplakaları";
import Fitnesssehpası from "./screens/Aletler/Fitnesssehpası";
import Koşubandı from "./screens/Aletler/Koşubandı";
import Deadliftt from "./screens/Aletler/Deadliftt";


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

        <Stack.Screen
          name="gogus"
          options={{ headerShown: false }}
          component={Gogus}
        />

        <Stack.Screen
          name="Karın"
          options={{ headerShown: false }}
          component={Karın}
        />

        <Stack.Screen
          name="omuz"
          options={{ headerShown: false }}
          component={omuz}
        />
        
        <Stack.Screen
          name="Deadlift"
          options={{ headerShown: false }}
          component={Deadlift}
        />
        
        <Stack.Screen
          name="Plank"
          options={{ headerShown: false }}
          component={Plank}
        />
        <Stack.Screen
          name="kalça"
          options={{ headerShown: false }}
          component={Kalça}
        />
        <Stack.Screen
          name="Barfiks"
          options={{ headerShown: false }}
          component={Barfiks}
        />
        
        <Stack.Screen
          name="aletler"
          options={{ headerShown: false }}
          component={Aletler}
        />

        <Stack.Screen
          name="dambil"
          options={{ headerShown: false }}
          component={Dambil}
        />
        <Stack.Screen
          name="Deadliftt"
          options={{ headerShown: false }}
          component={Deadliftt}
        />

        <Stack.Screen
          name="Fitnesseldiveni"
          options={{ headerShown: false }}
          component={Fitnesseldiveni}
        />
        <Stack.Screen
          name="Fitnessipi"
          options={{ headerShown: false }}
          component={Fitnessipi}
        />
        <Stack.Screen
          name="Bisiklet"
          options={{ headerShown: false }}
          component={Bisiklet}
        />
        <Stack.Screen
          name="Pilatestopu"
          options={{ headerShown: false }}
          component={Pilatestopu}
        />
        <Stack.Screen
          name="Fitnessbarı"
          options={{ headerShown: false }}
          component={Fitnessbarı}
        />
        <Stack.Screen
          name="Girya"
          options={{ headerShown: false }}
          component={Girya}
        />
        <Stack.Screen
          name="Steptahtası"
          options={{ headerShown: false }}
          component={Steptahtası}
        />
        <Stack.Screen
          name="Mekikaleti"
          options={{ headerShown: false }}
          component={Mekikaleti}
        />
        <Stack.Screen
          name="Fitnessplakaları"
          options={{ headerShown: false }}
          component={Fitnessplakaları}
        />
        <Stack.Screen
          name="Fitnesssehpası"
          options={{ headerShown: false }}
          component={Fitnesssehpası}
        />
        <Stack.Screen
          name="Koşubandı"
          options={{ headerShown: false }}
          component={Koşubandı}
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
