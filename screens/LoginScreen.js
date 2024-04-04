import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import { useFonts } from "expo-font";

export default function LoginScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    StatusBar.setBackgroundColor("#fff");
    StatusBar.setBarStyle("dark-content");
  }, []);


  const [fontsLoaded, fontError] = useFonts({
    font1: require("../assets/fonts/RobotoSlab-Light.ttf"),
    font2: require("../assets/fonts/PlayfairDisplay-Black.ttf"),
    font3: require("../assets/fonts/PlayfairDisplay-Regular.ttf"),
    font4: require("../assets/fonts/PlayfairDisplay-Medium.ttf"),
    font5: require("../assets/fonts/RobotoSlab-Medium.ttf"),
    font6: require("../assets/fonts/RobotoSlab-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }


  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("anasayfa");
      }
    });
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Kullanıcı giriş yaptı", user.email);
      })
      .catch((error) => alert(error.message));
  };





  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoşgeldiniz</Text>

      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder="Kullanıcı Adı"
        placeholderTextColor={"black"}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder="Şifre"
        placeholderTextColor={"black"}
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
      />

      
      <TouchableOpacity
      onPress={()=>navigation.navigate("sifremiUnuttum")}>
        <Text>Şifremi Unuttum</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        // onPress={handleLogin} // Daha sonra açılacak
        onPress={()=>navigation.navigate("anasayfa")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Giriş</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={() => navigation.navigate("kayit")}
      >
        <Text style={styles.buttonText}>kayıt ol</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "darkblue",
    padding: 10,
    width: 190,
    borderRadius: 30,
    marginTop: "10%",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "white",
    margin: "auto",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Roboto",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontFamily:"font4",
  },
  input: {
    padding: 15,
    borderRadius: 10,
    width: 300,
    marginTop: 20,
    backgroundColor: "rgba(0,0,255,0.2)",
  },
});
